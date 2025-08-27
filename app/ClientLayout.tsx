"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          @font-face {
            font-family: "BRADHI";
            src: url("/fonts/BRADHI.ttf") format("truetype");
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: "ITC Avant Garde Gothic";
            src: url("/fonts/ITC-Avant-Garde-Gothic-LT-Medium.ttf")
              format("truetype");
            font-weight: 500;
            font-style: normal;
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
