
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar({ hidden = false }: { hidden?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (hidden) setOpen(false);
  }, [hidden]);

  return (
    <header className="backdrop-blur bg-bg/85 border-b border-line">
      <nav className="container-px flex items-center justify-between py-5">
        <Link
          href="/"
          className="font-display font-extrabold text-lg"
          onClick={() => setOpen(false)}
        >
          Prabesh<span className="text-accent">.</span>
        </Link>

        <ul className="hidden md:flex gap-8 text-sm text-dim font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-text transition-colors">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden p-2 -mr-2 text-text"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden border-t border-line bg-bg">
          {links.map((l) => (
            <li key={l.href} className="border-b border-line last:border-b-0">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block container-px py-4 text-sm text-dim hover:text-text transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const links = [
//   { href: "/#about", label: "About" },
//   { href: "/#services", label: "Services" },
//   { href: "/projects", label: "Projects" },
//   { href: "/blog", label: "Blog" },
//   { href: "/#contact", label: "Contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 backdrop-blur bg-bg/85 border-b border-line">
//       <nav className="container-px flex items-center justify-between py-5">
//         <Link
//           href="/"
//           className="font-display font-extrabold text-lg"
//           onClick={() => setOpen(false)}
//         >
//           Prabesh<span className="text-accent">.</span>
//         </Link>

//         {/* Desktop links - hidden on mobile */}
//         <ul className="hidden md:flex gap-8 text-sm text-dim font-medium">
//           {links.map((l) => (
//             <li key={l.href}>
//               <Link href={l.href} className="hover:text-text transition-colors">
//                 {l.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger button - only visible on mobile (md:hidden) */}
//         <button
//           type="button"
//           onClick={() => setOpen((v) => !v)}
//           aria-label={open ? "Close menu" : "Open menu"}
//           aria-expanded={open}
//           className="md:hidden p-2 -mr-2 text-text"
//         >
//           {open ? (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <line x1="18" y1="6" x2="6" y2="18" />
//               <line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           ) : (
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           )}
//         </button>
//       </nav>

//       {/* Mobile dropdown menu - only renders on mobile when open */}
//       {open && (
//         <ul className="md:hidden border-t border-line bg-bg">
//           {links.map((l) => (
//             <li key={l.href} className="border-b border-line last:border-b-0">
//               <Link
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 className="block container-px py-4 text-sm text-dim hover:text-text transition-colors"
//               >
//                 {l.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// }
