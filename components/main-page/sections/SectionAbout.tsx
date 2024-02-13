import { gql } from "graphql-request";

import SectionContainer from "./elements/SectionContainer";
import SectionTitle from "./elements/SectionTitle";

import { gqlClient } from "@/utils/gqlClient";
import { convertToHTML } from "@/utils/marked";
interface IAboutData {
  title: string;
  description: string;
}

export default async function SectionAbout() {
  const query = gql`
    {
      about {
        title
        description
      }
    }
  `;

  const aboutData: any = await gqlClient.request(query);
  const data: IAboutData = aboutData.about;

  return (
    <SectionContainer>
      <SectionTitle>{data.title}</SectionTitle>

      <div
        dangerouslySetInnerHTML={convertToHTML(data.description)}
        className="mx-auto mt-8 max-w-5xl pr-2 md:pr-0 md:text-center"
      />
    </SectionContainer>
  );
}
