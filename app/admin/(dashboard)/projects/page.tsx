import Link from "next/link";
import { sql } from "@/lib/db";
import DeleteProjectButton from "@/components/admin/DeleteProjectButton";

type Row = { id: number; slug: string; name: string };

export default async function AdminProjectsPage() {
  const projects = (await sql`
    select id, slug, name from projects order by sort_order asc, id asc
  `) as Row[];

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <h1 className="font-display font-extrabold text-2xl">Projects</h1>
        <Link href="/admin/projects/new" className="btn btn-fill py-2 px-5 text-sm">
          + Add project
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((p) => (
          <div key={p.id} className="card p-5 flex flex-wrap justify-between items-center gap-3">
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-dim text-xs">{p.slug}</p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link href={`/admin/projects/${p.id}`} className="text-accent font-semibold">
                Edit
              </Link>
              <DeleteProjectButton id={p.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}