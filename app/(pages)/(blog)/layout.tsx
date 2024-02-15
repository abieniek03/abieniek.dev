import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web development dla początkujących i nie tylko - 👨🏽‍💻abieniek.dev",
  description:
    "Blog o tematyce web developmentu tworzony przez młodego programistę.",
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
