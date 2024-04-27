import { Metadata } from "next";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";

import { PageTitle } from "@/app/_components/PageTitle";
import { SectionTitle } from "@/app/_components/SectionTitle";
import { BlogPost } from "@/app/_components/blog/BlogPost";

interface IBlogPost {
  _createdAt: string;
  title: string;
  description: string;
  slug: string;
}

interface IAllBlogPostsData {
  allBlogPosts: IBlogPost[];
}

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogPage() {
  const query = gql`
    {
      allBlogPosts {
        _createdAt
        title
        description
        slug
      }
    }
  `;

  const data: IAllBlogPostsData = await gqlClient.request(query);
  const { allBlogPosts } = data;

  return (
    <section>
      <div className="mb-8">
        <PageTitle>Blog</PageTitle>
        <p>
          Witam na moim blogu poświęconym programowaniu w&nbsp;języku{" "}
          <strong>JavaScript</strong>.
        </p>
      </div>
      <section>
        <SectionTitle>Najnowsze posty</SectionTitle>
        <div className="grid-col1 grid gap-8 lg:grid-cols-2">
          {allBlogPosts.map((el: IBlogPost, index: number) => (
            <BlogPost
              key={index}
              date={el._createdAt}
              title={el.title}
              description={el.description}
              path={el.slug}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
