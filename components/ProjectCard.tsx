import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-8">
      <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
        <h3 className="font-display font-extrabold text-2xl">
          {project.name}
        </h3>
        <span className="text-xs font-bold text-accent border border-accentDim px-3 py-1 rounded-full whitespace-nowrap">
          {project.tag}
        </span>
      </div>
      <p className="text-dim text-sm mb-5 max-w-xl">{project.description}</p>
      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
        {project.features.map((f) => (
          <li key={f} className="text-sm text-dim pl-4 relative">
            <span className="absolute left-0 text-accent">›</span>
            {f}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-6 text-sm font-semibold">
        {project.liveUrl && (
          <a href={project.liveUrl} className="text-accent">
            Live demo →
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="text-accent">
            Source code →
          </a>
        )}
      </div>
    </div>
  );
}
