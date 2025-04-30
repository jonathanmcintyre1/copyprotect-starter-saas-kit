
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = {
  monthly: [
    {
      name: "Personal",
      price: "$9",
      description: "Perfect for individual creators and photographers",
      features: [
        "10 images protected",
        "Weekly scanning",
        "Basic detection",
        "Email alerts",
        "Standard support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$29",
      description: "Ideal for professional photographers and small studios",
      features: [
        "100 images protected",
        "Daily scanning",
        "Advanced detection",
        "Instant notifications",
        "DMCA takedown assistance",
        "Priority support",
        "Usage analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$79",
      description: "For businesses with large image portfolios",
      features: [
        "500 images protected",
        "Real-time scanning",
        "Advanced detection & prevention",
        "Custom alerts",
        "Automated DMCA takedowns",
        "Dedicated support",
        "Comprehensive analytics",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ],
  yearly: [
    {
      name: "Personal",
      price: "$89",
      description: "Perfect for individual creators and photographers",
      features: [
        "10 images protected",
        "Weekly scanning",
        "Basic detection",
        "Email alerts",
        "Standard support",
      ],
      cta: "Start Free Trial",
      popular: false,
      save: "Save $19",
    },
    {
      name: "Professional",
      price: "$299",
      description: "Ideal for professional photographers and small studios",
      features: [
        "100 images protected",
        "Daily scanning",
        "Advanced detection",
        "Instant notifications",
        "DMCA takedown assistance",
        "Priority support",
        "Usage analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
      save: "Save $49",
    },
    {
      name: "Enterprise",
      price: "$799",
      description: "For businesses with large image portfolios",
      features: [
        "500 images protected",
        "Real-time scanning",
        "Advanced detection & prevention",
        "Custom alerts",
        "Automated DMCA takedowns",
        "Dedicated support",
        "Comprehensive analytics",
        "API access",
      ],
      cta: "Contact Sales",
      popular: false,
      save: "Save $149",
    },
  ],
};

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Choose the perfect plan for your image protection needs. All plans include a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-white p-1 rounded-lg border border-gray-200">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === "monthly"
                  ? "bg-guardian-500 text-white"
                  : "text-navy-700 hover:text-guardian-600"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly Billing
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                billingCycle === "yearly"
                  ? "bg-guardian-500 text-white"
                  : "text-navy-700 hover:text-guardian-600"
              }`}
              onClick={() => setBillingCycle("yearly")}
            >
              Annual Billing
              <span className="ml-1 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans[billingCycle].map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden border transition-all duration-300 ${
                plan.popular
                  ? "border-guardian-500 scale-105 shadow-lg relative"
                  : "border-gray-100 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 w-full text-center bg-guardian-500 text-white py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 pt-8">
                <h3 className="text-xl font-bold text-navy-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-navy-900">{plan.price}</span>
                  <span className="ml-1 text-navy-700">/{billingCycle === "monthly" ? "month" : "year"}</span>
                </div>
                {plan.save && (
                  <span className="mt-1 block text-green-600 text-sm">{plan.save}</span>
                )}
                <p className="mt-4 text-navy-700 text-sm">{plan.description}</p>
              </div>
              <div className="border-t border-gray-100 p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-guardian-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-navy-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 w-full ${
                    plan.popular
                      ? "bg-guardian-600 hover:bg-guardian-700 text-white"
                      : "bg-white border border-guardian-500 text-guardian-600 hover:bg-guardian-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-navy-700">
            Need a custom plan? <a href="#" className="text-guardian-600 font-medium">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
