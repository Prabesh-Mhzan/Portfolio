import Link from "next/link";
import AboutTabs from "@/components/AboutTabs";

export const metadata = { title: "About | Prabesh Maharjan" };

export default async function AboutPage({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab } = await searchParams;

  return (
    <main className="container-px py-14 sm:py-20">
      <Link
        href="/#about"
        className="inline-block mb-8 text-dim text-sm font-semibold hover:text-text transition-colors"
      >
        ← Back
      </Link>
      <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl mb-4">About</h1>
      <p className="text-dim mb-10 sm:mb-14 max-w-2xl">
        My full skills, experience, education, certifications, and achievements.
      </p>
      <AboutTabs initialTab={tab} />
    </main>
  );
}