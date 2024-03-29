"use client";

import { type ReactElement, type FC, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

import Logo from "./Logo";
import SwitchThemeButton from "./SwitchThemeButton";
import { stylesNavbarLinkButton } from "@/app/styles";

export interface INavItem {
  path: string;
  label: string;
}

const navItems: INavItem[] = [
  {
    path: "/",
    label: "Strona główna",
  },
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

const ScrollBar: FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 mb-1 h-1 origin-[0%] bg-primary"
      style={{ scaleX }}
    ></motion.div>
  );
};

export default function Navbar(): ReactElement {
  const pathname = usePathname();
  const mainPage = pathname.split("/")[1] === "";
  const currentPath = `/${pathname.split("/")[1]}`;

  const [navbarFixed, setNavbarFixed] = useState<boolean>(false);
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const isNavbarFixed = () => {
    window.scrollY ? setNavbarFixed(true) : setNavbarFixed(false);
  };

  const toggleNav = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", isNavbarFixed);
    return () => {
      window.removeEventListener("scroll", isNavbarFixed);
    };
  });

  return (
    <>
      <ScrollBar />
      <motion.nav
        initial={{ y: mainPage ? -100 : 0, opacity: mainPage ? 0 : 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
        }}
        className={`fixed top-0 z-40 w-full ${navbarFixed && !menuIsOpen ? "bg-light/95 backdrop-blur supports-[backdrop-filter]:bg-light/75 dark:bg-dark/95 dark:supports-[backdrop-filter]:bg-dark/75" : ""} ${menuIsOpen ? "bg-light dark:bg-dark" : ""}`}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between px-6 py-3 md:flex-nowrap">
          {pathname.split("/")[1] === "" ? (
            <a href="#">
              <Logo />
            </a>
          ) : (
            <Link href={`/${pathname.split("/")[1]}`}>
              <Logo />
            </Link>
          )}
          <div
            className={`${
              menuIsOpen ? "flex" : "hidden"
            } order-last mt-2 h-[calc(100vh-60px)] w-full items-center justify-center border-t dark:border-light/10 md:order-none md:mt-0 md:flex md:h-auto md:border-none`}
          >
            <ul className="mt-2 flex h-full w-full flex-col gap-2 md:mt-0 md:flex-row md:justify-center md:gap-6 lg:gap-12">
              {navItems.map((el: INavItem, index: number) => (
                <li
                  key={index}
                  className="cursor-pointer py-2 font-semibold hover:text-primary md:py-0 md:text-sm"
                  onClick={() => menuIsOpen && setMenuIsOpen(false)}
                >
                  {el.path[0] === "/" ? (
                    <Link
                      href={el.path}
                      className={currentPath === el.path ? "text-primary" : ""}
                    >
                      {el.label}
                    </Link>
                  ) : (
                    <a
                      href={
                        (mainPage ? "" : process.env.NEXT_PUBLIC_DOMAIN_NAME) +
                        el.path
                      }
                    >
                      {el.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex gap-3">
              <div className="flex flex-row-reverse">
                <div className="flex items-center gap-1">
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
                    className={`${stylesNavbarLinkButton} ml-1 md:hidden ${menuIsOpen ? "shadow-inner" : ""}`}
                    onClick={toggleNav}
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
      </motion.nav>
    </>
  );
}
