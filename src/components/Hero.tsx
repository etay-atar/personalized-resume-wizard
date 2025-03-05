
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">AI-powered resume optimization</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl animate-slide-up text-balance">
            Land Your Dream Job with an 
            <span className="relative inline-block mx-2">
              <span className="relative z-10">AI-Optimized</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-10 skew-x-3"></span>
            </span> 
            Resume
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mb-10 animate-slide-up delay-100 text-pretty">
            AI Resume Pro uses advanced AI to analyze job descriptions and tailor your resume for maximum impact. Stand out from the competition with a perfectly optimized application.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up delay-200">
            <Button size="lg" className="px-8 py-6 text-lg font-medium">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg font-medium">
              See How It Works
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl animate-slide-up delay-300">
            {[
              { icon: <CheckCircle2 className="h-5 w-5 text-primary" />, text: "ATS-friendly resumes" },
              { icon: <FileText className="h-5 w-5 text-primary" />, text: "Job-specific keyword optimization" },
              { icon: <Sparkles className="h-5 w-5 text-primary" />, text: "AI-powered content improvements" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex items-center justify-center p-4 rounded-xl border border-border bg-white/50 backdrop-blur-sm",
                  "shadow-sm hover:shadow-md transition-all duration-300"
                )}
              >
                {item.icon}
                <span className="ml-2 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
