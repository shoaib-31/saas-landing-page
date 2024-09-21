"use client";

import React, { useState } from "react";
import logo from "../assets/images/sphereal-logo.svg?url";
import { Button } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { Orbit } from "@/components/Orbit";

const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#login",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#sign-up",
  },
] satisfies {
  buttonVariant: "tertiary" | "primary";
  name: string;
  href: string;
}[];

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleClickNavItem = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <header className="border-b border-[var(--border-color)] bg-gray-950 z-40 sticky top-0">
        <div className="container">
          <div className="flex justify-between items-center h-18 lg:h-20">
            <a href="/" className="flex items-center gap-4">
              <div
                className={`size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]`}
                style={{
                  maskImage: `url(${logo.src})`,
                  maskSize: "contain",
                }}
              ></div>
              <h2 className="font-space font-extrabold text-2xl">
                sphereal.ai
              </h2>
            </a>
            <div className="h-full justify-center font-bold uppercase text-xs font-space tracking-widest text-gray-400 hidden lg:flex">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="flex items-center px-10 before:content-[''] before:h-2 before:w-px before:absolute relative before:bg-gray-800 before:left-0 before:bottom-0 last:after:content-[''] last:after:h-2 last:after:w-px last:after:absolute last:after:bg-gray-800 last:after:right-0 last:after:bottom-0 hover:text-gray-200 transition duration-300"
                  onClick={(e) => {
                    handleClickNavItem(e, item.href);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex gap-4">
              {loginItems.map((item) => (
                <Button key={item.name} variant={item.buttonVariant}>
                  {item.name}
                </Button>
              ))}
            </div>
            <div className="lg:hidden">
              <div
                className="size-10 rounded-lg border-gradient relative"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 transition-all duration-500",
                      isMobileNavOpen ? "rotate-45" : "-translate-y-1"
                    )}
                  ></div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className={twMerge(
                      "w-4 h-0.5 bg-gray-100 transition-all duration-500",
                      isMobileNavOpen ? "-rotate-45" : "translate-y-1"
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isMobileNavOpen && (
        <div className="fixed top-18 left-0 right-0 bottom-0 lg:top-20 z-30 overflow-y-scroll bg-gray-950 isolate">
          <div className="absolute -z-10 inset-0 overflow-hidden">
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
          </div>
          <div className="container h-full">
            <nav className="flex flex-col items-center justify-center gap-4 py-8 overflow-y-scroll h-full max-w-xs mx-auto">
              {[...navItems].map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  onClick={(e) => {
                    handleClickNavItem(e, item.href);
                  }}
                >
                  <span className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10 inline-flex">
                    {item.name}
                  </span>
                </a>
              ))}
              {loginItems.map((item) => (
                <a href={item.href} key={item.name} className="w-full">
                  <Button block variant={item.buttonVariant}>
                    {item.name}
                  </Button>
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
