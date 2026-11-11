import type { Metadata } from "next";

import TopBar from "@/components/TopBar/TopBar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import FloatingActions from "@/components/FloatingActions/FloatingActions";

import "./globals.css";


/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: "Best College in Dehradun | D.D. College Dehradun",

  description:
    "D.D. College Dehradun provides quality education, holistic development and career-focused learning opportunities.",

  keywords: [
    "D.D. College Dehradun",
    "DD College",
    "DD College Dehradun",
    "college in Dehradun",
    "best college Dehradun",
    "higher education Dehradun",
    "admissions Dehradun",
    "DD College admissions",
  ],
};


/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        {/* TOP BAR */}
        <TopBar />

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>
          {children}
        </main>
       
        <FloatingActions />
        {/* FOOTER */}
        <Footer />

      </body>

    </html>
  );
}