import React from "react";
import robotImg from "../assets/images/robot.jpg";
import Loader from "../assets/images/loader.svg";
import { Planet } from "@/components/Planet";

export const Hero = () => {
  return (
    <section className=" relative isolate overflow-x-clip">
      <div className="container relative isolate border-l border-r py-48 border-gray-800 overflow-x-clip">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-900 via-fuchsia-900 to-indigo-900 [mask-image:radial-gradient(closest-side,black,transparent)]"></div>

        <h1 className="text-center text-6xl max-w-4xl mx-auto font-semibold leading-tight text-gray-100">
          Explore the Possibilities of AI Chatting with Brainwave
        </h1>
        <p className="text-center font-medium text-xl text-gray-300 max-w-3xl mx-auto mt-8 font-space">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the Open AI chat app.
        </p>
        <div className="flex justify-center">
          <button className="font-space text-xs font-bold uppercase tracking-widest bg-gray-200 text-gray-950 h-10 px-6 rounded-lg mt-10">
            Get Started
          </button>
        </div>
        <div className="relative isolate -z-10">
          <div className="absolute left-1/2 -translate-x-1/2 -z-10">
            <div className="absolute-center">
              <Planet size="large" color="violet" />
            </div>
            <div className="absolute-center">
              <Planet size="large" color="violet" />
            </div>
            <div className="absolute-center">
              <Planet size="medium" color="teal" />
            </div>
            <div className="absolute-center">
              <Planet size="medium" color="teal" />
            </div>
            <div className="absolute-center">
              <Planet size="small" color="fuchsia" />
            </div>
            <div className="absolute-center">
              <Planet size="small" color="fuchsia" />
            </div>
            {/* <div className="absolute z-10 size-8 rounded-full bg-gradient-to-r rotate-225 from-violet-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-20 -left-80"></div>
            <div className="absolute z-10 size-8 rounded-full bg-gradient-to-r rotate-315 from-violet-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-32 left-96"></div>
            <div className="absolute z-10 size-6 rounded-full bg-gradient-to-r rotate-225 from-teal-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 top-10 -left-[600px]"></div>
            <div className="absolute z-10 size-6 rounded-full bg-gradient-to-r rotate-315 from-teal-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-24 left-[600px]"></div>
            <div className="absolute z-10 size-4 rounded-full bg-gradient-to-r rotate-225 from-fuchsia-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-[300px] -left-[600px]"></div>
            <div className="absolute z-10 size-4 rounded-full bg-gradient-to-r rotate-315 from-fuchsia-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-[250px] left-[600px]"></div> */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[100px]">
              <div className="absolute size-[350px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute size-[600px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute size-[850px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute size-[1100px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute size-[1350px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
          <div className="relative isolate">
            <div className="absolute z-10 -left-2 top-[40%]">
              <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white">
                <div>
                  Can you generate an incredible frontend dev video tutorial?
                </div>
                <div className="text-right text-gray-400 text-sm font-semibold">
                  1m ago
                </div>
              </div>
            </div>
            <div className="absolute z-10 -right-2 top-[60%]">
              <div className="bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-xl p-4 w-72 font-space text-white">
                <div>
                  <strong>Brainwave:</strong> I created one based on videos from
                  Frontend Tribe!
                </div>
                <div className="text-right text-gray-400 text-sm font-semibold">
                  Just now
                </div>
              </div>
            </div>

            <div className="aspect-video max-w-5xl mx-auto bg-gray-900 rounded-2xl mt-20 bg-cover border-gradient bg-transparent p-0.5">
              <img src={robotImg} className="object-fill rounded-2xl" />
            </div>
            <div className="absolute bg-gray-950/80 flex items-center gap-4 left-1/2 -translate-x-1/2 bottom-10 px-4 py-2 rounded-2xl w-full max-w-sm">
              <div>
                <Loader className="text-violet-400" />
              </div>
              <div className="font-space font-semibold text-white text-xl">
                AI is generating<span className="animate-blink">|</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
