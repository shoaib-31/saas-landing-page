import React from "react";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export const PricingCard = ({
    title,
    price,
    description,
    features,
    buttonText,
    className,
    color,
}: {
    title: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    className?: string;
    color?: string;
}) => {
    return (
        <div
            className={twMerge(
                "border border-gray-800 rounded-3xl py-12 px-6 my-6",
                className
            )}
        >
            <h3
                className={twMerge(
                    "font-semibold text-4xl text-violet-400",
                    color === "amber" && "text-amber-300",
                    color === "teal" && "text-teal-300"
                )}
            >
                {title}
            </h3>
            <p className="text-gray-400 mt-4">{description}</p>
            <div className="flex mt-8 text-gray-200">
                <div className="text-2xl font-semibold">{price ? "$" : ""}</div>
                <div className="text-8xl font-semibold text-gray-200">
                    {price}
                </div>
            </div>
            <button className="bg-gray-200 text-gray-950 font-space text-xs uppercase font-bold tracking-widest w-full h-10 rounded-lg mt-8">
                {buttonText}
            </button>
            <ul className="flex flex-col gap-0 mt-4">
                {features.map((feature, index) => (
                    <li
                        key={index}
                        className="border-t border-gray-800 pt-4 mt-4"
                    >
                        <div className="flex gap-4">
                            <div>
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="fill-violet-500 size-6"
                                />
                            </div>
                            <p className="font-medium">{feature}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PricingCard;
