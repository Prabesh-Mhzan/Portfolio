"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = {
  Skills: [
    {
      label: "Full-stack development",
      body: "Next.js, React, TypeScript, PostgreSQL, and Prisma — building complete systems with role-based access, real-time updates, and clean, maintainable code.",
    },
    {
      label: "Mobile development",
      body: "Cross-platform apps with Flutter and Dart, currently working on local data persistence with SQLite.",
    },
    {
      label: "UI/UX & tooling",
      body: "Designing usable interfaces with Tailwind CSS and shadcn/ui, backed by Docker for consistent environments and Playwright for end-to-end testing.",
    },
  ],
  Experience: [
    {
      label: "2023 — Present",
      body: "Full-Stack Developer, independent projects. Designed and shipped two production-grade systems (DigiSchola, Restaurant POS) from schema to deployment.",
    },
    {
      label: "2022 — 2023",
      body: "Mobile & Computer Repair Technician. Diagnosed and resolved hardware and software faults, building a systematic, root-cause approach to problem-solving.",
    },
    {
      label: "2020",
      body: "Sales Executive, Raj Impex. Translated technical products into plain language for customers.",
    },
  ],
  Education: [
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

export default function About() {
  const [active, setActive] = useState<TabKey>("Skills");

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

          <div className="flex gap-8 border-b border-line mb-6">
            {(Object.keys(tabs) as TabKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`pb-3.5 text-sm font-semibold transition-colors relative ${
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
            {tabs[active].map((item) => (
              <li
                key={item.label}
                className="bg-surface border border-line rounded-xl px-5 py-4"
              >
                <span className="block text-accent text-xs font-bold mb-1.5">
                  {item.label}
                </span>
                <span className="text-dim text-sm">{item.body}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
