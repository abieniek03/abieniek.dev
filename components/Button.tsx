import { type ReactElement, type ReactNode } from "react";

type ButtonType = "primary" | "secondary";
type ButtonSize = "xs" | "sm" | "lg";

interface IButton {
  type: ButtonType;
  children: ReactNode;
  size?: ButtonSize;
}

export default function Button({ type, children }: IButton): ReactElement {
  const stylesButtonPrimary = "bg-primary hover:bg-primary/90 text-light";
  const stylesButtonSecondary =
    "bg-dark/5 border border-dark/15 text-dark/30 hover:text-primary hover:border-primary dark:bg-light/5 dark:text-light/30 dark:border-light/30 dark:hover:text-primary dark:hover:border-primary";

  const stylesButton = `py-2 px-4 rounded-md font-semibold transition-all duration-300 ${
    type === "primary" ? stylesButtonPrimary : stylesButtonSecondary
  }`;

  return <button className={stylesButton}>{children}</button>;
}
