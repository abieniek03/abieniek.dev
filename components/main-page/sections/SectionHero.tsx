"use client";

import { type ReactElement } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SectionHero(): ReactElement {
  return (
    <motion.section
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 10,
      }}
      viewport={{ once: true }}
      className="mt-16 flex h-screen flex-col gap-y-10 lg:mt-0 lg:flex-row lg:items-center lg:gap-x-0"
    >
      <div className="lg:max-w-[640px]">
        <h1 className="mb-2 text-4xl font-bold sm:text-6xl md:mb-4 md:text-7xl">
          Cześć, jestem <br /> <span className="text-primary">Adrian.</span>
        </h1>
        <p className="mb-4 md:text-lg lg:mb-8">
          Na codzień zajmuję się web developerem. Studiuję informatykę.
          W&nbsp;wolnym czasie rozwijam się, a także dzielę się swoją wiedzą i
          doświadczeniem. Prowadzę bloga i kanał na YouTube.
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <a
            href="#kontakt"
            className=" font-semibold text-primary transition-all duration-300 hover:underline"
          >
            <i className="ri-mail-send-line mr-2" />
            Skontaktuj się ze mną
          </a>
        </div>
      </div>

      <motion.div className="w-full lg:max-w-[40%]">
        <Image
          src="/hero-image.jpg"
          alt=""
          width={540}
          height={540}
          className="w-full rounded-lg"
        />
      </motion.div>
    </motion.section>
  );
}
