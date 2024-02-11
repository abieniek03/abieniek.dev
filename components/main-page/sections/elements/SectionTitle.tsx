import { type ReactElement, type ReactNode } from "react";

export default function SectionTitle({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <h1 className="mb-3 text-center text-3xl font-bold lg:text-4xl">
      {children}
    </h1>
  );
}
