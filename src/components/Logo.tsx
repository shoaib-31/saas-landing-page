import { HTMLAttributes } from "react";
import logo from "../assets/images/sphereal-logo.svg?url";
import { twMerge } from "tailwind-merge";

export const Logo = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]",
        props.className
      )}
      style={{
        maskImage: `url(${logo.src})`,
        maskSize: "contain",
      }}
    ></div>
  );
};
