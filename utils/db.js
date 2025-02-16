import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

console.log("Database URL:", process.env.NEXT_PUBLIC_DRIZZLE_DB_URL); // Debugging

if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error("Missing NEXT_PUBLIC_DRIZZLE_DB_URL in environment variables");
}

const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);
export const db = drizzle(sql, { schema });
