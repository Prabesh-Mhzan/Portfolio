export interface SimpleItem {
  label: string;
  body: string;
}

export interface StructuredItem {
  title: string;
  org: string;
  period: string;
  body: string;
}

export interface AboutTabs {
  Skills: SimpleItem[];
  Experience: StructuredItem[];
  Education: StructuredItem[];
  Certifications: StructuredItem[];
  Achievements: SimpleItem[];
}

export const aboutTabs: AboutTabs = {
  Skills: [
    {
      label: "Full-stack development",
      body: "Next.js, React, TypeScript, PostgreSQL, and Prisma building complete systems with role-based access, real-time updates, and clean, maintainable code.",
    },
    {
      label: "Mobile development",
      body: "Cross-platform apps with Flutter and Dart, working with Firebase and local data persistence via SQLite.",
    },
    {
      label: "UI/UX & tooling",
      body: "Designing usable interfaces with Tailwind CSS and shadcn/ui, backed by Docker for consistent environments and Playwright for end-to-end testing.",
    },
    {
      label: "Creative & 3D web",
      body: "Interactive front-end experiences using Three.js and GSAP, with design work in Figma, Dribbble, and Behance.",
    },
    {
      label: "Networking & systems",
      body: "Practical networking with Cisco Packet Tracer VLANs, OSPF, ACLs, and Layer 3 switching plus hardware diagnostics from years in device repair.",
    },
    {
      label: "AI/ML & data",
      body: "Image classification (CNN, transfer learning) and NLP (LSTM, GloVe embeddings) in PyTorch, plus large-scale data processing with PySpark.",
    },
  ],
  Experience: [
    {
      title: "Full-Stack Developer",
      org: "Freelance",
      period: "2025 Present",
      body: "Independent projects. Designed and shipped two production-grade systems (DigiSchola, Restaurant POS) from schema to deployment.",
    },
    {
      title: "Mobile & Computer Repair Technician",
      org: "RajImpex",
      period: "2022 2023",
      body: "Diagnosed and resolved hardware and software faults, building a systematic, root-cause approach to problem-solving.",
    },
    {
      title: "Sales Executive",
      org: "RajImpex",
      period: "2018 2020",
      body: "Translated technical products into plain language for customers.",
    },
  ],
  Education: [
    {
      title: "BSc (Hons) Computer Science",
      org: "Herald College Kathmandu, in Partnership with University of Wolverhampton",
      period: "2023 2025",
      body: "Final year project: DigiSchola, a four-role school management system. Coursework included AI/ML (CNN image classification, NLP sarcasm detection) and Big Data (PySpark). Awaiting final results.",
    },
    {
      title: "Computer Science Foundation",
      org: "NCCS",
      period: "2021 2023",
      body: "Foundational coursework in programming, mathematics, and computer systems ahead of BSc studies.",
    },
  ],
  Certifications: [
    {
      title: "Full-Stack Web Development",
      org: "Coursera",
      period: "",
      body: "Completed a comprehensive course on full-stack web development.",
    },
    {
      title: "Mobile App Development",
      org: "Udemy",
      period: "",
      body: "Completed a course on cross-platform mobile app development using Flutter.",
    },
  ],
  Achievements: [
    {
      label: "2025",
      body: "Developed and deployed two production-grade systems (DigiSchola, Restaurant POS) as a freelancer.",
    },
    {
      label: "2026",
      body: "BSc (Hons) Computer Science Herald College Kathmandu, Partnership  with University of Wolverhampton (awaiting final results).",
    },
    {
      label: "2023",
      body: "Computer Science foundation NCCS.",
    },
  ],
};

export type TabKey = keyof AboutTabs;

export function isStructured(item: SimpleItem | StructuredItem): item is StructuredItem {
  return "title" in item;
}