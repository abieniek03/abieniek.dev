import Image from "next/image";

import SectionTitle from "@/components/main-page/sections/elements/SectionTitle";
import PostItem, { IPostItem } from "@/components/blog/PostItem";
import BlogHeader from "@/components/blog/BlogHeader";

import { gql } from "graphql-request";
import { gqlClient } from "@/utils/gqlClient";

export default async function BlogMainPage() {
  const query = gql`
    {
      allBlogPosts {
        slug
        title
        description
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  const { allBlogPosts } = response;

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <BlogHeader
        title="Blog"
        subtitle="web development dla początkujących i nie tylko"
      />
      <div className="h-screen w-full">
        {allBlogPosts.length > 0 ? (
          <div>
            <SectionTitle>Najnowosze posty</SectionTitle>
            <div className="my-10">
              {allBlogPosts.map((el: IPostItem, index: number) => (
                <PostItem
                  key={index}
                  slug={el.slug}
                  title={el.title}
                  description={el.description}
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
