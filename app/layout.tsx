import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import NextThemeProvider from "@/hoc/NextThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import CookieAlert from "@/components/CookieAlert";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adrian Bieniek - Web developer",
  description:
    "Na codzień zajmuję się tworzeniem stron i aplikacji internetowych. Studiuję informatykę. W wolnym czasie rozwijam się, a także dzielę się swoją wiedzą i doświadczeniem. Prowadzę bloga i kanał na YouTube.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body
        className={`${font.className} bg-light text-dark/80 dark:bg-dark dark:text-light`}
      >
        <NextThemeProvider>{children}</NextThemeProvider>
        <Analytics />
        <CookieAlert />
      </body>
    </html>
  );
}
