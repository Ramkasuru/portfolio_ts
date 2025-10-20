"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  from?: "left" | "right" | "top" | "bottom";
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  from,
  className,
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const getInitial = () => {
    if (!from) return { opacity: 0, y: 20 };
    switch (from) {
      case "left":
        return { opacity: 0, x: -50 };
      case "right":
        return { opacity: 0, x: 50 };
      case "top":
        return { opacity: 0, y: -50 };
      case "bottom":
        return { opacity: 0, y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : getInitial()}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
