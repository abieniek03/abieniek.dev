import { type ComponentProps, type ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  wFull?: boolean;
}

export function Button({
  children,
  wFull,
  ...rest
}: Readonly<ComponentProps<"button"> & Props>) {
  return (
    <button
      className={clsx(
        "text-accent rounded-lg bg-primary px-4 py-2 text-white outline-primary transition-all duration-200 hover:bg-primary/90",
        wFull ? "w-full" : "",
        rest.disabled && "opacity-50 hover:bg-primary",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
