import type { Metadata } from "next";
import "./globals.css";
import { plusJakartaSans } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strata Academy | Platform Belajar Kedokteran & Kesehatan Berbasis Cohort",
  description: "Strata Academy adalah platform belajar kedokteran dan kesehatan berbasis cohort dengan materi terstruktur, try out intensif, dan pembahasan klinis untuk persiapan akademik dan ujian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.className} antialiased bg-linear-to-b from-cyan-50 from-0% to-indigo-50 to-100%`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
