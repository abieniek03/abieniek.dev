import Navbar, { INavItem } from "@/components/Navbar";

const navItems: INavItem[] = [
  {
    path: "/",
    label: "Strona główna",
  },
  {
    path: "/blog",
    label: "Blog",
  },
];

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar navItems={navItems} />
      <div className="mx-auto max-w-7xl px-8">{children}</div>
    </>
  );
}
