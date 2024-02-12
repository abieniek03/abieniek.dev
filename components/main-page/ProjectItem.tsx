"use client";

import { ReactElement } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { stylesNavbarLinkButton } from "@/app/styles";

export interface IProjectItem {
  imageUrl: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
}

export default function ProjectItem({
  imageUrl,
  title,
  description,
  repoLink,
  demoLink,
}: Readonly<IProjectItem>): ReactElement {
  return (
    <motion.div
      className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8 lg:gap-y-0"
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 20,
        damping: 10,
      }}
      viewport={{ once: true }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
        className="w-full rounded-lg lg:w-1/3"
      />
      <div>
        <div>
          <h3 className="mb-2 text-2xl font-semibold">{title}</h3>
          <p>{description}</p>
        </div>

        <div className="my-3 flex gap-2">
          <a
            href={repoLink}
            rel="noopener"
            target="_blank"
            className={stylesNavbarLinkButton}
          >
            <i className="ri-github-fill" />
          </a>
          <a
            href={demoLink}
            rel="noopener"
            target="_blank"
            className={stylesNavbarLinkButton}
          >
            <i className="ri-external-link-line" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
