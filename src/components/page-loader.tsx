"use client";

import Backdrop from "@/components/Backdrop";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const hide = window.setTimeout(() => setVisible(false), 1800);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  const transition = {
    duration: 0.25,
    type: "spring" as const,
    damping: 10,
    stiffness: 100,
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-[#09090b]"
        >
          <Backdrop />
          <div className="fixed top-0 z-10 flex size-full flex-col items-center justify-center">
            <motion.div
              className="relative mt-8 h-[6px] w-[400px] max-w-[calc(100vw-3rem)] overflow-hidden rounded-full bg-[#ffffff1a]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <div
                className="absolute h-[6px] animate-loading rounded-full bg-white/90"
                style={{
                  width: "50%",
                  transform: "translateX(-100%)",
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
