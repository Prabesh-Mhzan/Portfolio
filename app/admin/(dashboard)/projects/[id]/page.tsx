import { sql } from "@/lib/db";
import { notFound } from "next/navigation";
import ProjectForm from "@/components/admin/ProjectForm";

type Row = {
  id: number;
  slug: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  features: string[];
  live_url: string | null;
  github_url: string | null;
};

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rows = (await sql`select * from projects where id = ${id}`) as Row[];
  const row = rows[0];
  if (!row) notFound();

  return (
    <div>
      <h1 className="font-display font-extrabold text-2xl mb-6">Edit project</h1>
      <ProjectForm
        mode="edit"
        projectId={row.id}
        initial={{
          slug: row.slug,
          name: row.name,
          tag: row.tag,
          description: row.description,
          stack: row.stack,
          features: row.features,
          liveUrl: row.live_url ?? undefined,
          githubUrl: row.github_url ?? undefined,
        }}
      />
    </div>
  );
}