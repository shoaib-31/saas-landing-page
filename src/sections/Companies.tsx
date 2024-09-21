import React from "react";
import AcmeCorpLogo from "../assets/images/acme-corp-logo.svg";
import EchoValleyLogo from "../assets/images/echo-valley-logo.svg";
import QuantumLogo from "../assets/images/quantum-logo.svg";
import PulseLogo from "../assets/images/pulse-logo.svg";
import OutsideLogo from "../assets/images/outside-logo.svg";
import { SectionBorder } from "@/components/SectionBorder";
import { SectionContent } from "@/components/SectionContent";

export const Companies = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder>
          <SectionContent className="!pt-0">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-500">
              Empowering creators at leading companies
            </h3>
            <div className="flex overflow-x-hidden -mx-4 lg:-mx-8">
              <div className="flex flex-none justify-center gap-18 md:gap-36 px-18 mt-20">
                <div className="font-space text-white font-extrabold text-xl">
                  <AcmeCorpLogo className="h-8" />
                </div>
                <div className="font-space text-white font-extrabold text-xl">
                  <EchoValleyLogo className="h-8" />
                </div>
                <div className="font-space text-white font-extrabold text-xl">
                  <QuantumLogo className="h-8" />
                </div>
                <div className="font-space text-white font-extrabold text-xl">
                  <PulseLogo className="h-8" />
                </div>
                <div className="font-space text-white font-extrabold text-xl">
                  <OutsideLogo className="h-8" />
                </div>
              </div>
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Companies;
