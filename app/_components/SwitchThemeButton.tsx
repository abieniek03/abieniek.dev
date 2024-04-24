"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx";

export function SwitchThemeButton() {
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
    <button onClick={switchTheme}>
      <i
        className={clsx(
          "px-0.5 text-xl",
          theme === "dark" ? "ri-moon-clear-line" : "ri-sun-line",
        )}
      />
    </button>
  );
}
