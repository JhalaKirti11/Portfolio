import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  // In development, it is acceptable to start without a DB URL; routes should handle absence gracefully
  // Throw only if routes actually try to query and no URL is provided
}

export const sql = databaseUrl ? neon(databaseUrl) : undefined;
export const db = sql ? drizzle(sql) : undefined;


