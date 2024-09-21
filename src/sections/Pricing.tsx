import React from "react";
import PricingCard from "../components/PricingCard";
import { SectionBorder } from "@/components/SectionBorder";

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop className="py-24 md:py-36 lg:py-48 relative">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
              Pay once, use forever
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 md:max-w-md mx-auto lg:max-w-none">
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
                buttonText="Contact Us"
                buttonVariant="primary"
                features={[
                  "An AI chatbot that can understand your queries",
                  "Personalized recommendations based on your preferences",
                  "Ability to explore the app and its features without any cost",
                ]}
                color="teal"
              />
            </div>
          </div>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
