"use client";

import React from "react";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const [init, setInit] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setInit(true);
  }, []);

  return (
    <>
      {init ? (
        <button
          className="hidden rounded-md p-2 duration-200 ease-in-out hover:border hover:border-border lg:block"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          aria-label={`Switch theme to ${resolvedTheme === "dark" ? "light" : "dark"}`}
        >
          <AnimatePresence mode="wait">
            {resolvedTheme === "light" && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                key="theme1"
              >
                <MoonIcon size={20} />
              </motion.span>
            )}
            {resolvedTheme === "dark" && (
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                key="theme2"
              >
                <SunIcon size={20} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      ) : null}
    </>
  );
}
