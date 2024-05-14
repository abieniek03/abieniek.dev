import Link from "next/link";
import Image from "next/image";
import { gql } from "graphql-request";
import { gqlClient } from "@/app/_utils/gqlClient";

import { SectionTitle } from "@/app/_components/SectionTitle";
import { BlogPost } from "@/app/_components/blog/BlogPost";
import { ProjectItem } from "@/app/_components/main-page/ProjectItem";

interface IData {
  slug: string;
  title: string;
  description: string;
}

interface IBlogPost extends IData {
  _createdAt: string;
}

interface IProjectItem extends IData {
  inProgress: boolean;
  dateStart: string;
}
interface IResponseData {
  allBlogPosts: IBlogPost[];
  allProjects: IProjectItem[];
}

export default async function HomePage() {
  const query = gql`
    {
      allBlogPosts(orderBy: _createdAt_DESC, first: 1) {
        slug
        title
        description
        _createdAt
      }
      allProjects(orderBy: dateStart_DESC, first: 1) {
        slug
        title
        description
        dateStart
        inProgress
      }
    }
  `;

  const data: IResponseData = await gqlClient.request(query);
  const blogPostLatest = data.allBlogPosts[0];
  const projectLatest = data.allProjects[0];

  return (
    <>
      <header className="mt-10 flex flex-col justify-between lg:flex-row">
        <div className="max-w-xl xl:mt-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Cześć, jestem Adrian!
          </h1>
          <p className="mb-4">
            Na codzień zajmuję się tworzeniem stron i&nbsp;aplikacji. Zarówno po
            stronie frontendu, jak i backendu. Studiuję&nbsp;informatykę i
            ciągle się rozwijam.
          </p>

          <Link
            href="/kontakt"
            className="font-semibold text-primary transition-all duration-300 hover:underline"
          >
            <i className="ri-mail-send-line mr-2"></i>Skontaktuj się ze mną
          </Link>
        </div>
        <div className="-mt-10 flex justify-end lg:block">
          <Image
            src="/header-image.png"
            alt=""
            width={350}
            height={350}
            className="w-1/2 rounded-full lg:block lg:w-full"
          />
        </div>
      </header>
      <div className="mt-16 flex flex-col gap-10">
        <section>
          <SectionTitle>Najnowszy post</SectionTitle>
          <BlogPost
            path={blogPostLatest.slug}
            title={blogPostLatest.title}
            description={blogPostLatest.description}
            date={blogPostLatest._createdAt}
          />
        </section>
        <section>
          <SectionTitle>Najnowszy projekt</SectionTitle>
          <ProjectItem
            link={projectLatest.slug}
            title={projectLatest.title}
            description={projectLatest.description}
            inProgress={projectLatest.inProgress}
            dateStart={projectLatest.dateStart}
          />
        </section>
      </div>
    </>
  );
}
