
import React from "react";
import { cn } from "@/lib/utils";
import { 
  FileUp, 
  Search, 
  BarChart3, 
  PenTool, 
  Download, 
  MessageSquare,
  Brain,
  LayoutTemplate,
  FileText
} from "lucide-react";

const features = [
  {
    icon: <FileUp className="h-6 w-6" />,
    title: "Simple Upload",
    description: "Upload your existing resume (PDF or DOCX) in seconds."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Job Description Analysis",
    description: "AI analyzes job postings to identify key skills and requirements."
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Match Score",
    description: "See how well your resume matches the job with a percentage score."
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "AI Optimization",
    description: "Our AI rewrites and restructures your resume to highlight relevant skills."
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Smart Formatting",
    description: "Get perfect formatting that passes through ATS systems with ease."
  },
  {
    icon: <LayoutTemplate className="h-6 w-6" />,
    title: "Professional Templates",
    description: "Choose from dozens of professional, ATS-friendly templates."
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Cover Letter Generation",
    description: "Generate tailored cover letters that complement your resume."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "AI Career Assistant",
    description: "Get personalized career advice and interview preparation tips."
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Multiple Export Formats",
    description: "Download your optimized resume as PDF, DOCX, or HTML."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need for Resume Success</h2>
          <p className="text-lg text-foreground/80">
            Our AI-powered platform offers all the tools you need to create perfect resumes that land interviews.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-xl bg-white border border-border",
        "shadow-sm hover:shadow-md transition-all duration-300 animated-card",
        "flex flex-col items-start",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/80">{description}</p>
    </div>
  );
};

export default Features;
