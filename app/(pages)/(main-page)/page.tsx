import Image from "next/image";
import heroImage from "@/public/hero-image.jpg";

export default function HomePage() {
  return (
    <header className="mt-10 flex justify-between">
      <div className="max-w-xl xl:mt-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Cześć, jestem Adrian!
        </h1>
        <p className="mb-4">
          Na codzień zajmuję się tworzeniem stron i aplikacji internetowych.
          Studiuję&nbsp;informatykę i rozwijam się jako&nbsp;programista.
          Chętnie dzielę&nbsp;się wiedzą i&nbsp;doświadczeniem.
        </p>

        <a
          href="#kontakt"
          className="font-semibold text-primary transition-all duration-300 hover:underline"
        >
          <i className="ri-mail-send-line mr-2"></i>Skontaktuj się ze mną
        </a>
      </div>
      <Image
        src={heroImage}
        alt=""
        width={350}
        height={350}
        className=" hidden rotate-3 rounded-lg xl:block"
      />
    </header>
  );
}
