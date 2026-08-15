"use client";

import { useRouter } from "next/navigation";

export default function DeleteProjectButton({ id }: { id: number }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button onClick={handleDelete} className="text-red-400 font-semibold">
      Delete
    </button>
  );
}