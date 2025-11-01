import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "node:http";
import { storage } from "./storage";
import { db } from "./db";
import { blogPosts, insertBlogPostSchema } from "@shared/schema";
import { eq, sql } from "drizzle-orm";
import { randomUUID } from "crypto";
import { z } from "zod";

function estimateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return minutes;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // simple admin token store in-memory
  const adminTokens = new Set<string>();

  function requireAdmin(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization || "";
    const [, token] = auth.split(" ");
    if (token && adminTokens.has(token)) return next();
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Auth: POST /api/login
  app.post("/api/login", (req: Request, res: Response) => {
    const { username, password } = (req.body || {}) as {
      username?: string;
      password?: string;
    };
    const adminUser = process.env.ADMIN_USER;
    const adminPass = process.env.ADMIN_PASS;
    if (!adminUser || !adminPass) {
      return res
        .status(500)
        .json({ message: "Server not configured for admin login" });
    }
    if (username === adminUser && password === adminPass) {
      const token = randomUUID();
      adminTokens.add(token);
      return res.json({ token });
    }
    return res.status(401).json({ message: "Unauthorized" });
  });

  // Blogs
  app.get("/api/blogs", async (_req: Request, res: Response) => {
    if (!db) return res.json([]);
    try {
      const rows = await db.select().from(blogPosts);
      return res.json(rows);
    } catch (error) {
      console.error("Database error:", error);
      return res.json([]);
    }
  });

  app.post("/api/blogs", requireAdmin, async (req: Request, res: Response) => {
    if (!db) return res.status(503).json({ message: "DB not configured" });
    const createSchema = z.object({
      title: z.string().min(1),
      slug: z.string().min(1),
      excerpt: z.string().min(1),
      content: z.string().min(1),
      featuredImage: z.string().optional(),
    });
    const parse = createSchema.safeParse(req.body);
    if (!parse.success) {
      return res.status(400).json({ message: "Invalid body" });
    }
    const readingTime = estimateReadingTime(parse.data.content);
    const now = new Date();
    const [created] = await db
      .insert(blogPosts)
      .values({
        ...parse.data,
        readingTime,
        likes: 0,
        shares: 0,
        createdAt: now,
        updatedAt: now,
      })
      .returning();
    return res.status(201).json(created);
  });

  app.put(
    "/api/blogs/:id",
    requireAdmin,
    async (req: Request, res: Response) => {
      if (!db) return res.status(503).json({ message: "DB not configured" });
      const id = req.params.id;
      const parse = insertBlogPostSchema.partial().safeParse(req.body);
      if (!parse.success) {
        return res.status(400).json({ message: "Invalid body" });
      }
      const updates = { ...parse.data, updatedAt: new Date() } as any;
      const [updated] = await db
        .update(blogPosts)
        .set(updates)
        .where(eq(blogPosts.id, id))
        .returning();
      if (!updated) return res.status(404).json({ message: "Not found" });
      return res.json(updated);
    },
  );

  app.delete(
    "/api/blogs/:id",
    requireAdmin,
    async (req: Request, res: Response) => {
      if (!db) return res.status(503).json({ message: "DB not configured" });
      const id = req.params.id;
      const [deletedRow] = await db
        .delete(blogPosts)
        .where(eq(blogPosts.id, id))
        .returning();
      if (!deletedRow) return res.status(404).json({ message: "Not found" });
      return res.status(204).end();
    },
  );

  // Get single blog post by slug (must come before /like and /share routes)
  app.get("/api/blogs/:slug", async (req: Request, res: Response) => {
    if (!db) return res.status(503).json({ message: "DB not configured" });
    try {
      const slug = req.params.slug;
      const [post] = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, slug))
        .limit(1);
      if (!post) return res.status(404).json({ message: "Not found" });
      return res.json(post);
    } catch (error) {
      console.error("Database error:", error);
      return res.status(503).json({ message: "Database connection error" });
    }
  });

  // Toggle like for a blog post by slug (public endpoint)
  app.patch("/api/blogs/:slug/like", async (req: Request, res: Response) => {
    if (!db) return res.status(503).json({ message: "DB not configured" });
    try {
      const slug = req.params.slug;
      const { action } = (req.body || {}) as { action?: "like" | "unlike" };
      
      // Get current post to check likes count
      const [post] = await db
        .select()
        .from(blogPosts)
        .where(eq(blogPosts.slug, slug))
        .limit(1);
      
      if (!post) return res.status(404).json({ message: "Not found" });
      
      // Determine increment or decrement based on action
      const increment = action === "like" ? 1 : action === "unlike" ? -1 : 1;
      const newLikes = Math.max(0, post.likes + increment);
      
      const [updated] = await db
        .update(blogPosts)
        .set({
          likes: newLikes,
          updatedAt: new Date(),
        })
        .where(eq(blogPosts.slug, slug))
        .returning();
      
      return res.json(updated);
    } catch (error) {
      console.error("Database error:", error);
      return res.status(503).json({ message: "Database connection error" });
    }
  });

  // Increment shares for a blog post by slug (public endpoint)
  app.patch("/api/blogs/:slug/share", async (req: Request, res: Response) => {
    if (!db) return res.status(503).json({ message: "DB not configured" });
    try {
      const slug = req.params.slug;
      const [updated] = await db
        .update(blogPosts)
        .set({
          shares: sql`${blogPosts.shares} + 1`,
          updatedAt: new Date(),
        })
        .where(eq(blogPosts.slug, slug))
        .returning();
      if (!updated) return res.status(404).json({ message: "Not found" });
      return res.json(updated);
    } catch (error) {
      console.error("Database error:", error);
      return res.status(503).json({ message: "Database connection error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
