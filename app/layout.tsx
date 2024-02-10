import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Adrian Bieniek - web developer",
	description:
		"Na codzień zajmuję się web developmentem. Studiuję intormatykę. W wolnym czasie rozwijam się i przekazuję swoją wiedzę innym. Prowadzę bloga i tworzę treści na YouTube.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
