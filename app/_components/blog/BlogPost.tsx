import Link from "next/link";
import { formattedDate } from "@/app/_utils/formattedDate";

interface Props {
  date: string;
  title: string;
  description: string;
  path: string;
}

export function BlogPost({ path, title, description, date }: Props) {
  return (
    <Link
      href={`/blog/${path}`}
      className="block cursor-pointer rounded-lg border p-4 text-sm transition-all duration-300 hover:bg-light-darker dark:border-light/10 dark:hover:bg-light-darker/5"
    >
      <span className="mb-2 text-xs opacity-75">
        {formattedDate(date, "dd LLLL yyyy")}
      </span>
      <p className="mb-1 text-lg font-bold">{title}</p>
      <p>{description}</p>
      <button className="mt-4 font-bold text-primary hover:underline">
        Przeczytaj artykuł <i className="ri-arrow-right-line" />
      </button>
    </Link>
  );
}
