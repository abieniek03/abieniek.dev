import { IServerComponentProps } from "@/types/types";
import { redirect } from "next/navigation";

import CustomMDX from "@/components/custom-mdx";

import { gql } from "graphql-request";
import { gqlClient } from "@/utils/gqlClient";
import { formattedPostDate } from "@/utils/formattedPostDate";

async function fetchData(slug: string) {
  const query = gql`
    {
      blogPost(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        article
        _createdAt
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  return response.blogPost;
}

export async function generateMetadata(request: IServerComponentProps) {
  const blogPost = await fetchData(request.params.slug);
  return { title: blogPost.title };
}

export default async function PostPage(request: IServerComponentProps) {
  const slug = request.params.slug;

  const blogPost = await fetchData(slug);

  if (!blogPost) redirect("/not-found");

  return (
    <div className="mt-20 lg:mt-28">
      <div className="border-b pb-14 dark:border-light/10 lg:pb-20">
        <h1 className="text-8xl font-semibold text-primary">
          {blogPost.title}
        </h1>
        <p className="mt-5 text-sm opacity-25">
          {formattedPostDate(blogPost._createdAt)}
        </p>
      </div>
      <CustomMDX source={blogPost.article} />
    </div>
  );
}
