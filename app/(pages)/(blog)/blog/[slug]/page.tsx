import { IServerComponentProps } from "@/types/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import { gql } from "graphql-request";
import { gqlClient } from "@/utils/gqlClient";
import CustomMDX from "@/components/custom-mdx";

export default async function PostPage(request: IServerComponentProps) {
  const slug = request.params.slug;
  const query = gql`
    {
      blogPost(filter: { slug: { eq: "${slug}" } }) {
        title
        description
        article
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  const { blogPost } = response;
  console.log(blogPost);

  return (
    <div className="mt-20">
      <CustomMDX source={blogPost.article} />
    </div>
  );
}
