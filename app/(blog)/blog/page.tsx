import PostItem from "@/components/blog/PostItem";
import SectionTitle from "@/components/main-page/sections/elements/SectionTitle";
import { type ReactElement } from "react";

export default function BlogMainPage(): ReactElement {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <header className="mb-10 w-full border-b py-10 text-center text-primary dark:border-light/10">
        <h1 className="font-outline text-[128px] font-bold uppercase text-transparent md:text-[164px] lg:text-[196px]">
          blog
        </h1>
        <p className="-mt-5 text-lg font-light md:text-xl lg:-mt-10 lg:text-2xl xl:text-3xl">
          web development dla początkujących i&nbsp;nie&nbsp;tylko
        </p>
      </header>
      <div className="h-screen w-full">
        <SectionTitle>Najnowosze posty</SectionTitle>
        <div className="my-5">
          <PostItem path="/" title="Tytuł" description="Opis postu" />
        </div>
      </div>
    </main>
  );
}
