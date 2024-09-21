import React from "react";
import PricingCard from "../components/PricingCard";
import { SectionBorder } from "@/components/SectionBorder";
import { PricingCardProps } from "@/components/PricingCard";
import { SectionContent } from "@/components/SectionContent";

const pricingTiers = [
  {
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "Free",
    buttonText: "Get Started",
    features: [
      "Access to AI chatbot for natural language conversations",
      "Basic task automation for simple workflows",
      "Limited message history storage",
    ],
    color: "amber",
    className: "lg:py-12 lg:my-6",
  },
  {
    title: "Premium",
    description: "Advanced AI capabilities for enhanced productivity",
    price: 99,
    buttonText: "Upgrade to Premium",
    features: [
      "All Basic features included",
      "Priority access to new AI features and updates",
      "Advanced automation tools for seamless task management",
      "Customizable chat templates for your specific workflows",
    ],
    color: "violet",
    className: "lg:py-18 lg:my-0",
  },
  {
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    buttonText: "Contact Us",
    buttonVariant: "primary",
    features: [
      "All Premium features included",
      "Dedicated account manager and priority customer support",
      "Enhanced security and compliance features for large teams",
      "Custom AI models tailored to your organization's needs",
      "API access for seamless integration with enterprise systems",
    ],
    color: "teal",
    className: "lg:py-12 lg:my-6",
  },
] satisfies PricingCardProps[];

export const Pricing = () => {
  return (
    <section>
      <div className="container">
        <SectionBorder borderTop>
          <SectionContent className="relative">
            <h2 className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-center">
              Flexible plans for every need
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 md:max-w-md mx-auto lg:max-w-none">
              {pricingTiers.map((tier) => (
                <div key={tier.title} className="max-w-sm mx-auto">
                  <PricingCard {...tier} />
                </div>
              ))}
            </div>
          </SectionContent>
        </SectionBorder>
      </div>
    </section>
  );
};

export default Pricing;
