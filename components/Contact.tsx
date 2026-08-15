"use client";

import { useState, FormEvent } from "react";

// Edit these 6 lines to change your contact details/social links site-wide.
const CONTACT_INFO = {
  email: "prabesh.raj.maharjan@gmail.com",
  phone: "+977 9818315011",
  facebook: "#",
  twitter: "#",
  github: "https://github.com/Prabesh-Mhzan",
  linkedin: "https://www.linkedin.com/in/prabesh-maharjan-30b391407",
  instagram: "#",
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // Honeypot field - real users never fill this in, bots usually do.
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (

<section id="contact" className="container-px py-24 border-t border-line">
      <h3 className="font-display font-extrabold text-3xl md:text-4xl mb-12">
          Contact Me
        </h3>
  <div className="card p-8 md:p-14 relative overflow-hidden">

    {/* Glow */}
    <div
      className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-72 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse, rgba(61,90,254,0.18), transparent 70%)",
      }}
    />

    {/* Top Heading */}

    <div className="relative text-center mb-14">
      <h2 className="font-display font-bold text-xl md:text-3xl mb-4">
        Let&apos;s build something.
      </h2>

      <p className="text-dim max-w-2xl mx-auto">
        Open to full-time IT and development roles in Kathmandu and remote.
      </p>
    </div>

    {/* Bottom Content */}
    <div className="grid md:grid-cols-2 gap-16">

      {/* Left */}
        <div >
  
          <div className="flex flex-col gap-4 mb-8">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-dim hover:text-text transition-colors"
            >
              <span className="w-9 h-9 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16v16H4z" opacity="0" />
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
              {CONTACT_INFO.email}
            </a>

            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-dim hover:text-text transition-colors"
            >
              <span className="w-9 h-9 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className="flex gap-3 mb-10">
            {[
             { href: CONTACT_INFO.github, label: "GitHub", d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
              { href: CONTACT_INFO.linkedin, label: "LinkedIn", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" },
              { href: CONTACT_INFO.facebook, label: "Facebook", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
              { href: CONTACT_INFO.twitter, label: "X", d: "M4 4l16 16M20 4L4 20" },
              { href: CONTACT_INFO.instagram, label: "Instagram", d: "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM17.5 6.5h.01" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-dim hover:text-text hover:border-dim transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>

 
        </div>

      {/* Right */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >

  <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full bg-surface2 border border-line rounded-xl px-5 py-4 text-sm placeholder:text-dim focus:outline-none focus:border-accent"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-surface2 border border-line rounded-xl px-5 py-4 text-sm placeholder:text-dim focus:outline-none focus:border-accent"
          />
          <textarea
            name="message"
            required
            rows={6}
            placeholder="Your Message"
            className="w-full bg-surface2 border border-line rounded-xl px-5 py-4 text-sm placeholder:text-dim focus:outline-none focus:border-accent resize-none"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-fill self-start disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Submit"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-400">
              Thanks! Your message has been sent I&apos;ll reply soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400">{errorMsg}</p>
          )}
        </form>

    </div>

  </div>
</section>
   
  );
}

