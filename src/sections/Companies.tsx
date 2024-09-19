import React from "react";
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";

export const Companies = () => {
  return (
    <section>
      <div className="container border-l border-r border-gray-800 pb-48">
        <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
          Helping people create beautiful content at
        </h3>
        <div className="flex overflow-x-hidden -m-4">
          <div className="flex flex-none justify-center gap-36 px-18 mt-20">
            <div className="font-space text-white font-extrabold text-xl">
              <AcmeCorpLogo />
            </div>
            <div className="font-space text-white font-extrabold text-xl">
              <EchoValleyLogo />
            </div>
            <div className="font-space text-white font-extrabold text-xl">
              <QuantumLogo />
            </div>
            <div className="font-space text-white font-extrabold text-xl">
              <PulseLogo />
            </div>
            <div className="font-space text-white font-extrabold text-xl">
              <OutsideLogo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
