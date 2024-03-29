import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-7xl px-8">{children}</div>
      <Footer />
    </>
  );
}
