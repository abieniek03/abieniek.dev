import { type ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { Analytics } from "@vercel/analytics/react";
import { NextThemeProvider } from "./_hoc/NextThemeButton";
import { MainLayout } from "./_hoc/MainLayout";
import { CookieAlert } from "./_components/CookieAlert";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Adrian Bieniek - Software developer",
    default: "Adrian Bieniek - Software developer",
  },
  description:
    "Cześć, jestem Adrian! Na codzień zajmuję się tworzeniem stron i&nbsp;aplikacji. Zarówno po stronie frontendu, jak i backendu. Studiuję&nbsp;informatykę i ciągle się rozwijam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth accent-primary">
      <body className={`${font.className} bg-light-darker dark:bg-dark-darker`}>
        <NextThemeProvider>
          <MainLayout>{children}</MainLayout>
        </NextThemeProvider>
        <Analytics />
        <CookieAlert />
      </body>
    </html>
  );
}
