import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const SectionContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "px-4 lg:px-8 py-24 md:py-36 lg:py-48 overflow-hidden",
        props.className
      )}
    >
      {props.children}
    </div>
  );
};
