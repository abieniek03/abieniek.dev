import { IServerComponentProps } from "@/app/_types/types";
import { redirect } from "next/navigation";

import CustomMDX from "@/app/_components/customMDX";

import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";
import { formattedPostDate } from "@/app/_utils/formattedPostDate";

interface IBlogPostData {
  title: string;
  description: string;
  article: string;
  seoDescription: string;
  _createdAt: string;
}

async function fetchData(slug: string) {
  const query = gql`
    {
      blogPost(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        article
        seoDescription
        _createdAt
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  const responseData: IBlogPostData = response.blogPost;
  return responseData;
}

export async function generateMetadata(request: IServerComponentProps) {
  const blogPost = await fetchData(request.params.slug);
  return {
    title: blogPost.title,
    description: blogPost.seoDescription,
  };
}

export default async function PostPage(request: IServerComponentProps) {
  const slug = request.params.slug;

  const blogPost = await fetchData(slug);

  if (!blogPost) redirect("/not-found");

  return (
    <div className="mt-20 lg:mt-28">
      <div className="border-b pb-14 dark:border-light/10 lg:pb-20">
        <h1 className="w-full text-4xl font-semibold leading-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl xl:max-w-5xl xl:text-8xl">
          {blogPost.title}
        </h1>
        <p className="mt-5 text-sm opacity-25 lg:mt-10">
          {formattedPostDate(blogPost._createdAt)}
        </p>
      </div>
      <CustomMDX source={blogPost.article} />
    </div>
  );
}
