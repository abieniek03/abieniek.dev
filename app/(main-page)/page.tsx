import { type ReactElement } from "react";

import SectionHero from "@/components/main-page/sections/SectionHero";
import SectionAbout from "@/components/main-page/sections/SectionAbout";

export default function MainPage(): ReactElement {
  return (
    <>
      <SectionHero />
      <main className="my-10 flex flex-col gap-y-10 lg:gap-y-0">
        <SectionAbout />
      </main>
    </>
  );
}
