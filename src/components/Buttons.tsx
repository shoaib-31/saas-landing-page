import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { ButtonVariants } from "@/interfaces/Buttons";

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary:
          "border-transparent border-2 relative [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))padding-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]",
        secondary: "",
        tertiary: " bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: keyof ButtonVariants;
  block?: boolean;
}

const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
};

export default Button;
