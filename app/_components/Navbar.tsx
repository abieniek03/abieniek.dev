"use client";

import { useState, Fragment } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Transition, Dialog } from "@headlessui/react";
import clsx from "clsx";

import { SwitchThemeButton } from "./SwitchThemeButton";

interface INavItem {
  label: string;
  path: string;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "O mnie", path: "/o-mnie" },
  { label: "Blog", path: "/blog" },
  { label: "Projekty", path: "/projekty" },
  { label: "Kontakt", path: "/kontakt" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="text-xl opacity-65 hover:opacity-100"
        onClick={openModal}
      >
        <i className="ri-menu-line" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[99999]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-8 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-light p-6 text-left align-middle shadow-xl transition-all dark:bg-dark">
                  <div className="flex items-center justify-between border-b pb-2 opacity-50 dark:opacity-75">
                    <Dialog.Title as="h3" className=" font-medium leading-6">
                      Menu
                    </Dialog.Title>
                    <button className="text-xl" onClick={closeModal}>
                      <i className="ri-close-line" />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-col gap-3">
                    {navItems.map((el: INavItem, index: number) => (
                      <button className="text-left" onClick={closeModal}>
                        <Link
                          key={`link=${index}`}
                          href={el.path}
                          className={clsx(
                            pathname.split("/")[1] === el.path.slice(1)
                              ? " "
                              : "py-1 opacity-50 transition-all duration-300 hover:opacity-75 dark:opacity-75 dark:hover:opacity-90",
                          )}
                        >
                          {el.label}
                        </Link>
                      </button>
                    ))}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState<boolean>(true);

  const rootPage = pathname.split("/")[1] === "";

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.getPrevious()! > 0.02) {
        setVisible(false);
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed inset-x-0 top-8 z-[5000] mx-auto flex w-full max-w-[95vw] items-center justify-between space-x-4 rounded-full border border-transparent bg-light-darker px-6 py-2 text-dark shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-light/10 dark:bg-dark-darker dark:text-light sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-5xl"
      >
        <div>
          {rootPage ? (
            <a href="#">
              <Image
                src="/avatar.png"
                width={50}
                height={50}
                alt="abieniek.dev"
                className="w-9"
              />
            </a>
          ) : (
            <Link href="/">
              <Image
                src="/avatar.png"
                width={50}
                height={50}
                alt="abieniek.dev"
                className="w-9"
              />
            </Link>
          )}
        </div>
        <div className="hidden w-full items-center justify-center gap-5 text-sm md:flex">
          {navItems.map((el: INavItem, index: number) => (
            <Link
              key={`link=${index}`}
              href={el.path}
              className={clsx(
                "relative",
                pathname.split("/")[1] === el.path.slice(1)
                  ? "opacity-100"
                  : "opacity-65 hover:opacity-90",
              )}
            >
              {el.label}
              {pathname.split("/")[1] === el.path.slice(1) && (
                <span className="absolute inset-x-0 -bottom-3.5 mx-auto h-px w-full bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <MobileMenu />
          <SwitchThemeButton />
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
