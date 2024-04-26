import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";

import { PageTitle } from "@/app/_components/PageTitle";
import { ProjectItem } from "@/app/_components/main-page/ProjectItem";

export default async function PrivatePolicyPage() {
  const query = gql`
    {
      allProjects(orderBy: dateStart_DESC) {
        title
        description
        inProgress
        dateStart
        dateEnd
        repoLink
      }
    }
  `;

  const data: any = await gqlClient.request(query);
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
        {allProjects.map((el: any, index: number) => (
          <ProjectItem
            key={index}
            link={el.repoLink}
            title={el.title}
            description={el.description}
            dateStart={el.dateStart}
            dateEnd={el.dateEnd}
            inProgress={el.inProgress}
          />
        ))}
      </div>
    </section>
  );
}