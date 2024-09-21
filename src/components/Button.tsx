import React from "react";
import { cva } from "class-variance-authority";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
};

const classes = cva(
  "text-xs font-space tracking-widest uppercase font-bold h-10 px-6 transition duration-300 rounded-lg text-gray-200",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary: "bg-gray-300 text-gray-950",
        tertiary: "bg-gray-800",
      },
    },
    defaultVariants: {
      block: false,
      variant: "primary",
    },
  }
);

export const Button = (props: ButtonProps) => {
  const { className = "", children, ...otherProps } = props;
  return (
    <button className={classes({ ...otherProps, className })}>
      {children}
    </button>
  );
};
