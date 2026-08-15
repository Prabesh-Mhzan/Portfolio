import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiTailwindcss,
  SiFlutter,
  SiGit,
  SiVercel,
  SiPython,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiCisco,
  SiFirebase,
  SiFigma,
  SiLinux,
  SiXampp,


} from "react-icons/si";
import { FaAws, FaJava , FaUnity,} from "react-icons/fa";

const stack = [
// Languages
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiPython, label: "Python" },
  { icon: FaJava, label: "Java" },
  { icon: SiHtml5, label: "HTML" },
  { icon: SiCss, label: "CSS" },

  // Frontend
  { icon: SiReact, label: "React" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiFlutter, label: "Flutter" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },

  // Backend
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiPrisma, label: "Prisma" },

  // Database
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiPostgresql, label: "PostgreSQL" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: SiXampp, label: "XAMPP" },

  // DevOps / Cloud
  { icon: SiDocker, label: "Docker" },
  { icon: FaAws, label: "AWS" },
  { icon: SiVercel, label: "Vercel" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiGit, label: "Git" },

  // Other
  { icon: FaUnity, label: "Unity" },
  { icon: SiCisco, label: "Cisco" },
  { icon: SiFigma, label: "Figma" },
];

export default function TechStack() {
  return (
    <section id="services" className="container-px py-24 border-t border-line">
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-12">
        Tech I work with
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {stack.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="card flex flex-col items-center justify-center gap-3 py-8 px-4 hover:-translate-y-1 transition-transform"
          >
            <Icon size={32} className="text-dim" />
            <span className="text-xs text-dim font-medium text-center">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}