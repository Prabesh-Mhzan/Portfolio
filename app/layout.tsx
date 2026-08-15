import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";

import SiteHeader from "@/components/SiteHeader";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Prabesh Maharjan | Full-Stack Developer",
  description:
    "Full-stack developer building production-ready web platforms from database schema to deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
