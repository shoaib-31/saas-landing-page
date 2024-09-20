import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export const Orbit = (
  props: { size: number } & HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={twMerge(
        "size-[850px] border border-gray-500/30 rounded-full",
        props.className
      )}
      style={{
        width: props.size,
        height: props.size,
      }}
    ></div>
  );
};
