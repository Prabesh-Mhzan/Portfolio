import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const rows = await sql`select key, value from site_settings`;
  const settings: Record<string, string> = {};
  for (const r of rows as { key: string; value: string }[]) settings[r.key] = r.value;
  return NextResponse.json(settings);
}

export async function PUT(req: NextRequest) {
  const body = (await req.json()) as Record<string, string>;

  for (const [key, value] of Object.entries(body)) {
    await sql`
      insert into site_settings (key, value) values (${key}, ${value})
      on conflict (key) do update set value = excluded.value
    `;
  }

  return NextResponse.json({ ok: true });
}