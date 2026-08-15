export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-digischola",
    title: "Building DigiSchola: lessons from a 4-role school management system",
    date: "2026-03-12",
    readTime: "6 min read",
    excerpt:
      "What I learned building a school management platform from scratch — role-based access, marksheet generation, and the bugs that taught me the most.",
    content: [
      "DigiSchola started as my final year project, but it grew into the largest system I'd built end-to-end at that point. The brief was simple on paper: a platform for admins, teachers, students, and parents. In practice, it meant four different mental models of the same data.",
      "The hardest part wasn't the CRUD operations — it was getting role-based filtering right across assignments, exams, and results without duplicating logic everywhere. I ended up centralizing access rules into a set of server-side helper functions rather than scattering checks across every route.",
      "One bug I'm still proud of catching: a timezone issue in the attendance system where records logged late at night in Nepal Time were being saved under the wrong calendar day in the database. It only showed up in testing because a teacher happened to mark attendance at 11:50 PM.",
      "If I rebuilt it today, I'd invest earlier in the Playwright test suite instead of bolting it on near the end — it would have caught the role-filtering bugs much sooner.",
    ],
  },
  {
    slug: "restaurant-pos-real-time",
    title: "Real-time sync across 5 roles: what the Restaurant POS taught me about state",
    date: "2026-05-02",
    readTime: "5 min read",
    excerpt:
      "Keeping customer, kitchen, waiter, cashier, and admin views in sync in real time — and the stale-data bug that took a full sprint to track down.",
    content: [
      "Building a POS system across five roles meant five different views of the same order state, all needing to update in real time without stepping on each other.",
      "Pusher handled the transport layer well, but the real challenge was scoping channels correctly — especially for unauthenticated customers placing orders via QR code, who needed updates without a login session.",
      "The trickiest bug was stale cashier data across table sessions: closing one table's bill while a second order came in on the same physical table caused a race condition in how totals were calculated. Fixing it meant rethinking how table sessions were keyed, rather than patching the symptom.",
      "The lesson that stuck: real-time features are easy to demo and hard to trust. Most of the actual engineering time went into edge cases, not the happy path.",
    ],
  },
];
