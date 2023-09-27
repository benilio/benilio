import "@/styles/globals.scss";
import React from "react";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";

import { Inter_Tight, Nanum_Pen_Script } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

const NanumPenScript = Nanum_Pen_Script({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--nanum",
});

export const metadata: Metadata = {
  title: "Benício Oliveira | Benilio",
  description: "Personal page and portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${NanumPenScript.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
