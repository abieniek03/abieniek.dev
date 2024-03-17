import { type ReactElement } from "react";
import Link from "next/link";
import { formattedPostDate } from "@/app/_utils/formattedPostDate";

export interface IPostItem {
  slug: string;
  title: string;
  description: string;
  createdAt: string;
}

export default function PostItem({
  slug,
  title,
  description,
  createdAt,
}: Readonly<IPostItem>): ReactElement {
  return (
    <Link
      href={`blog/${slug}`}
      className="block rounded-md border p-4 transition-all duration-300 hover:border-primary hover:bg-dark hover:bg-opacity-[1%] dark:border-light/10 dark:hover:border-primary"
    >
      <div className="mb-2 flex flex-col lg:mb-1 lg:flex-row lg:flex-wrap lg:items-center">
        <span className="mb-1 mr-2.5 text-xl font-semibold text-primary md:text-2xl">
          {title}
        </span>
        <span className="text-xs opacity-60 dark:opacity-40">
          {formattedPostDate(createdAt)}
        </span>
      </div>
      <p className="text-sm md:text-base">{description}</p>
    </Link>
  );
}
