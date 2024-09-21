"use client";

import React from "react";
import robotImg from "../assets/images/robot.jpg";
import Loader from "../assets/images/loader.svg";
import { Planet } from "@/components/Planet";
import { Orbit } from "@/components/Orbit";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { useRelativeMousePosition } from "@/utils/useRelativeMousePosition";
import { motion, useMotionValueEvent, useTransform } from "framer-motion";

export const Hero = () => {
  const { x, y } = useRelativeMousePosition();
  const moveX = useTransform(x, [0, 1], [-25, 25]);
  const moveY = useTransform(y, [0, 1], [-25, 25]);
  useMotionValueEvent(x, "change", (latest) => {
    console.log("x", latest);
  });
  return (
    <section className="">
      <div className="container">
        <SectionBorder className="overflow-x-clip relative isolate overflow-hidden">
          <SectionContent className="[mask-image:linear-gradient(transparent,black_10%,black_90%,transparent)]">
            <div className="">
              <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10"></div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute-center">
                  <Orbit className="size-[350px]" />
                </div>
                <div className="absolute-center">
                  <Orbit className="size-[600px]" />
                </div>
                <div className="absolute-center">
                  <Orbit className="size-[850px]" />
                </div>
                <div className="absolute-center">
                  <Orbit className="size-[1100px]" />
                </div>
                <div className="absolute-center">
                  <Orbit className="size-[1350px]" />
                </div>
              </div>

              <h1 className="text-center text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-semibold leading-tight text-gray-100">
                Explore the Possibilities of AI Chatting with Brainwave
              </h1>
              <p className="text-center font-medium text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8 font-space">
                Unleash the power of AI within Brainwave. Upgrade your
                productivity with Brainwave, the Open AI chat app.
              </p>
              <div className="flex justify-center">
                <Button variant="secondary" className="mt-10">
                  Get Started
                </Button>
              </div>
              <div className="flex justify-center mt-20">
                <div className="relative isolate">
                  {/* Begin Planets */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2">
                    <div className="absolute-center">
                      <motion.div
                        initial={{
                          x: 25,
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Planet
                          size="large"
                          color="violet"
                          className="-translate-y-[60px] -translate-x-[300px] rotate-225"
                        />
                      </motion.div>
                    </div>
                    <div className="absolute-center">
                      <motion.div
                        initial={{
                          x: -25,
                          y: 10,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Planet
                          size="large"
                          color="violet"
                          className="-translate-y-[140px] translate-x-[350px] rotate-315"
                        />
                      </motion.div>
                    </div>
                    <div className="absolute-center">
                      <motion.div
                        initial={{
                          x: 25,
                          y: 25,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Planet
                          size="small"
                          color="fuchsia"
                          className="-translate-y-[300px] -translate-x-[500px] rotate-225"
                        />
                      </motion.div>
                    </div>
                    <div className="absolute-center">
                      <motion.div
                        initial={{
                          x: -25,
                          y: 20,
                          opacity: 0,
                        }}
                        animate={{
                          x: 0,
                          y: 0,
                          opacity: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: "easeInOut",
                        }}
                      >
                        <Planet
                          size="medium"
                          color="teal"
                          className="-translate-y-[250px] translate-x-[500px] rotate-315"
                        />
                      </motion.div>
                    </div>
                  </div>
                  {/* End Planets */}

                  <div className="aspect-video max-w-5xl mx-auto bg-gray-900 rounded-2xl bg-cover border-gradient bg-transparent p-0.5">
                    <Image
                      src={robotImg}
                      alt="robot image"
                      className="object-fill rounded-2xl"
                    />
                  </div>

                  {/* Begin Floating Input Field */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-2 md:bottom-4 lg:bottom-10 w-full flex justify-center">
                    <div className="px-4 max-w-xs w-full">
                      <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-full">
                        <div>
                          <Loader className="text-violet-400" />
                        </div>
                        <div className="font-space font-semibold text-white text-xl">
                          AI is generating
                          <span className="animate-cursor-blink">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Floating Input Field */}

                  {/* Begin Chat Bubbles */}
                  <div className="absolute z-10 left-0 -translate-x-10 xl:-translate-x-1/2 top-[40%] hidden lg:block">
                    <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white">
                      <div>
                        Can you generate an incredible frontend dev video
                        tutorial?
                      </div>
                      <div className="text-right text-gray-400 text-sm font-semibold">
                        1m ago
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 right-0 translate-x-10 xl:translate-x-1/2 top-[60%] hidden lg:block">
                    <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white">
                      <div>
                        <strong>Brainwave:</strong> I created one based on
                        videos from Frontend Tribe!
                      </div>
                      <div className="text-right text-gray-400 text-sm font-semibold">
                        Just now
                      </div>
                    </div>
                  </div>
                  {/* End Chat Bubbles */}
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
