import { type ReactElement } from "react";

interface IBlogHeader {
  title: string;
  subtitle?: string;
}

export default function BlogHeader({
  title,
  subtitle,
}: IBlogHeader): ReactElement {
  return (
    <header className="mb-10 w-full border-b py-10 text-center text-primary dark:border-light/10">
      <h1 className="font-outline text-[128px] font-bold uppercase text-transparent md:text-[164px] lg:text-[196px]">
        {title}
      </h1>
      {subtitle && (
        <p className="-mt-5 text-lg font-light md:text-xl lg:-mt-10 lg:text-2xl xl:text-3xl">
          web development dla początkujących i&nbsp;nie&nbsp;tylko
        </p>
      )}
    </header>
  );
}
