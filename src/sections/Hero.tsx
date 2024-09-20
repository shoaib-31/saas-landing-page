import React from "react";
import robotImg from "../assets/images/robot.jpg";
import Loader from "../assets/images/loader.svg";
import { Planet } from "@/components/Planet";
import { Orbit } from "@/components/Orbit";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";

export const Hero = () => {
  return (
    <section className=" relative isolate overflow-x-clip">
      <div className="container">
        <SectionBorder className="py-24 md:py-36 lg:py-48 overflow-x-clip">
          <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10"></div>
          <div className="absolute inset-0 -z-10">
            <div className="absolute-center">
              <Orbit size={350} />
            </div>
            <div className="absolute-center">
              <Orbit size={600} />
            </div>
            <div className="absolute-center">
              <Orbit size={850} />
            </div>
            <div className="absolute-center">
              <Orbit size={1100} />
            </div>
            <div className="absolute-center">
              <Orbit size={1350} />
            </div>
          </div>

          {/* <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-900 via-fuchsia-900 to-indigo-900 [mask-image:radial-gradient(closest-side,black,transparent)]"></div> */}

          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto font-semibold leading-tight text-gray-100">
            Explore the Possibilities of AI Chatting with Brainwave
          </h1>
          <p className="text-center font-medium text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-8 font-space">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the Open AI chat app.
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
                  <Planet
                    size="large"
                    color="violet"
                    className="-translate-y-[60px] -translate-x-[300px] rotate-225"
                  />
                </div>
                <div className="absolute-center">
                  <Planet
                    size="large"
                    color="violet"
                    className="-translate-y-[140px] translate-x-[350px] rotate-315"
                  />
                </div>
                <div className="absolute-center">
                  <Planet
                    size="medium"
                    color="teal"
                    className="-translate-x-[600px] translate-y-[100px] rotate-180"
                  />
                </div>
                <div className="absolute-center">
                  <Planet
                    size="medium"
                    color="teal"
                    className="-translate-y-[100px] translate-x-[600px] rotate-315"
                  />
                </div>
                <div className="absolute-center">
                  <Planet
                    size="small"
                    color="fuchsia"
                    className="-translate-y-[300px] -translate-x-[500px] rotate-225"
                  />
                </div>
                <div className="absolute-center">
                  <Planet
                    size="small"
                    color="fuchsia"
                    className="-translate-y-[250px] translate-x-[600px] rotate-315"
                  />
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
              <div className="absolute   left-1/2 -translate-x-1/2 bottom-4 md:bottom-10   ">
                <div className="px-4 w-full max-w-sm">
                  <div className="bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl">
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
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    1m ago
                  </div>
                </div>
              </div>
              <div className="absolute z-10 right-0 translate-x-10 xl:translate-x-1/2 top-[60%] hidden lg:block">
                <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white">
                  <div>
                    <strong>Brainwave:</strong> I created one based on videos
                    from Frontend Tribe!
                  </div>
                  <div className="text-right text-gray-400 text-sm font-semibold">
                    Just now
                  </div>
                </div>
              </div>
              {/* End Chat Bubbles */}
            </div>
          </div>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Hero;
