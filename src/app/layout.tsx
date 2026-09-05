import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";

import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { defaultSeo } from "@/config/seo";
import { siteConfig } from "@/config/site";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  description: defaultSeo.description,
  icons: {
    icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon.ico",
  },
  metadataBase: new URL(siteUrl),
  openGraph: {
    description: defaultSeo.description,
    siteName: siteConfig.name,
    title: defaultSeo.title,
    type: "website",
  },
  title: defaultSeo.title,
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
