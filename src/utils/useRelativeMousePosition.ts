import { useMotionValue, useMotionValueEvent } from "framer-motion";
import { useMousePosition } from "./useMousePosition";

export const useRelativeMousePosition = () => {
  const { x, y } = useMousePosition();
  const xRelative = useMotionValue<number>(0);
  const yRelative = useMotionValue<number>(0);

  useMotionValueEvent(x, "change", (latest) => {
    xRelative.set(latest / window.innerWidth);
  });

  useMotionValueEvent(y, "change", (latest) => {
    yRelative.set(latest / window.innerHeight);
  });

  return { x: xRelative, y: yRelative };
};
