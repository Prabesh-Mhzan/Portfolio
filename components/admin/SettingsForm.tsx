"use client";

import { useState, FormEvent } from "react";

const FIELDS = [
  { key: "contact_email", label: "Contact email" },
  { key: "contact_phone", label: "Contact phone" },
  { key: "social_facebook", label: "Facebook URL" },
  { key: "social_twitter", label: "X (Twitter) URL" },
  { key: "social_linkedin", label: "LinkedIn URL" },
  { key: "social_instagram", label: "Instagram URL" },
];

export default function SettingsForm({ initial }: { initial: Record<string, string> }) {
  const [values, setValues] = useState<Record<string, string>>(initial);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    await fetch("/api/admin/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setSaving(false);
    setSaved(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      {FIELDS.map((f) => (
        <label key={f.key} className="text-sm text-dim">
          {f.label}
          <input
            value={values[f.key] ?? ""}
            onChange={(e) => setValues((v) => ({ ...v, [f.key]: e.target.value }))}
            className="w-full mt-1 bg-surface2 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent"
          />
        </label>
      ))}
      <button type="submit" disabled={saving} className="btn btn-fill self-start disabled:opacity-60">
        {saving ? "Saving..." : "Save settings"}
      </button>
      {saved && <p className="text-sm text-green-400">Saved.</p>}
    </form>
  );
}