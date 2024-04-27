"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "client-only";
import { motion } from "framer-motion";

import { Button } from "./Button";

export function CookieAlert() {
  const [acceptCookie, setAcceptCookie] = useState<boolean>(false);

  const saveCookies = () => {
    localStorage.setItem("cookies", "true");
    setAcceptCookie(true);
  };

  useEffect(() => {
    setAcceptCookie(Boolean(localStorage.getItem("cookies")));
  }, []);

  if (!acceptCookie) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
        }}
        viewport={{ once: false }}
        className="fixed bottom-8 w-full"
      >
        <div className="mx-auto flex w-[90vw] max-w-xl items-center justify-between rounded-lg border bg-light-darker px-8 py-4 text-dark dark:border-light/10 dark:bg-dark-darker dark:text-light">
          <span className="text-xs">
            Są tutaj ciasteczka. Szczegóły w{" "}
            <Link
              href="/polityka-prywatnosci"
              className="font-bold text-primary hover:underline"
            >
              polityce prywatności
            </Link>
            . Smacznego!🍪
          </span>
          <Button onClick={saveCookies} size="xs">
            <span className="tracking-wider">OK</span>
          </Button>
        </div>
      </motion.div>
    );
  }
}
