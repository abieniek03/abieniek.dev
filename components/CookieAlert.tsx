"use client";

import { type ReactNode, useEffect, useState } from "react";
import "client-only";
import { motion } from "framer-motion";

import Button from "./Button";

export default function CookieAlert(): ReactNode {
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
        viewport={{ once: true }}
        className="fixed bottom-0 w-full bg-primary px-8 py-4 text-light "
      >
        <div className="mx-auto flex max-w-xl items-center justify-between">
          <span className="text-xs">Są tutaj ciasteczka. Smacznego!🍪</span>
          <Button type="alternative" size="xs" onClick={saveCookies}>
            <span className="tracking-wider">OK!</span>
          </Button>
        </div>
      </motion.div>
    );
  }
}
