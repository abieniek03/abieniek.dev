"use client";

import { type ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}
