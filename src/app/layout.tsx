import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Bimal Global",
  description: "Bimal Global digital experience",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
