import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;

// Validate DATABASE_URL if it exists (should be a proper PostgreSQL connection string)
let sql: ReturnType<typeof neon> | undefined;
let db: ReturnType<typeof drizzle> | undefined;

if (databaseUrl) {
  // Check if DATABASE_URL looks like a placeholder
  if (
    databaseUrl.includes("user:password@host") ||
    databaseUrl.includes("@host") ||
    databaseUrl.includes("://user:password@") ||
    databaseUrl === "postgresql://user:password@host/database?sslmode=require"
  ) {
    console.warn("⚠️  DATABASE_URL appears to be a placeholder. Skipping database connection.");
    console.warn("    Please set a valid database connection string in your .env file.");
    console.warn("    The app will run without database support (blog features will be disabled).");
    sql = undefined;
    db = undefined;
  } else {
    try {
      sql = neon(databaseUrl);
      db = drizzle(sql);
      console.log("✓ Database connection initialized successfully");
    } catch (error) {
      console.error("⚠️  Failed to initialize database connection:", error);
      sql = undefined;
      db = undefined;
    }
  }
} else {
  console.log("ℹ️  No DATABASE_URL provided. Running without database support.");
}

export { sql, db };


