import { NextRequest, NextResponse } from "next/server";
import { sql } from "@/lib/db";

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const { slug, name, tag, description, stack, features, liveUrl, githubUrl } = body;

  await sql`
    update projects set
      slug = ${slug},
      name = ${name},
      tag = ${tag ?? ""},
      description = ${description},
      stack = ${stack ?? []},
      features = ${features ?? []},
      live_url = ${liveUrl ?? null},
      github_url = ${githubUrl ?? null}
    where id = ${id}
  `;

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await sql`delete from projects where id = ${id}`;
  return NextResponse.json({ ok: true });
}