import { type ReactElement } from "react";
import Image from "next/image";

export default function HeroSection(): ReactElement {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-10 lg:flex-row lg:justify-between lg:gap-4">
      <div className="lg:w-[60%]">
        <h1 className="mb-4 text-4xl font-bold sm:text-6xl md:text-7xl xl:text-8xl">
          Cześć, jestem <br /> <span className="text-primary">Adrian.</span>
        </h1>
        <p className="md:text-lg lg:text-xl">
          Na codzień zajmuję się web developmentem. Studiuję intormatykę. W
          wolnym czasie prowadzę swoje projekty i rozwijam się jako programista.
        </p>
      </div>
      <Image
        src="/hero-image.jpg"
        alt=""
        width={540}
        height={540}
        className="mx-auto w-full max-w-md  rounded-lg lg:w-1/3"
      />
    </section>
  );
}
