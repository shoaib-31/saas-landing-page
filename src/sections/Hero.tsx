"use client";

import React, { useRef } from "react";
import robotImg from "../assets/images/robot.jpg";
import Loader from "../assets/images/loader.svg";
import underlineImage from "../assets/images/underline.svg?url";
import { Planet } from "@/components/Planet";
import { Orbit } from "@/components/Orbit";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";
import { motion, useScroll, useTransform } from "framer-motion";

const ANIMATE_SECTION = false;

export const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end start", "start end"],
  });
  const transformedY = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const cardY = ANIMATE_SECTION ? transformedY : 0;

  return (
    <section className="" ref={sectionRef}>
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
                Unlock the Future of AI Conversations with{" "}
                <span className="relative isolate">
                  <span>Sphereal</span>
                  <div
                    className="absolute -z-10 left-0 top-full -translate-y-1/2 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                    style={{
                      maskImage: `url(${underlineImage.src})`,
                      maskSize: "100% 100%",
                      maskRepeat: "no-repeat",
                      maskPosition: "center",
                    }}
                  ></div>
                </span>
              </h1>
              <p className="text-center text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8">
                Harness the power of AI with Sphereal. Elevate your productivity
                and streamline your workflow with our cutting-edge AI chat
                platform.
              </p>
              <div className="flex justify-center">
                <Button variant="secondary" className="mt-10">
                  Start Chatting
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
                          <span className="">|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Floating Input Field */}

                  {/* Begin Chat Bubbles */}
                  <div className="absolute z-10 left-0 -translate-x-10 xl:-translate-x-1/2 top-[30%] hidden lg:block">
                    <motion.div
                      className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white"
                      style={{ translateY: cardY }}
                    >
                      <div>
                        Can you generate an incredible frontend dev video
                        tutorial?
                      </div>
                      <div className="text-right text-gray-400 text-sm font-semibold">
                        1m ago
                      </div>
                    </motion.div>
                  </div>
                  <div className="absolute z-10 right-0 translate-x-10 xl:translate-x-1/2 top-[50%] hidden lg:block">
                    <motion.div
                      style={{ translateY: cardY }}
                      className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white"
                    >
                      <div>
                        <strong>Brainwave:</strong> I created one based on
                        videos from Frontend Tribe!
                      </div>
                      <div className="text-right text-gray-400 text-sm font-semibold">
                        Just now
                      </div>
                    </motion.div>
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
