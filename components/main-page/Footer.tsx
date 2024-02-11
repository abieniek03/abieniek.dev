import { ReactElement } from "react";
import Link from "next/link";

import { SiVercel } from "react-icons/si";

const handleCurrentYear = () => {
  const currentYear = new Date().getFullYear();
  return currentYear;
};

export default function Footer(): ReactElement {
  return (
    <footer className="mx-auto mt-36 flex flex-col items-center justify-center border-t px-4 py-10 text-dark dark:border-light/10 ">
      <a
        href="https://vercel.com/"
        target="_blank"
        aria-label="Vercel"
        className=" flex items-center justify-between rounded-lg bg-black px-5 py-2.5 text-sm text-white dark:bg-white dark:text-black"
      >
        <SiVercel className="mr-2" />
        <span>Powered by Vercel </span>
      </a>
      <div className="mt-4 text-center text-dark/25 dark:text-light/25">
        <Link href="/polityka-prywatnosci" className="hover:underline">
          Polityka prywatności
        </Link>
        <p>
          Wszelkie prawa zastrzeżone - &copy;<span>{handleCurrentYear()}</span>
        </p>
      </div>
    </footer>
  );
}
