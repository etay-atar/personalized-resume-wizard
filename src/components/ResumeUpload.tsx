
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileUp, FileText, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ResumeUpload = () => {
  const [step, setStep] = useState(1);
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      // Check file type
      if (droppedFile.type === "application/pdf" || 
          droppedFile.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
        setFile(droppedFile);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleNext = () => {
    if (step === 1 && file) {
      setStep(2);
    } else if (step === 2 && jobDescription.trim().length > 0) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <section id="how-it-works" className="py-20">
      <div className="container px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-sm font-medium">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Three Simple Steps to Resume Perfection</h2>
          <p className="text-lg text-foreground/80">
            Our AI-powered platform transforms your resume in minutes. See how easy it is to optimize your resume for your dream job.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Step indicators */}
          <div className="flex justify-between mb-10 relative">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center relative z-10">
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-semibold mb-2",
                    step >= i 
                      ? "bg-primary text-white" 
                      : "bg-secondary border border-border text-foreground/50"
                  )}
                >
                  {step > i ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    i
                  )}
                </div>
                <span 
                  className={cn(
                    "text-sm font-medium",
                    step >= i ? "text-foreground" : "text-foreground/50"
                  )}
                >
                  {i === 1 ? "Upload Resume" : i === 2 ? "Add Job Description" : "Get Results"}
                </span>
              </div>
            ))}
            
            {/* Progress line */}
            <div className="absolute top-6 left-0 w-full h-0.5 bg-border -z-0">
              <div 
                className="h-full bg-primary transition-all duration-500 ease-in-out"
                style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Upload Your Resume</h3>
                <p className="text-foreground/80 mb-6">
                  Upload your existing resume in PDF or DOCX format. We'll analyze it and prepare it for optimization.
                </p>
                
                <div 
                  className={cn(
                    "border-2 border-dashed rounded-xl p-10 text-center mb-6 transition-colors",
                    dragActive ? "border-primary bg-primary/5" : "border-border bg-secondary/50",
                    file ? "border-green-500 bg-green-50" : ""
                  )}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {file ? (
                    <div className="flex flex-col items-center">
                      <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                      <p className="text-lg font-medium mb-1">Resume Uploaded Successfully</p>
                      <p className="text-foreground/70 mb-4">{file.name}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setFile(null)}
                      >
                        Replace File
                      </Button>
                    </div>
                  ) : (
                    <>
                      <FileUp className="h-12 w-12 text-foreground/50 mx-auto mb-4" />
                      <p className="text-lg font-medium mb-1">Drag and drop your resume here</p>
                      <p className="text-foreground/70 mb-4">or click to browse files</p>
                      <p className="text-sm text-foreground/50">Supports PDF, DOCX (Max 5MB)</p>
                      
                      <input 
                        type="file" 
                        id="resume-upload" 
                        className="hidden" 
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                        onChange={handleFileChange}
                      />
                    </>
                  )}
                </div>
                
                {!file && (
                  <label htmlFor="resume-upload">
                    <Button className="w-full">
                      Select Resume File
                    </Button>
                  </label>
                )}
                
                {file && (
                  <Button className="w-full" onClick={handleNext}>
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-4">Add Job Description</h3>
                <p className="text-foreground/80 mb-6">
                  Paste the job description you're applying for. Our AI will analyze it to tailor your resume.
                </p>
                
                <div className="mb-6">
                  <label htmlFor="job-description" className="block text-sm font-medium text-foreground/70 mb-2">
                    Job Description
                  </label>
                  <textarea 
                    id="job-description"
                    className="w-full h-60 rounded-lg border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Paste the job description here..."
                    value={jobDescription}
                    onChange={handleJobDescriptionChange}
                  ></textarea>
                </div>
                
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1" onClick={handleBack}>
                    Back
                  </Button>
                  <Button 
                    className="flex-1" 
                    disabled={jobDescription.trim().length === 0}
                    onClick={handleNext}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in text-center">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Analyzing Your Resume</h3>
                <p className="text-foreground/80 mb-8">
                  Our AI is currently analyzing your resume and the job description to create the perfect match. This will only take a moment.
                </p>
                
                <div className="w-full bg-secondary rounded-full h-2 mb-8">
                  <div className="bg-primary h-2 rounded-full w-2/3 animate-pulse"></div>
                </div>
                
                <div className="bg-secondary/50 rounded-lg p-4 mb-8 text-left">
                  <h4 className="font-medium mb-2 flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Initial Analysis:
                  </h4>
                  <p className="text-sm text-foreground/70">
                    <span className="font-medium">Skills identified:</span> Project Management, JavaScript, React, UI/UX Design<br/>
                    <span className="font-medium">Match score:</span> 65% (before optimization)<br/>
                    <span className="font-medium">Opportunities:</span> Add more specific accomplishments, quantify results, highlight leadership experience
                  </p>
                </div>
                
                <Button className="px-8" onClick={() => console.log("View full analysis")}>
                  View Full Analysis
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;
