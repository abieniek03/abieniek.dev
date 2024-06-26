import { Metadata } from "next/types";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";

import { PageTitle } from "@/app/_components/PageTitle";
import { ProjectItem } from "@/app/_components/main-page/ProjectItem";

interface IProjectItem {
  slug: string;
  title: string;
  description: string;
  inProgress: boolean;
  dateStart: string;
  dateEnd: string;
  repoLink: string;
}

interface IAllProjectsData {
  allProjects: IProjectItem[];
}

export const metadata: Metadata = {
  title: "Projekty",
};

export default async function ProjectsPage() {
  const query = gql`
    {
      allProjects(orderBy: dateStart_DESC) {
        slug
        title
        description
        inProgress
        dateStart
        dateEnd
        repoLink
      }
    }
  `;

  const data: IAllProjectsData = await gqlClient.request(query);
  const { allProjects } = data;

  return (
    <section>
      <div className="mb-8">
        <PageTitle>Projekty</PageTitle>
        <p>
          Poniżej znajdują się moje najciekawsze projekty realizowane w ramach
          nauki programowania.
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8">
        {allProjects.map((el: IProjectItem, index: number) => (
          <ProjectItem
            key={index}
            link={el.slug}
            title={el.title}
            description={el.description}
            dateStart={el.dateStart}
            inProgress={el.inProgress}
          />
        ))}
      </div>
    </section>
  );
}
