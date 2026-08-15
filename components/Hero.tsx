import Link from "next/link";
import TypedRoles from "./TypedRoles";

export default function Hero() {
  return (
    <section
      id="header"
      className="relative border-b border-line overflow-hidden min-h-[83vh]"
    >
      {/* Mobile background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: "url('/images/small1.png')" }}
      />

      {/* Desktop background image */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: "url('/images/pic1.png')" }}
      />

      <div className="container-px relative pt-8 pb-0 mt-0 mr-auto max-w-2xl">
        <p className="font-display font-bold text-dim text-xl md:text-2xl mb-1.5">
          I am
        </p>
        <h1 className="font-display font-black text-3xl md:text-5xl leading-[1.1] tracking-tight">
          The Prabesh
          <br />
          <TypedRoles />
          <br />
          WelCome to my Profile.
        </h1>
        <p className="mt-5 text-base text-dim max-w-md">
          BSc Computer Science graduate building production-ready web
          platforms from database schema to deployment.
        </p>
        <div className="mt-7 flex gap-4 flex-wrap">
          <Link href="/projects" className="btn btn-fill">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}