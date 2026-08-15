"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import MaintenanceBanner from "./MaintenanceBanner";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      const goingDown = currentY > lastScrollY.current;
      const pastThreshold = currentY > 80; // don't hide right near the top


      setHidden(goingDown && pastThreshold);
      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 z-50 transition-transform duration-300 translate-y-0 data-[hidden=true]:-translate-y-full"
      data-hidden={hidden}
    >
      <Navbar hidden={hidden} />
      <MaintenanceBanner />
    </div>
  );
}