"use client";

import { type ReactElement, type ReactNode } from "react";
import { motion } from "framer-motion";

export default function SectionContainer({
  children,
}: Readonly<{ children: ReactNode }>): ReactElement {
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
    >
      {children}
    </motion.section>
  );
}
