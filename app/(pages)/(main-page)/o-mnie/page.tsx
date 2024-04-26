import Image from "next/image";
import heroImage from "@/public/hero-image.jpg";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";
import { convertToHTML } from "@/app/_utils/marked";

import { PageTitle } from "@/app/_components/PageTitle";

interface IAboutData {
  about: {
    content: string;
  };
}

export default async function PrivatePolicyPage() {
  const query = gql`
    {
      about {
        content
      }
    }
  `;

  const data: IAboutData = await gqlClient.request(query);
  const { about } = data;

  return (
    <section>
      <PageTitle>O mnie</PageTitle>
      <div className="relative lg:flex lg:items-start">
        <div className="w-full lg:mr-16 xl:mr-20">
          <div dangerouslySetInnerHTML={convertToHTML(about.content)} />
        </div>
        <div className="sticky top-14 w-full max-w-72 xl:max-w-sm">
          <Image
            src={heroImage}
            alt=""
            width={350}
            height={350}
            className="hidden w-full rounded-lg lg:block"
          />
        </div>
      </div>
    </section>
  );
}
