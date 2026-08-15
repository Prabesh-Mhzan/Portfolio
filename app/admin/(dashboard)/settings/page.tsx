import { sql } from "@/lib/db";
import SettingsForm from "@/components/admin/SettingsForm";

export default async function AdminSettingsPage() {
  const rows = await sql`select key, value from site_settings`;
  const settings: Record<string, string> = {};
  for (const r of rows as { key: string; value: string }[]) settings[r.key] = r.value;

  return (
    <div>
      <h1 className="font-display font-extrabold text-2xl mb-6">Settings</h1>
      <SettingsForm initial={settings} />
    </div>
  );
}