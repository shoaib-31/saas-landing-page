import React from "react";
import underlineImage from "@/assets/images/underline.svg?url";
import { SectionBorder } from "@/components/SectionBorder";
import Planet from "@/components/Planet";
import { Orbit } from "@/components/Orbit";
import { SectionContent } from "@/components/SectionContent";
import { Button } from "@/components/Button";

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
              <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">
                Join the AI Revolution with{" "}
                <span className="relative isolate">
                  <span>Sphereal</span>
                  <div
                    className="absolute -z-10 left-0 top-full -translate-y-1/2 w-full h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
                    style={{
                      maskImage: `url(${underlineImage.src})`,
                      maskSize: "contain",
                      maskRepeat: "no-repeat",
                    }}
                  ></div>
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-center text-xl text-gray-300 mt-8">
                Experience the transformative power of AI with Sphereal. Boost
                your productivity and streamline your workflow with our
                innovative AI chat platform.
              </p>
              <div className="justify-center flex">
                <Button variant="secondary" className="mt-10">
                  Get Started
                </Button>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default CallToAction;
