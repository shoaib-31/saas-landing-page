import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ashwinSantiago from "../assets/images/ashwin-santiago.jpg";
import Image from "next/image";

export const Testimonials = () => {
  return (
    <section>
      <div className="container px-40 border-l border-r border-t border-gray-800 py-48 relative">
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
        <div>
          <div className="rounded-3xl px-16 py-24 relative border-gradient">
            <div className="absolute top-0 -translate-y-1/2">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="fill-violet-500 size-20"
              />
            </div>
            <blockquote className="flex gap-12 items-center">
              <p className="font-space text-2xl font-medium">
                I was blown away by the accuracy and speed of the AI chatbot on
                Brainwave. It was able to understand my queries and provide
                relevant recommendations in seconds.
              </p>
              <cite className="not-italic">
                <Image
                  src={ashwinSantiago}
                  alt="Ashwin Santiago"
                  className="rounded-xl size-28 max-w-none"
                />
                <div className="font-bold mt-4 font-space">Dash</div>
                <div className="text-xs text-gray-500 font-space">
                  Creative Director
                </div>
              </cite>
              <div className="flex flex-col gap-2">
                <div className="size-6 border-gradient rounded-full inline-flex items-center justify-center">
                  <div className="size-1.5 bg-gray-200 rounded-full"></div>
                </div>
                <div className="size-6  rounded-full inline-flex items-center justify-center">
                  <div className="size-1.5 bg-gray-200 rounded-full"></div>
                </div>
                <div className="size-6  rounded-full inline-flex items-center justify-center">
                  <div className="size-1.5 bg-gray-200 rounded-full"></div>
                </div>
                <div className="size-6  rounded-full inline-flex items-center justify-center">
                  <div className="size-1.5 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
