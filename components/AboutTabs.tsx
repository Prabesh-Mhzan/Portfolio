"use client";

import { useState } from "react";
import Link from "next/link";
import { aboutTabs, isStructured, type TabKey } from "@/lib/about";

const TAB_KEYS = Object.keys(aboutTabs) as TabKey[];

function isValidTab(value: string | undefined): value is TabKey {
  return !!value && (TAB_KEYS as string[]).includes(value);
}

type Props = {
  limit?: number;
  initialTab?: string;
};

export default function AboutTabs({ limit, initialTab }: Props) {
  const [active, setActive] = useState<TabKey>(isValidTab(initialTab) ? initialTab : "Skills");
  const allItems = aboutTabs[active];
  const items = limit ? allItems.slice(0, limit) : allItems;

  return (
    <div>
      <div className="flex gap-5 sm:gap-8 border-b border-line mb-6 overflow-x-auto">
        {TAB_KEYS.map((key) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`pb-3 sm:pb-3.5 text-sm font-semibold transition-colors relative whitespace-nowrap shrink-0 ${
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
            className="bg-surface border border-line rounded-xl px-4 py-3 sm:px-5 sm:py-4"
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
                  <span className="text-dim text-xs font-medium shrink-0">{item.period}</span>
                )}
              </div>
            ) : (
              <span className="block text-accent text-xs font-bold mb-1.5">{item.label}</span>
            )}
            <span className="text-dim text-sm">{item.body}</span>
          </li>
        ))}
      </ul>

      {limit && (
        <Link
          href={`/about?tab=${encodeURIComponent(active)}`}
          className="inline-block mt-6 text-accent text-sm font-semibold"
        >
          See more →
        </Link>
      )}
    </div>
  );
}