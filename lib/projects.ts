import { sql } from "./db";

export type Project = {
  id?: number;
  slug: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type ProjectRow = {
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

function mapRow(r: ProjectRow): Project {
  return {
    id: r.id,
    slug: r.slug,
    name: r.name,
    tag: r.tag,
    description: r.description,
    stack: r.stack,
    features: r.features,
    liveUrl: r.live_url ?? undefined,
    githubUrl: r.github_url ?? undefined,
  };
}

export async function getProjects(): Promise<Project[]> {
  const rows = (await sql`
    select * from projects order by sort_order asc, id asc
  `) as ProjectRow[];
  return rows.map(mapRow);
}