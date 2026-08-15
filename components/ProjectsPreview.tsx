import Link from "next/link";
import { getProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default async function ProjectsPreview() {
  const projects = await getProjects();
  return (
    <section id="portfolio" className="container-px py-24 border-t border-line">
      <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
        <h2 className="font-display font-extrabold text-3xl md:text-4xl">
          Selected projects
        </h2>
        <Link href="/projects" className="text-accent text-sm font-semibold">
          View all →
        </Link>
      </div>
      <div className="flex flex-col gap-5">
        {projects.slice(0, 2).map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
