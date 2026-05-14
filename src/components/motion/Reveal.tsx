import { motion, useReducedMotion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "ul" | "li" | "span";
} & Omit<HTMLMotionProps<"div">, "children">;

export function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  amount = 0.2,
  className,
  as = "div",
  ...rest
}: RevealProps) {
  const reduced = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, amount }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
  amount = 0.15,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
  as?: "div" | "ul" | "section";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      variants={staggerParent}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp className={className} variants={staggerChild}>
      {children}
    </Comp>
  );
}
