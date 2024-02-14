import { type ReactElement } from "react";
import Link from "next/link";

interface IPostItem {
  path: string;
  title: string;
  description: string;
}

export default function PostItem({
  path,
  title,
  description,
}: Readonly<IPostItem>): ReactElement {
  return (
    <Link
      href={path}
      className="block rounded-md border p-4 transition-all duration-300 hover:border-primary hover:bg-dark hover:bg-opacity-[1%] dark:border-light/10 dark:hover:border-primary"
    >
      <p className="mb-2 text-xl font-semibold md:text-2xl">{title}</p>
      <p className="text-sm md:text-base">{description}</p>
    </Link>
  );
}
