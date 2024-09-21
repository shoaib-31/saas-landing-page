import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)]">
      <div className="container py-8 relative">
        <div className="flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <div className="font-extrabold text-2xl">sphereal.ai</div>
          <nav className="text-xs uppercase tracking-widest font-space font-bold text-gray-400 flex gap-8 md:gap-16 flex-col md:flex-row items-center">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#">New Account</a>
          </nav>
        </div>
        <div className="flex justify-between items-center pt-16 flex-col-reverse gap-8">
          <p className="text-sm text-gray-500">
            &copy; Frontend Tribe, All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">
              <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="fill-gray-500 size-4"
                />
              </div>
            </a>
            <a href="#">
              <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="fill-gray-500 size-4"
                />
              </div>
            </a>
            <a href="#">
              <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faDiscord}
                  className="fill-gray-500 size-4"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
