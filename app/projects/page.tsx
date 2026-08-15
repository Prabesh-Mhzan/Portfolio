
import { getProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = { title: "Projects | Prabesh Maharjan" };

export default async function ProjectsPage() {
  const projects = await getProjects();
  return (
    <main className="container-px py-20">
      <h1 className="font-display font-extrabold text-4xl md:text-5xl mb-4">
        Projects
      </h1>
      <p className="text-dim mb-14 max-w-xl">
        Systems built end-to-end — from database schema to deployment.
      </p>
      <div className="flex flex-col gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </main>
  );
}
