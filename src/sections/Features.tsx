import React from "react";
import slackLogo from "../assets/images/slack-logo.png";
import dockerLogo from "../assets/images/docker-logo.png";
import figmaLogo from "../assets/images/figma-logo.png";
import githubLogo from "../assets/images/github-logo.png";
import vsCodeLogo from "../assets/images/vs-code-logo.png";
import notionLogo from "../assets/images/notion-logo.png";
import jiraLogo from "../assets/images/jira-logo.png";
import gcpLogo from "../assets/images/gcp-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionBorder } from "@/components/SectionBorder";
import { Orbit } from "@/components/Orbit";
import { Logo } from "@/components/Logo";

const features = [
  "Seamless integration",
  "Smart automation",
  "Top-notch security",
];

const logos = [
  {
    src: slackLogo,
    alt: "slack logo",
    rotate: 0,
  },
  {
    src: dockerLogo,
    alt: "docker logo",
    rotate: 45,
  },
  {
    src: figmaLogo,
    alt: "figma logo",
    rotate: 90,
  },
  {
    src: githubLogo,
    alt: "github logo",
    rotate: 135,
  },
  {
    src: vsCodeLogo,
    alt: "vs code logo",
    rotate: 180,
  },
  {
    src: notionLogo,
    alt: "notion logo",
    rotate: 225,
  },
  {
    src: jiraLogo,
    alt: "jira logo",
    rotate: 270,
  },
  {
    src: gcpLogo,
    alt: "gcp logo",
    rotate: 315,
  },
];

export const Features = () => {
  return (
    <section className="overflow-x-clip">
      <div className="container">
        <SectionBorder
          className="py-24 md:py-36 lg:py-48 md:px-20 lg:px-40"
          borderTop
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                AI chat app for seamless collaboration
              </h2>
              <ul className="flex flex-col gap-8 mt-12 font-space">
                {features.map((feature) => (
                  <li key={feature}>
                    <div className="flex items-center gap-4">
                      <div>
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-violet-400 size-6"
                        />
                      </div>
                      <h3 className="font-medium text-xl">
                        Seamless integration
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-16" variant="primary">
                Try it now
              </Button>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center justify-center size-[270px] sm:size-[450px] flex-shrink-0 relative">
                <div className="absolute inset-0">
                  <Orbit className="absolute-center size-[180px] sm:size-[300px]" />
                  <Orbit className="absolute-center size-[270px] sm:size-[450px]" />
                </div>
                {logos.map(({ src, alt, rotate }) => (
                  <div
                    key={alt}
                    className="absolute-center size-full"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                    }}
                  >
                    <div
                      className="absolute size-10 sm:size-14 rounded-lg border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center bg-gray-950"
                      style={{
                        transform: `translate(-50%, -50%) rotate(-${rotate}deg) `,
                      }}
                    >
                      <Image src={src} className="size-6 sm:size-9" alt={alt} />
                    </div>
                  </div>
                ))}
                <Logo className="size-24" />
              </div>
            </div>
          </div>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Features;
