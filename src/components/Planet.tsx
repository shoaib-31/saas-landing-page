import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("rounded-full bg-gradient-to-r to-gray-950", {
  variants: {
    size: {
      small: "size-4",
      medium: "size-6",
      large: "size-8",
    },
    color: {
      violet: "from-violet-400 to-gray-950",
      teal: "from-teal-400 to-gray-950",
      fuchsia: "from-fuchsia-400 to-gray-950",
    },
  },
  defaultVariants: {
    size: "medium",
    color: "violet",
  },
});

export const Planet = (
  props: {
    size?: "small" | "medium" | "large";
    color?: "violet" | "teal" | "fuchsia";
  } & HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={classes({
        size: props.size,
        color: props.color,
        className: props.className,
      })}
    ></div>
  );
};

export default Planet;
