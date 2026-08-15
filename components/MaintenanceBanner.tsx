"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "maintenance-banner-dismissed";

export default function MaintenanceBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (!dismissed) setVisible(true);
  }, []);

  function handleDismiss() {
    localStorage.setItem(DISMISS_KEY, "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="bg-amber-500/15 border-b border-amber-500/30 text-amber-200">
      <div className="container-px py-2.5 flex items-center justify-between gap-4 text-xs sm:text-sm">
        <p>
          🚧 This site is under maintenance you may run into bugs or errors while I&apos;m
          working on it.
        </p>
        <button
          onClick={handleDismiss}
          aria-label="Dismiss"
          className="shrink-0 text-amber-200/70 hover:text-amber-200 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  );
}