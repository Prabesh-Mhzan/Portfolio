"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Login failed");
      return;
    }

    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg text-text container-px">
      <form onSubmit={handleSubmit} className="card p-8 w-full max-w-sm flex flex-col gap-4">
        <h1 className="font-display font-extrabold text-2xl mb-2">Admin login</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          autoFocus
          className="w-full bg-surface2 border border-line rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-accent"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full bg-surface2 border border-line rounded-xl px-5 py-3 text-sm focus:outline-none focus:border-accent"
        />
        <button type="submit" disabled={loading} className="btn btn-fill disabled:opacity-60">
          {loading ? "Checking..." : "Log in"}
        </button>
        {error && <p className="text-sm text-red-400">{error}</p>}
      </form>
    </div>
  );
}