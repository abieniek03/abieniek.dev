import { type ReactElement, type ReactNode } from "react";

type ButtonType = "primary" | "secondary" | "alternative";
type ButtonSize = "xs" | "sm" | "lg";

interface IButton {
  type: ButtonType;
  children: ReactNode;
  size?: ButtonSize;
  fullWidth?: boolean;
  onClick?: () => void;
}

export default function Button({
  type,
  children,
  size,
  fullWidth,
  onClick,
}: IButton): ReactElement {
  let buttonTypeStyles;
  const stylesButtonPrimary = "bg-primary hover:bg-primary/90 text-light";
  const stylesButtonSecondary =
    "bg-dark/5 border border-dark/15 text-dark/30 hover:text-primary hover:border-primary dark:bg-light/5 dark:text-light/30 dark:border-light/30 dark:hover:text-primary dark:hover:border-primary";
  const stylesButtonAlternative =
    "bg-light/25 border border-light/50 hover:bg-light/75 hover:text-primary";

  switch (type) {
    case "secondary":
      buttonTypeStyles = stylesButtonSecondary;
      break;
    case "alternative":
      buttonTypeStyles = stylesButtonAlternative;
      break;
    default:
      buttonTypeStyles = stylesButtonPrimary;
  }

  const stylesButton = `py-2 px-4 rounded-md font-semibold transition-all duration-300 ${buttonTypeStyles} ${size ? `text-${size}` : ""} ${fullWidth ? "w-full" : ""}`;

  return (
    <button className={stylesButton} onClick={onClick}>
      {children}
    </button>
  );
}
