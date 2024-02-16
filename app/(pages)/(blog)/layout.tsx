import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web development dla początkujących i nie tylko - 👨🏽‍💻abieniek.dev",
  description:
    "Blog o tematyce web developmentu tworzony przez programistę i studenta informatyki.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
