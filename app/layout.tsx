import { type ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";

import { NextThemeProvider } from "./_hoc/NextThemeButton";

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
    <html lang="pl">
      <body className={font.className}>
        <NextThemeProvider>{children}</NextThemeProvider>
      </body>
    </html>
  );
}
