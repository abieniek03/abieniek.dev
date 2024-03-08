import Image from "next/image";

import SectionTitle from "@/components/main-page/sections/elements/SectionTitle";
import PostItem from "@/components/blog/PostItem";

import { gql } from "graphql-request";
import { gqlClient } from "@/utils/gqlClient";

export default async function BlogMainPage() {
  const query = gql`
    {
      allBlogPosts {
        slug
        title
        description
        _createdAt
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  const { allBlogPosts } = response;

  return (
    <main className="flex flex-col items-center justify-center">
      <header className="mb-10 w-full border-b py-10 text-center text-primary dark:border-light/10">
        <h1 className="font-outline text-[96px] font-bold uppercase text-transparent sm:text-[128px] md:text-[164px] lg:text-[196px]">
          Blog
        </h1>
        <p className="-mt-5 text-lg font-light uppercase md:text-xl lg:-mt-10 lg:text-2xl xl:text-3xl">
          web development dla początkujących i&nbsp;nie&nbsp;tylko
        </p>
      </header>
      <div>
        {allBlogPosts.length > 0 ? (
          <div>
            <SectionTitle>Najnowosze posty</SectionTitle>
            <div className="my-10 flex flex-col gap-5">
              {allBlogPosts.map((el: any, index: number) => (
                <PostItem
                  key={index}
                  slug={el.slug}
                  title={el.title}
                  description={el.description}
                  createdAt={el._createdAt}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center ">
            <Image src="/avatar-happy.png" alt="" width={200} height={200} />
            <p className="text-xl font-semibold">Pierwszy post już niedługo.</p>
          </div>
        )}
      </div>
    </main>
  );
}
