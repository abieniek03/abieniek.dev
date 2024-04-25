import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";
import { convertToHTML } from "@/app/_utils/marked";

export default async function PrivatePolicyPage() {
  const query = gql`
    {
      privatePolicy {
        content
      }
    }
  `;

  const data: any = await gqlClient.request(query);
  const { privatePolicy } = data;

  return (
    <section>
      <h1 className="mb-8 text-3xl font-bold text-primary lg:text-4xl">
        Polityka prywatności
      </h1>
      <div dangerouslySetInnerHTML={convertToHTML(privatePolicy.content)} />
    </section>
  );
}
