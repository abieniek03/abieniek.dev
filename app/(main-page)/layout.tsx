import Navbar, { INavItem } from "@/components/Navbar";

const navItems: INavItem[] = [
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "#projekty",
    label: "Projekty",
  },
  {
    path: "#kontakt",
    label: "Kontakt",
  },
];

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar navItems={navItems} />
      <div className="mx-auto max-w-7xl p-8 lg:py-0">{children}</div>
    </>
  );
}
