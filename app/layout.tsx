import { type ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { NextThemeProvider } from "./_hoc/NextThemeButton";
import { MainLayout } from "./_hoc/MainLayout";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adrian Bieniek - Software developer",
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
      </body>
    </html>
  );
}
