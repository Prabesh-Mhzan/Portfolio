import { neon } from "@neondatabase/serverless";

// Reads your Neon connection string from the DATABASE_URL env var.
export const sql = neon(process.env.DATABASE_URL!);