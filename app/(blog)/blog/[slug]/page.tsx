import { redirect } from "next/navigation";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";

import { IServerComponentProps } from "@/app/_types/types";
import { formattedDate } from "@/app/_utils/formattedDate";

import { TracingBeam } from "@/app/_components/TracingBeam";
import { CustomMDX } from "@/app/_components/customMDX";

interface IBlogPostData {
  title: string;
  description: string;
  article: string;
  seoKeywords: string;
  _createdAt: string;
}

async function fetchData(slug: string) {
  const query = gql`
    {
      blogPost(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        article
        seoKeywords
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
    title: blogPost.title.split(".")[0],
    description: blogPost.seoKeywords,
  };
}

export default async function PostPage(request: IServerComponentProps) {
  const slug = request.params.slug;

  const blogPost = await fetchData(slug);

  if (!blogPost) redirect("/not-found");

  return (
    <section className="mx-auto max-w-2xl">
      <TracingBeam>
        <div className="border-b pb-8 dark:border-light/10">
          <span className="relative mb-2 block text-sm opacity-75 before:absolute before:-left-2 before:h-5 before:w-[2px] before:bg-dark before:opacity-50 before:dark:bg-light">
            {formattedDate(blogPost._createdAt, "dd LLLL yyyy")}
          </span>
          <h1 className="text-2xl font-bold lg:text-4xl">{blogPost.title}</h1>
        </div>
        <CustomMDX source={blogPost.article} />
      </TracingBeam>
    </section>
  );
}
