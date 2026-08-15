import Link from "next/link";

export default function AdminHome() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-2xl mb-6">Dashboard</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        <Link href="/admin/projects" className="card p-6 block">
          <h2 className="font-bold mb-1">Projects</h2>
          <p className="text-dim text-sm">Add, edit, or remove portfolio projects.</p>
        </Link>
        <Link href="/admin/settings" className="card p-6 block">
          <h2 className="font-bold mb-1">Settings</h2>
          <p className="text-dim text-sm">Update your contact email, phone, and social links.</p>
        </Link>
      </div>
    </div>
  );
}