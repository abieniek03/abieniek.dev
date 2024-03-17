import { type ReactElement } from "react";

import SectionHero from "@/app/_components/main-page/sections/SectionHero";
import SectionAbout from "@/app/_components/main-page/sections/SectionAbout";
import SectionProjects from "@/app/_components/main-page/sections/SectionProjects";
import SectionContact from "@/app/_components/main-page/sections/SectionContact";

export default function MainPage(): ReactElement {
  return (
    <>
      <SectionHero />
      <main className="my-10 flex flex-col gap-y-32">
        <SectionAbout />
        <SectionProjects />
        <SectionContact />
      </main>
    </>
  );
}
