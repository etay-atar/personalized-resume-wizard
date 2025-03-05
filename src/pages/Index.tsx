
import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ResumeUpload from "@/components/ResumeUpload";
import TemplateShowcase from "@/components/TemplateShowcase";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <ResumeUpload />
        <TemplateShowcase />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
