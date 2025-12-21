"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]));
  const y = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]));

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
