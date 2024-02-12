import { gql } from "graphql-request";

import SectionContainer from "./elements/SectionContainer";
import SectionTitle from "./elements/SectionTitle";
import ProjectItem from "../ProjectItem";

import { gqlClient } from "@/utils/gqlClient";

export interface IProjectData {
  image: {
    url: string;
  };
  title: string;
  description: string;
  repolink: string;
  demolink: string;
}

export default async function SectionProjects() {
  const query = gql`
    {
      allProjects(orderBy: order_ASC) {
        image {
          url
        }
        title
        description
        repolink
        demolink
      }
    }
  `;

  const projectsData: any = await gqlClient.request(query);
  const data: IProjectData[] = projectsData.allProjects;

  return (
    <SectionContainer id="projekty">
      <SectionTitle>Najnowsze projekty</SectionTitle>

      <div className="my-20 flex flex-col gap-y-12">
        {data.map((el, index) => (
          <ProjectItem
            key={index}
            imageUrl={el.image.url}
            title={el.title}
            description={el.description}
            repoLink={el.repolink}
            demoLink={el.demolink}
          />
        ))}
      </div>
    </SectionContainer>
  );
}
