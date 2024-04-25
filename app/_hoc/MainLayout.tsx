import { type ReactNode } from "react";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="m-auto flex min-h-screen flex-col justify-between border-x bg-light dark:border-light/10 dark:bg-dark sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
      <Navbar />
      <main className="px-4 pt-36 sm:px-8 md:px-16">{children}</main>
      <Footer />
    </div>
  );
}
