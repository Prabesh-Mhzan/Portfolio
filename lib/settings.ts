import { sql } from "./db";

// Reads all rows from site_settings into a simple { key: value } object.
export async function getSettings(): Promise<Record<string, string>> {
  const rows = await sql`select key, value from site_settings`;
  const settings: Record<string, string> = {};
  for (const r of rows as { key: string; value: string }[]) {
    settings[r.key] = r.value;
  }
  return settings;
}