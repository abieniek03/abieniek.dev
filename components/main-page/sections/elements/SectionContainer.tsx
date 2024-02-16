"use client";

import { type ReactElement, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ISectionContainer {
  children: ReactNode;
  id?: string;
}

export default function SectionContainer({
  id,
  children,
}: Readonly<ISectionContainer>): ReactElement {
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
      id={id}
      className="scroll-mt-24 last:mb-16"
    >
      {children}
    </motion.section>
  );
}
