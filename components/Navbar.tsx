"use client";

import { useState, type ReactElement } from "react";
import Logo from "./Logo";
import { stylesNavbarLinkButton } from "@/app/styles";
import SwitchThemeButton from "./SwitchThemeButton";
import Link from "next/link";
interface INavItems {
  path: string;
  label: string;
}

const navItems: INavItems[] = [
  {
    path: "/blog",
    label: "Blog",
  },
  {
    path: "#projekty",
    label: "Projekty",
  },
  {
    path: "#kontakt",
    label: "Kontakt",
  },
];

export default function Navbar(): ReactElement {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(!false);

  return (
    <nav>
      <div className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between p-3 px-4 md:flex-nowrap">
        <Logo />
        <div
          className={`${
            menuIsOpen ? "flex" : "hidden"
          } order-last mt-2 h-[calc(100vh-60px)] w-full items-center justify-center border-t dark:border-light/10 md:order-none md:flex md:h-auto md:border-none`}
        >
          <ul className="mt-2 flex h-full w-full flex-col gap-2 md:mt-0 md:flex-row md:justify-center md:gap-5">
            {navItems.map((el, index) => (
              <li
                key={index}
                className="cursor-pointer py-2 font-semibold hover:text-primary md:font-normal"
              >
                {el.path[0] === "#" ? (
                  <Link href={el.path}>{el.label}</Link>
                ) : (
                  <a href={el.path}>{el.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end">
          <div className="flex gap-3">
            <div className="flex flex-row-reverse">
              <div className="flex items-center gap-2">
                <a
                  href="https://www.linkedin.com/in/adrian-bieniek/"
                  rel="noopener"
                  target="_blank"
                  className={stylesNavbarLinkButton}
                >
                  <i className="ri-linkedin-box-fill" />
                </a>
                <a
                  href="https://github.com/abieniek03"
                  rel="noopener"
                  target="_blank"
                  className={stylesNavbarLinkButton}
                >
                  <i className="ri-github-fill" />
                </a>
                <SwitchThemeButton />
                <button
                  className={`${stylesNavbarLinkButton} "group text-2xl" md:hidden`}
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  <i
                    className={menuIsOpen ? "ri-close-line" : "ri-menu-line"}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
