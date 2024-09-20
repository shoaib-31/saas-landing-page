import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Orbit = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[100px] border border-gray-700 rounded-full",
        props.className
      )}
    ></div>
  );
};
