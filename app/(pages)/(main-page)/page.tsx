import Link from "next/link";

export default function HomePage() {
  return (
    <header className="mt-10 flex justify-between">
      <div className="max-w-xl xl:mt-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
          Cześć, jestem Adrian!
        </h1>
        <p className="mb-4">
          Na codzień zajmuję się tworzeniem stron i&nbsp;aplikacji
          internetowych. Studiuję&nbsp;informatykę i&nbsp;rozwijam się
          jako&nbsp;programista. Chętnie dzielę&nbsp;się wiedzą
          i&nbsp;doświadczeniem.
        </p>

        <Link
          href="/kontakt"
          className="font-semibold text-primary transition-all duration-300 hover:underline"
        >
          <i className="ri-mail-send-line mr-2"></i>Skontaktuj się ze mną
        </Link>
      </div>
    </header>
  );
}
