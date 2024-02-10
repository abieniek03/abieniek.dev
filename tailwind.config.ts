import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				primary: "#067FB3",
				light: "#FEFEFE",
				dark: "#141215",
				error: "#DC2626",
			},
		},
	},
	plugins: [],
};
export default config;
