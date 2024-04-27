"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export function TracingBeam({ children, className }: Readonly<Props>) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    },
  );
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  });

  return (
    <motion.div
      ref={ref}
      className={clsx("relative mx-auto h-full w-full max-w-4xl", className)}
    >
      <div className="absolute -left-4 top-3 hidden md:-left-20 lg:block">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? "none"
                : "rgba(6, 127, 179, 0.5) 0px 3px 8px",
          }}
          className="border-netural-200 ml-[27px] flex h-4 w-4 items-center justify-center rounded-full border shadow-sm"
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            className="h-2 w-2  rounded-full border border-neutral-300 bg-primary dark:bg-primary"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className=" ml-4 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#9091A0"
            strokeOpacity="0.16"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#067FB3" stopOpacity="0"></stop>
              <stop stopColor="#067FB3"></stop>
              <stop offset="0.325" stopColor="#026088"></stop>
              <stop offset="1" stopColor="#026088" stopOpacity="0"></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
}
