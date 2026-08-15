"use client";

import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "Mobile App Developer",
  "QA Engineer",
  "UI/UX Designer",
  "Graphic Designer",
  "DevOps Engineer",
];

export default function TypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const typeSpeed = deleting ? 45 : 70;
    const pauseAtEnd = 1200;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), pauseAtEnd);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-accent">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-left animate-pulse" />
    </span>
  );
}