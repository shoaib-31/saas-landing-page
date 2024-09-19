import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export const CallToAction = () => {
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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute z-10 size-8 rounded-full bg-gradient-to-r rotate-225 from-violet-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 top-[200px] -left-[200px]"></div>
          <div className="absolute z-10 size-8 rounded-full bg-gradient-to-r rotate-315 from-violet-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-[200px] left-[200px]"></div>
          <div className="absolute z-10 size-6 rounded-full bg-gradient-to-r rotate-225 from-teal-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 top-0 -left-[500px]"></div>
          <div className="absolute z-10 size-6 rounded-full bg-gradient-to-r rotate-315 from-teal-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-[100px] left-[500px]"></div>
          <div className="absolute z-10 size-4 rounded-full bg-gradient-to-r rotate-225 from-fuchsia-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 -top-[250px] -left-[400px]"></div>
          <div className="absolute z-10 size-4 rounded-full bg-gradient-to-r rotate-315 from-fuchsia-400 to-gray-950 -translate-y-1/2 -translate-x-1/2 top-[150px] left-[400px]"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2">
          <div className="absolute size-[200px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2">
          <div className="absolute size-[350px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2">
          <div className="absolute size-[500px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2">
          <div className="absolute size-[650px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 -z-10 top-1/2 -translate-y-1/2">
          <div className="absolute size-[800px] border border-gray-500/30 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-950 via-fuchsia-950 to-violet-950 [mask-image:radial-gradient(closest-side,black,transparent)] -z-20"></div>
        <div>
          <h2 className="font-semibold text-5xl max-w-3xl mx-auto text-center leading-tight">
            Be part of the future with Brainwave
          </h2>
          <p className="max-w-2xl mx-auto text-center text-xl text-gray-400 mt-4">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <div className="justify-center flex">
            <button className="font-space text-xs font-bold uppercase tracking-widest bg-gray-200 text-gray-950 h-10 px-6 rounded-lg mt-10">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
