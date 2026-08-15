export type Credential = {
  title: string;
  issuer: string;
  year: string;
  note?: string;
};

// Keep this list selective only include credentials that add real signal
// (recognized certifications, substantial coursework, or notable modules).
// Avoid listing beginner "intro to X" certificates; they undercut a BSc-level profile.
export const credentials: Credential[] = [
  {
    title: "BSc (Hons) Computer Science",
    issuer: "Herald College Kathmandu, affiliated with University of Wolverhampton",
    year: "2026",
    note: "Awaiting final results",
  },
  {
    title: "AI & Machine Learning Portfolio (6CS012)",
    issuer: "University of Wolverhampton",
    year: "2025",
    note: "CNN image classification (VGG16, ~90% accuracy) and NLP sarcasm detection with RNN/LSTM",
  },
  {
    title: "Big Data Analytics (6CS030)",
    issuer: "University of Wolverhampton",
    year: "2025",
    note: "Disease outcome prediction using PySpark and scikit-learn pipelines",
  },
];
