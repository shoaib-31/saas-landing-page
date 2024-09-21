import React from "react";
import { SectionBorder } from "@/components/SectionBorder";
import Planet from "@/components/Planet";
import { Orbit } from "@/components/Orbit";
import { SectionContent } from "@/components/SectionContent";

export const CallToAction = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="overflow-hidden relative ">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)] -z-10"></div>
              <div className="absolute-center">
                <Planet
                  size="large"
                  color="violet"
                  className="translate-y-[200px] -translate-x-[200px] rotate-45"
                />
              </div>
              <div className="absolute-center">
                <Planet
                  size="large"
                  color="violet"
                  className="-translate-y-[200px] translate-x-[200px] rotate-225"
                />
              </div>
              <div className="absolute-center">
                <Planet
                  size="medium"
                  color="teal"
                  className="-translate-x-[500px] rotate-90"
                />
              </div>
              <div className="absolute-center">
                <Planet
                  size="medium"
                  color="teal"
                  className="-translate-y-[100px] translate-x-[500px] rotate-225"
                />
              </div>
              <div className="absolute-center">
                <Planet
                  size="small"
                  color="fuchsia"
                  className="-translate-y-[250px] -translate-x-[400px] rotate-135"
                />
              </div>
              <div className="absolute-center">
                <Planet
                  size="small"
                  color="fuchsia"
                  className="translate-y-[150px] translate-x-[400px] -rotate-45"
                />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[200px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[350px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[500px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[650px]" />
              </div>
              <div className="absolute-center">
                <Orbit className="size-[800px]" />
              </div>
            </div>

            <div>
              <h2 className="font-semibold text-5xl max-w-3xl mx-auto text-center leading-tight">
                Be part of the future with Brainwave
              </h2>
              <p className="max-w-2xl mx-auto text-center text-xl text-gray-400 mt-4">
                Unleash the power of AI within Brainwave. Upgrade your
                productivity with Brainwave, the open AI chat app.
              </p>
              <div className="justify-center flex">
                <button className="font-space text-xs font-bold uppercase tracking-widest bg-gray-200 text-gray-950 h-10 px-6 rounded-lg mt-10">
                  Get started
                </button>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
