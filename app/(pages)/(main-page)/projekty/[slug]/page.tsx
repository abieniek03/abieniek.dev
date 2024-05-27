import { redirect } from "next/navigation";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";
import { IServerComponentProps } from "@/app/_types/types";
import { formattedDate } from "@/app/_utils/formattedDate";

import { CustomMDX } from "@/app/_components/customMDX";

interface ITeamMate {
  name: string;
  role: string;
  github: string;
}

interface IProjectData {
  title: string;
  repoLink: string;
  demoLink: string;
  description: string;
  team: ITeamMate[];
  inProgress: boolean;
  dateStart: string;
  dateEnd: string;
  article: string;
}

async function fetchData(slug: string) {
  const query = gql`
    {
      project(filter: { slug: { eq: "${slug}" } }){
        title
        repoLink
        demoLink
        description
        team
        inProgress
        dateStart
        dateEnd
        article
      
      }
    }
  `;

  const response: any = await gqlClient.request(query);
  const responseData: IProjectData = response.project;
  return responseData;
}

export async function generateMetadata(request: IServerComponentProps) {
  const project = await fetchData(request.params.slug);
  return {
    title: project.title,
  };
}

export default async function ProjectPage(request: IServerComponentProps) {
  const slug = request.params.slug;

  const project = await fetchData(slug);
  if (!project) redirect("/not-found");

  return (
    <section className="mx-auto max-w-2xl">
      <div className="mb-8 border-b pb-8 dark:border-light/10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold lg:text-4xl">{project.title}</h1>
          <div className="flex items-center gap-2 text-2xl">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                className="opacity-60 hover:opacity-75"
              >
                <i className="ri-github-fill" />
              </a>
            )}
            {project.demoLink && (
              <a
                href={project.demoLink}
                target="_blank"
                className="opacity-60 hover:opacity-75"
              >
                <i className="ri-external-link-line" />
              </a>
            )}
          </div>
        </div>
        {project.inProgress && (
          <span className="text-xs font-bold uppercase text-primary">
            in progress
          </span>
        )}

        <div className="mt-2 text-sm opacity-75">
          <p className="mb-4">{project.description}</p>
          <p>
            Rozpoczęcie:{" "}
            <span>{formattedDate(project.dateStart, "LLLL yyyy")}</span>
          </p>
          {project.dateEnd && (
            <p>
              Zakończenie:{" "}
              <span>{formattedDate(project.dateEnd, "LLLL yyyy")}</span>
            </p>
          )}
        </div>
        {project.team && (
          <div className="mt-4 text-sm">
            <p className="mb-1 font-semibold">Zespół</p>
            <ul className="ml-4 list-disc">
              {project.team.map((el: ITeamMate, index: number) => (
                <li key={index}>
                  <a
                    href={el.github}
                    rel="noopener"
                    target="_blank"
                    className="text-primary underline"
                  >
                    {el.name}
                  </a>{" "}
                  - {el.role}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {project.article ? (
        <CustomMDX source={project.article} />
      ) : (
        <p className="mt-8">Opis w przygotowaniu...</p>
      )}
    </section>
  );
}
