import { type ReactElement } from "react";

import SectionHero from "@/components/main-page/sections/SectionHero";
import SectionAbout from "@/components/main-page/sections/SectionAbout";
import SectionContact from "@/components/main-page/sections/SectionContact";

export default function MainPage(): ReactElement {
  return (
    <>
      <SectionHero />
      <main className="my-10 flex flex-col gap-y-32">
        <SectionAbout />
        <SectionContact />
      </main>
    </>
  );
}
