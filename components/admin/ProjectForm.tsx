"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Project = {
  slug: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
};

type Props = {
  mode: "create" | "edit";
  projectId?: number;
  initial?: Partial<Project>;
};

export default function ProjectForm({ mode, projectId, initial }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    slug: initial?.slug ?? "",
    name: initial?.name ?? "",
    tag: initial?.tag ?? "",
    description: initial?.description ?? "",
    stack: initial?.stack?.join(", ") ?? "",
    features: initial?.features?.join("\n") ?? "",
    liveUrl: initial?.liveUrl ?? "",
    githubUrl: initial?.githubUrl ?? "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const payload = {
      slug: form.slug.trim(),
      name: form.name.trim(),
      tag: form.tag.trim(),
      description: form.description.trim(),
      stack: form.stack.split(",").map((s) => s.trim()).filter(Boolean),
      features: form.features.split("\n").map((f) => f.trim()).filter(Boolean),
      liveUrl: form.liveUrl.trim() || undefined,
      githubUrl: form.githubUrl.trim() || undefined,
    };

    const url = mode === "create" ? "/api/admin/projects" : `/api/admin/projects/${projectId}`;
    const method = mode === "create" ? "POST" : "PUT";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSaving(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save");
      return;
    }

    router.push("/admin/projects");
    router.refresh();
  }

  const inputClass =
    "w-full mt-1 bg-surface2 border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-xl">
      <label className="text-sm text-dim">
        Slug (used in the URL, e.g. &quot;my-project&quot;)
        <input value={form.slug} onChange={(e) => update("slug", e.target.value)} required className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Name
        <input value={form.name} onChange={(e) => update("name", e.target.value)} required className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Tag (e.g. &quot;Production-ready&quot;)
        <input value={form.tag} onChange={(e) => update("tag", e.target.value)} className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Description
        <textarea value={form.description} onChange={(e) => update("description", e.target.value)} required rows={3} className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Tech stack (comma-separated)
        <input value={form.stack} onChange={(e) => update("stack", e.target.value)} className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Features (one per line)
        <textarea value={form.features} onChange={(e) => update("features", e.target.value)} rows={4} className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        Live URL (optional)
        <input value={form.liveUrl} onChange={(e) => update("liveUrl", e.target.value)} className={inputClass} />
      </label>
      <label className="text-sm text-dim">
        GitHub URL (optional)
        <input value={form.githubUrl} onChange={(e) => update("githubUrl", e.target.value)} className={inputClass} />
      </label>

      <button type="submit" disabled={saving} className="btn btn-fill self-start disabled:opacity-60">
        {saving ? "Saving..." : "Save project"}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </form>
  );
}