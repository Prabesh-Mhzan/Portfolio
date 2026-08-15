import { getSettings } from "@/lib/settings";
import ContactForm from "./ContactForm";

const SOCIAL_ICONS: Record<string, string> = {
  social_facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  social_twitter: "M4 4l16 16M20 4L4 20",
  social_linkedin:
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  social_instagram:
    "M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zM17.5 6.5h.01",
};
const SOCIAL_LABELS: Record<string, string> = {
  social_facebook: "Facebook",
  social_twitter: "X",
  social_linkedin: "LinkedIn",
  social_instagram: "Instagram",
};

export default async function Contact() {
  const settings = await getSettings();

  const email = settings.contact_email || "your@email.com";
  const phone = settings.contact_phone || "+977 98XXXXXXXX";
  const socialKeys = ["social_facebook", "social_twitter", "social_linkedin", "social_instagram"];
  const socials = socialKeys
    .map((key) => ({ key, href: settings[key], label: SOCIAL_LABELS[key], d: SOCIAL_ICONS[key] }))
    .filter((s) => s.href);

  return (
    <section id="contact" className="container-px py-24 border-t border-line">
      <div className="card p-8 md:p-14 grid md:grid-cols-2 gap-12 relative overflow-hidden">
        <div
          className="absolute -top-24 left-1/4 w-96 h-72 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(61,90,254,0.16), transparent 70%)" }}
        />

        <div className="relative">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl mb-8">Contact Me</h2>

          <div className="flex flex-col gap-4 mb-8">
            <a href={`mailto:${email}`} className="flex items-center gap-3 text-dim hover:text-text transition-colors">
              <span className="w-9 h-9 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 6l-10 7L2 6" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
              </span>
              {email}
            </a>

            <a href={`tel:${phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-dim hover:text-text transition-colors">
              <span className="w-9 h-9 shrink-0 rounded-full bg-accent/15 text-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              {phone}
            </a>
          </div>

          {socials.length > 0 && (
            <div className="flex gap-3 mb-10">
              {socials.map((s) => (
                <a
                  key={s.key}
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
          )}

          <a href="/cv.pdf" className="btn btn-fill">
            Download CV
          </a>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}