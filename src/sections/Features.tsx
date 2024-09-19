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
import { faPlus, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const features = [
  "Seamless integration",
  "Smart automation",
  "Top-notch security",
];

export const Features = () => {
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
        <div className="grid grid-cols-2">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              AI chat app for seamless collaboration
            </h2>
            <ul className="flex flex-col gap-8 mt-12 font-space">
              {features.map((feature) => (
                <li key={feature}>
                  <div className="flex items-center gap-4">
                    <div>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="fill-violet-500 size-6"
                      />
                    </div>
                    <h3 className="font-medium text-xl">
                      Seamless integration
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-16 text-xs font-space tracking-widest uppercase font-bold h-10 px-6 rounded-lg border-gradient">
              Try it now
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="inline-flex relative">
              <div className="absolute inset-0">
                <div className="absolute size-[300px] border border-gray-700 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute size-[450px] border border-gray-700 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center">
                  <img src={slackLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-45">
                  <img src={dockerLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-90">
                  <img src={figmaLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-135">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-135">
                  <img src={githubLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-180">
                  <img src={vsCodeLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-225">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-225">
                  <img src={notionLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-270">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-270">
                  <img src={jiraLogo} className="size-9" />
                </div>
              </div>
              <div className="absolute size-[450px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-315">
                <div className="absolute size-14 rounded-lg bg-gray-950 border border-gray-700 top-1/2 -translate-y-1/2 -translate-x-1/2 left-0 inline-flex items-center justify-center -rotate-315">
                  <img src={gcpLogo} className="size-9" />
                </div>
              </div>
              <div className="size-24 rounded-full border-gradient before:border-4 after:border-4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
