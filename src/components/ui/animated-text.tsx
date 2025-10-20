"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: { [key: string]: any };
    visible: { [key: string]: any };
  };
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once });
  const textArray = Array.isArray(text) ? text : [text];

  return (
    <Wrapper className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } },
          hidden: {},
        }}
        aria-hidden
      >
        {text.split(" ").map((word, i) => (
          <span key={i} className="inline-block">
            {word.split("").map((char, j) => (
              <motion.span key={j} className="inline-block" variants={animation}>
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
