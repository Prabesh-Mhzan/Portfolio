"use client";

import { useState } from "react";
import Image from "next/image";

// Simple items: just a label + description (Skills, Achievements)
interface SimpleItem {
  label: string;
  body: string;
}

// Structured items: title (role/degree/cert), org (company/institution/platform), period, description
interface StructuredItem {
  title: string;
  org: string;
  period: string;
  body: string;
}

const tabs: {
  Skills: SimpleItem[];
  Experience: StructuredItem[];
  Education: StructuredItem[];
  Certifications: StructuredItem[];
  Achievements: SimpleItem[];
} = {
  Skills: [
    {
      label: "Full-stack development",
      body: "Next.js, React, TypeScript, PostgreSQL, and Prisma — building complete systems with role-based access, real-time updates, and clean, maintainable code.",
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
      body: "Practical networking with Cisco Packet Tracer — VLANs, OSPF, ACLs, and Layer 3 switching — plus hardware diagnostics from years in device repair.",
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
      period: "2025 — Present",
      body: "Independent projects. Designed and shipped two production-grade systems (DigiSchola, Restaurant POS) from schema to deployment.",
    },
    {
      title: "Mobile & Computer Repair Technician",
      org: "RajImpex",
      period: "2022 — 2023",
      body: "Diagnosed and resolved hardware and software faults, building a systematic, root-cause approach to problem-solving.",
    },
    {
      title: "Sales Executive",
      org: "RajImpex",
      period: "2018 — 2020",
      body: "Translated technical products into plain language for customers.",
    },
  ],
  Education: [
    {
      title: "BSc (Hons) Computer Science",
      org: "Herald College Kathmandu, in partnership with University of Wolverhampton",
      period: "2023 — 2025",
      body: "Final year project: DigiSchola, a four-role school management system. Coursework included AI/ML (CNN image classification, NLP sarcasm detection) and Big Data (PySpark). Awaiting final results.",
    },
    {
      title: "Computer Science Foundation",
      org: "NCCS",
      period: "2021 — 2023",
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
      body: "BSc (Hons) Computer Science — Herald College Kathmandu, affiliated with University of Wolverhampton (awaiting final results).",
    },
    {
      label: "2023",
      body: "Computer Science foundation — NCCS.",
    },
  ],
};

type TabKey = keyof typeof tabs;

function isStructured(item: SimpleItem | StructuredItem): item is StructuredItem {
  return "title" in item;
}

export default function About() {
  const [active, setActive] = useState<TabKey>("Skills");
  const items = tabs[active];

  return (
    <section id="about" className="container-px py-24">
      <div className="grid md:grid-cols-[32%_1fr] gap-14">
        <div className="aspect-[3/4] rounded-2xl border border-line bg-gradient-to-br from-surface2 to-bg flex items-center justify-center text-dim text-sm text-center p-6">
          <Image
            src="/images/pic2.jpg"
            alt="Profile"
            width={500}
            height={700}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">
            About me
          </h2>
          <p className="text-dim mb-8 max-w-2xl">
            I&apos;m a BSc (Hons) Computer Science graduate from Herald
            College Kathmandu, affiliated with the University of
            Wolverhampton. I build full-stack web applications end-to-end
            from database design to deployment with a practical,
            troubleshooting-first approach shaped by years in hardware
            repair before I wrote a line of code.
          </p>

          <div className="flex gap-8 border-b border-line mb-6 overflow-x-auto">
            {(Object.keys(tabs) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`pb-3.5 text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  active === key ? "text-text" : "text-dim"
                }`}
              >
                {key}
                {active === key && (
                  <span className="absolute -bottom-px left-0 w-full h-0.5 bg-accent" />
                )}
              </button>
            ))}
          </div>

          <ul className="flex flex-col gap-4">
            {items.map((item) => (
              <li
                key={isStructured(item) ? `${item.title}-${item.org}` : item.label}
                className="bg-surface border border-line rounded-xl px-5 py-4"
              >
                {isStructured(item) ? (
                  <div className="flex items-baseline justify-between gap-3 mb-1.5 flex-wrap">
                    <span className="text-text text-sm font-bold">
                      {item.title}
                      {item.org && (
                        <span className="text-accent font-semibold"> · {item.org}</span>
                      )}
                    </span>
                    {item.period && (
                      <span className="text-dim text-xs font-medium shrink-0">
                        {item.period}
                      </span>
                    )}
                  </div>
                ) : (
                  <span className="block text-accent text-xs font-bold mb-1.5">
                    {item.label}
                  </span>
                )}
                <span className="text-dim text-sm">{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}