"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { stylesNavbarLinkButton } from "@/app/styles";

export default function SwitchThemeButton() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	let currentTheme = theme === "system" ? systemTheme : theme;

	const switchTheme = () => {
		currentTheme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return (
		<button onClick={switchTheme} className={`${stylesNavbarLinkButton} text-xl`}>
			<i className={theme === "dark" ? "ri-moon-clear-line" : "ri-sun-line"} />
		</button>
	);
}
