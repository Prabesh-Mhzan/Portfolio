import Link from "next/link";
import LogoutButton from "@/components/admin/LogoutButton";

const navItems = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <header className="border-b border-line">
        <div className="container-px flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 sm:py-5">
          <div className="flex items-center justify-between">
            <span className="font-display font-extrabold whitespace-nowrap">Admin</span>
            <div className="sm:hidden">
              <LogoutButton />
            </div>
          </div>
          <nav className="flex gap-5 text-sm text-dim overflow-x-auto">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="hover:text-text transition-colors whitespace-nowrap"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden sm:block">
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="container-px py-8 sm:py-10">{children}</main>
    </div>
  );
}