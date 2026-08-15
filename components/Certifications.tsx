import { credentials } from "@/lib/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="container-px py-24 border-t border-line"
    >
      <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-3">
        Education & credentials
      </h2>
      <p className="text-dim text-sm mb-12 max-w-lg">
        Kept selective — the coursework and credentials that best show depth,
        not a wall of beginner badges.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {credentials.map((c) => (
          <div key={c.title} className="card p-6">
            <span className="text-xs font-bold text-accent">{c.year}</span>
            <h3 className="font-display font-bold text-lg mt-2 mb-1.5">
              {c.title}
            </h3>
            <p className="text-dim text-sm mb-2">{c.issuer}</p>
            {c.note && (
              <p className="text-dim text-xs leading-relaxed">{c.note}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
