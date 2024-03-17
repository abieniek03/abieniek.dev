import { type ReactElement, type ReactNode } from "react";

export default function SectionTitle({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
  return (
    <h2 className="mb-4 text-center text-3xl font-bold lg:mb-8 lg:text-4xl">
      {children}
    </h2>
  );
}
