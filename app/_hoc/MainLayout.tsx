import { type ReactNode } from "react";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="m-auto min-h-screen border-x bg-light px-4 pt-36 dark:border-light/10 dark:bg-dark sm:max-w-xl sm:px-8 md:max-w-2xl md:px-16 lg:max-w-4xl xl:max-w-6xl">
      {children}
    </div>
  );
}
