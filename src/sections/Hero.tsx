import Image from "next/image";
import robotImg from "@/assets/images/robot.jpg";
import underlineImage from "@/assets/images/underline.svg?url";
import Button from "@/components/Buttons";
import Loader from "@/assets/images/loader.svg";
import Orbit from "@/components/Orbit";
import Planet from "@/components/Planet";

export const Hero = () => {
  return (
    <section className="">
      <div className="container">
        <div className=" border-l border-r border-[var(--color-border)]">
          <div className="container py-24 md:py-36 lg:py-48 relative isolate">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>
            <div className=" absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] ">
              <div className=" absolute-center">
                <Orbit className=" size-[350px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className=" size-[600px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className=" size-[850px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className=" size-[1100px]" />
              </div>
              <div className=" absolute-center">
                <Orbit className=" size-[1350px]" />
              </div>
            </div>

            <h1 className=" text-4xl md:text- lg:text-6xl font-semibold text-gray-100 text-center leading-tight">
              Unlock the Future of AI Conversations with{" "}
              <span className="relative">
                <span>Sphereal</span>
                <span
                  className=" absolute w-full left-0 top-full -translate-y-1/2 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))] h-4"
                  style={{
                    maskImage: `url(${underlineImage.src})`,
                    maskSize: "contain",
                    maskPosition: "center",
                    maskRepeat: "no-repeat",
                  }}
                ></span>
              </span>
            </h1>
            <p className=" text-center text-lg md:text-xl mt-8 max-w-3xl mx-auto">
              Harness the power of AI Sphereal. Elevate your productivity and
              workflow with our cutting-edge AI chat platform.
            </p>
            <div className=" flex justify-center ">
              <Button variant="secondary" className=" mt-10">
                Start Chatting
              </Button>
            </div>
            <div className=" relative isolate max-w-5xl mx-auto">
              <div className=" absolute left-1/2 top-0">
                <Planet
                  size="lg"
                  color="violet"
                  className="-translate-x-[316px] rotate-135 -translate-y-[76px] hidden md:block"
                />
                <Planet
                  size="lg"
                  color="violet"
                  className="translate-x-[334px] -rotate-135 -translate-y-[188px] hidden md:block"
                />
                <Planet
                  size="sm"
                  color="fuschia"
                  className=" -translate-y-[371px] -translate-x-[508px] rotate-135 hidden lg:block"
                />
                <Planet
                  size="md"
                  color="teal"
                  className="translate-x-[488px] -rotate-135 -translate-y-[342px] hidden lg:block"
                />
              </div>
              <div className=" absolute left-0 z-10 top-[30%] -translate-x-10 hidden lg:block">
                <div className=" bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    Can you generate an incredible frontend dev video tutorial?
                  </div>
                  <div className=" text-right text-gray-400 text-sm font-semibold ">
                    1m ago
                  </div>
                </div>
              </div>
              <div className=" absolute right-0 z-10 top-[50%] translate-x-10 hidden lg:block">
                <div className=" bg-gray-800/70 backdrop-blur-md border-gray-700 rounded-xl p-4 w-72">
                  <div>
                    <strong>Brainwave:</strong>I created one based on the latest
                    React features. Check it out!
                  </div>
                  <div className=" text-right text-gray-400 text-sm font-semibold ">
                    Just
                  </div>
                </div>
              </div>
              <div className=" mt-20 rounded-2xl border-2 overflow-hidden border-gradient">
                <Image src={robotImg} alt="Robot" />
                <div className=" absolute bottom-2 md:bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center px-4">
                  <div className=" bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full">
                    <Loader className=" text-violet-400" />
                    <div className=" font-semibold text-xl  text-gray-100">
                      AI is generating <span>|</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
