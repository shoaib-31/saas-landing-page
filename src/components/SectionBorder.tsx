import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

/* 
 <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faPlus}
            className="fill-white size-4 stroke-2 stroke stroke-white"
          />
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faPlus}
            className="fill-white size-4 stroke-2 stroke stroke-white"
          />
        </div>
*/

export const SectionBorder = (
  props: { borderTop?: boolean } & HTMLAttributes<HTMLDivElement>
) => {
  return (
    <div
      className={twMerge(
        "border-l border-r px-4 border-gray-800 relative",
        props.borderTop ? "border-t" : "",
        props.className
      )}
    >
      {props.borderTop && (
        <>
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 fill-gray-200" />
          </div>
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPlus} className="size-4 fill-gray-200" />
          </div>
        </>
      )}
      {props.children}
    </div>
  );
};
