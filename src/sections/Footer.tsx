import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faXTwitter,
    faDiscord,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
    return (
        <footer className="border-t border-gray-800 bg-gray-950">
            <div className="container py-8 relative">
                <div className="flex justify-between items-center">
                    <div className="font-extrabold text-2xl">sphereal.ai</div>
                    <nav className="text-xs uppercase tracking-widest font-space font-bold text-gray-400 flex gap-16">
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Testimonials</a>
                        <a href="#">New Account</a>
                    </nav>
                </div>
                <div className="flex justify-between items-center pt-16">
                    <p className="font-space text-sm text-gray-500">
                        &copy; Frontend Tribe, All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="fill-gray-500 size-4"
                            />
                        </div>
                        <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faXTwitter}
                                className="fill-gray-500 size-4"
                            />
                        </div>
                        <div className="size-10 rounded-full bg-gray-900 inline-flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faDiscord}
                                className="fill-gray-500 size-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
