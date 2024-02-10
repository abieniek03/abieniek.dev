import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import NextThemeProvider from "@/hoc/NextThemeProvider";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
	title: "Adrian Bieniek - web developer",
	description:
		"Na codzień zajmuję się web developmentem. Studiuję intormatykę. W wolnym czasie rozwijam się i przekazuję swoją wiedzę innym. Prowadzę bloga i tworzę treści na YouTube.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={`${font.className} bg-light text-dark/80 dark:bg-dark dark:text-light`}>
				<NextThemeProvider>{children}</NextThemeProvider>
			</body>
		</html>
	);
}
