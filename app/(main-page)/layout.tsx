import Navbar from "@/components/Navbar";

export default function MainPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl p-8 lg:py-0">{children}</div>
    </>
  );
}
