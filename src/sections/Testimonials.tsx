import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import ashwinSantiago from "../assets/images/ashwin-santiago.jpg";
import Image from "next/image";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent>
            <div className="px-0 md:px-10 lg:px-20">
              <div className="rounded-3xl px-6 md:px-10 lg:px-16 py-16 lg:py-24 relative border-gradient">
                <div className="absolute top-0 -translate-y-1/2">
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className="text-violet-400 size-20"
                  />
                </div>
                <blockquote className="flex gap-12 items-center flex-col md:flex-row">
                  <div className="flex flex-col lg:flex-row gap-12">
                    <p className="font-space text-xl md:text-2xl font-medium">
                      I was blown away by the accuracy and speed of the AI
                      chatbot on Brainwave. It was able to understand my queries
                      and provide relevant recommendations in seconds.
                    </p>
                    <cite className="not-italic">
                      <Image
                        src={ashwinSantiago}
                        alt="Ashwin Santiago"
                        className="rounded-xl size-28 max-w-none"
                      />
                      <div className="font-bold mt-4 font-space">Dash</div>
                      <div className="text-xs text-gray-400 font-space">
                        Creative Director
                      </div>
                    </cite>
                  </div>
                  <div className="flex flex-row md:flex-col gap-2">
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
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Testimonials;
