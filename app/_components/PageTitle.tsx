import { type ReactNode } from "react";

export function PageTitle({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
      {children}
    </h1>
  );
}
