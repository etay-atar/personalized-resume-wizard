
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";

// Template data
const templates = [
  {
    id: 1,
    name: "Professional",
    category: "Modern",
    image: "/placeholder.svg",
    preview: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Executive",
    category: "Classic",
    image: "/placeholder.svg",
    preview: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Creative",
    category: "Modern",
    image: "/placeholder.svg",
    preview: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Minimal",
    category: "Simple",
    image: "/placeholder.svg",
    preview: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Tech",
    category: "Modern",
    image: "/placeholder.svg",
    preview: "/placeholder.svg"
  }
];

const TemplateShowcase = () => {
  const [activeTemplate, setActiveTemplate] = useState(templates[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + templates.length) % templates.length;
    setCurrentIndex(newIndex);
    setActiveTemplate(templates[newIndex]);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % templates.length;
    setCurrentIndex(newIndex);
    setActiveTemplate(templates[newIndex]);
  };

  const handleTemplateClick = (template: typeof templates[0], index: number) => {
    setActiveTemplate(template);
    setCurrentIndex(index);
  };

  return (
    <section id="templates" className="py-20 overflow-hidden">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-sm font-medium">Resume Templates</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Templates for Every Industry</h2>
          <p className="text-lg text-foreground/80">
            Choose from our collection of ATS-friendly templates designed to impress employers and pass through applicant tracking systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Template Preview */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-lg bg-white animated-border">
              <div className="absolute inset-0 p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white">
                  <img
                    src={activeTemplate.preview}
                    alt={`${activeTemplate.name} Template Preview`}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Template Preview Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{activeTemplate.name}</h3>
                      <p className="text-foreground/80 mb-4">{activeTemplate.category} Template</p>
                      <Button className="mr-4">
                        Use This Template
                      </Button>
                      <Button variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Template Selection */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Select a Template</h3>
              <p className="text-foreground/80 mb-6">
                Choose from our premium collection of professionally designed resume templates.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {templates.map((template, index) => (
                <div
                  key={template.id}
                  className={cn(
                    "flex p-3 rounded-lg cursor-pointer transition-all duration-200",
                    activeTemplate.id === template.id
                      ? "bg-primary/10 border border-primary/30"
                      : "bg-secondary hover:bg-secondary/70 border border-border"
                  )}
                  onClick={() => handleTemplateClick(template, index)}
                >
                  <div className="w-16 h-20 rounded-md overflow-hidden flex-shrink-0 bg-white border border-border">
                    <img
                      src={template.image}
                      alt={template.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h4 className="font-medium">{template.name}</h4>
                    <p className="text-sm text-foreground/70">{template.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="h-10 w-10 rounded-full"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="h-10 w-10 rounded-full"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
