import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function GET() {
  const rows = await sql`select * from projects order by sort_order asc, id asc`;
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { slug, name, tag, description, stack, features, liveUrl, githubUrl } = body;

  if (!slug || !name || !description) {
    return NextResponse.json({ error: "slug, name, and description are required" }, { status: 400 });
  }

  await sql`
    insert into projects (slug, name, tag, description, stack, features, live_url, github_url)
    values (${slug}, ${name}, ${tag ?? ""}, ${description}, ${stack ?? []}, ${features ?? []}, ${liveUrl ?? null}, ${githubUrl ?? null})
  `;

  return NextResponse.json({ ok: true });
}