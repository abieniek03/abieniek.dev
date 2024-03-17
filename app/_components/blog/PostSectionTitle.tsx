import { type ReactNode } from "react";

export default function PostSectionTitle({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <h2 className="mb-4 mt-14 text-3xl font-bold text-primary first:mt-0 lg:mt-20">
      {children}
    </h2>
  );
}
