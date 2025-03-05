
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [annual, setAnnual] = useState(false);

  const togglePricing = () => {
    setAnnual(!annual);
  };

  const plans = [
    {
      name: "Free",
      description: "Basic resume optimization tools for occasional job seekers.",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { included: true, text: "1 AI-optimized resume per month" },
        { included: true, text: "Basic templates" },
        { included: true, text: "Resume match score" },
        { included: false, text: "AI-generated cover letters" },
        { included: false, text: "Premium templates" },
        { included: false, text: "AI career assistant" },
        { included: false, text: "Version history" },
        { included: false, text: "Priority support" }
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      description: "Advanced features for serious job seekers.",
      monthlyPrice: 9.99,
      annualPrice: 79.99,
      features: [
        { included: true, text: "Unlimited AI-optimized resumes" },
        { included: true, text: "All templates (basic & premium)" },
        { included: true, text: "Advanced resume match score" },
        { included: true, text: "AI-generated cover letters" },
        { included: true, text: "Premium templates" },
        { included: true, text: "AI career assistant" },
        { included: true, text: "Version history" },
        { included: false, text: "Priority support" }
      ],
      buttonText: "Subscribe Now",
      popular: true
    },
    {
      name: "Business",
      description: "Complete solution for recruiters and HR professionals.",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      features: [
        { included: true, text: "Unlimited AI-optimized resumes" },
        { included: true, text: "All templates (basic & premium)" },
        { included: true, text: "Advanced resume match score" },
        { included: true, text: "AI-generated cover letters" },
        { included: true, text: "Premium templates" },
        { included: true, text: "AI career assistant" },
        { included: true, text: "Version history" },
        { included: true, text: "Priority support" }
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-sm font-medium">Pricing Plans</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-lg text-foreground/80 mb-8">
            Choose the perfect plan for your needs. All plans include our core AI resume optimization technology.
          </p>

          <div className="flex items-center justify-center mb-4">
            <span className={cn("mr-4", !annual ? "font-semibold" : "text-foreground/70")}>
              Monthly
            </span>
            <div
              className="relative w-14 h-7 rounded-full bg-secondary cursor-pointer"
              onClick={togglePricing}
            >
              <div
                className="absolute top-1 left-1 bg-primary w-5 h-5 rounded-full transition-all duration-300"
                style={{ transform: annual ? "translateX(7px)" : "translateX(0)" }}
              ></div>
            </div>
            <span className={cn("ml-4", annual ? "font-semibold" : "text-foreground/70")}>
              Annual <span className="text-primary text-sm font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-2xl overflow-hidden transition-all duration-300",
                plan.popular
                  ? "relative z-10 shadow-xl border-2 border-primary scale-105 md:scale-110 bg-white"
                  : "border border-border shadow-sm hover:shadow-md bg-white"
              )}
            >
              {plan.popular && (
                <div className="bg-primary text-white py-1 text-center text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/70 h-12 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${annual ? plan.annualPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                  </span>
                  <span className="text-foreground/70 ml-2">
                    {annual ? "/year" : "/month"}
                  </span>
                </div>
                <Button
                  className={cn("w-full mb-6", !plan.popular && "bg-foreground hover:bg-foreground/80")}
                >
                  {plan.buttonText}
                </Button>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      {feature.included ? (
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-5 w-5 text-foreground/30 mr-3 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "" : "text-foreground/50"}>{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="p-6 rounded-xl bg-white border border-border shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Need a single resume?</h3>
            <p className="text-foreground/80 mb-6">
              Try our one-time AI-optimized resume service without a subscription.
            </p>
            <Button variant="outline">
              $4.99 for a Single Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
