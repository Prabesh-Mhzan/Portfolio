import Image from "next/image";
import AboutTabs from "./AboutTabs";

export default function About() {
  return (
    <section id="about" className="container-px py-24">
      <div className="grid md:grid-cols-[32%_1fr] gap-8 md:gap-14">
       <div className="aspect-[4/5] sm:aspect-[3/4] max-w-sm md:max-w-none mx-auto md:mx-0 w-full min-w-0 overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-surface2 to-bg flex items-center justify-center text-dim text-sm text-center p-6">
          <Image
            src="/images/pic2.jpg"
            alt="Profile"
            width={500}
            height={700}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-4">About me</h2>
          <p className="text-dim mb-8 max-w-2xl">
            I&apos;m a BSc (Hons) Computer Science graduate from Herald College
            Kathmandu, affiliated with the University of Wolverhampton. I build
            full-stack web applications end-to-end from database design to
            deployment with a practical, troubleshooting-first approach shaped by
            years in hardware repair before I wrote a line of code.
          </p>

          <AboutTabs limit={3} />
        </div>
      </div>
    </section>
  );
}