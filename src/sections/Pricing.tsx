import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PricingCard from "../components/PricingCard";

export const Pricing = () => {
  return (
    <section>
      <div className="container border-l border-r border-t border-gray-800 py-48 relative">
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
        <div>
          <h2 className="text-5xl font-semibold leading-tight text-center">
            Pay once, use forever
          </h2>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <PricingCard
              title="Basic"
              description="AI chatbot, personalized recommendations"
              price="0"
              buttonText="Get Started"
              features={[
                "An AI chatbot that can understand your queries",
                "Personalized recommendations based on your preferences",
                "Ability to explore the app and its features without any cost",
              ]}
              color="amber"
            />

            <PricingCard
              title="Premium"
              description="Advanced AI chatbot, priority support, analytics dashboard"
              price="20"
              buttonText="Get Started"
              features={[
                "An AI chatbot that can understand your queries",
                "Personalized recommendations based on your preferences",
                "Ability to explore the app and its features without any cost",
              ]}
              className="py-18 my-0"
            />

            <PricingCard
              title="Enterprise"
              description="Custom AI chatbot, advanced analytics, dedicated account"
              price="0"
              buttonText="Contact Us"
              features={[
                "An AI chatbot that can understand your queries",
                "Personalized recommendations based on your preferences",
                "Ability to explore the app and its features without any cost",
              ]}
              color="teal"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
