import { type ReactNode } from "react";

export function SectionTitle({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <h2 className="mb-4 text-xl font-bold uppercase ">{children}</h2>;
}
