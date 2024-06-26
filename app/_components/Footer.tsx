import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 flex w-full flex-col items-center justify-between gap-2 border-t px-4 py-8 text-sm dark:border-light/10 sm:px-8 md:flex-row md:gap-0 md:px-16">
      <div className="flex gap-2 text-2xl">
        <a
          href="https://www.linkedin.com/in/adrian-bieniek/"
          target="_blank"
          className="opacity-60 hover:opacity-75"
        >
          <i className="ri-linkedin-box-fill" />
        </a>
        <a
          href="https://github.com/abieniek03"
          target="_blank"
          className="opacity-60 hover:opacity-75"
        >
          <i className="ri-github-fill" />
        </a>
      </div>
      <div className="text-center opacity-50 md:text-right">
        <p>&copy; {currentYear} Wszelkie prawa zastrzeżone.</p>
        <Link href="/polityka-prywatnosci" className="hover:underline">
          Polityka prywatności
        </Link>
      </div>
    </footer>
  );
}
