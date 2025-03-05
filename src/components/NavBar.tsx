
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, X, FileText } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-[#0EA5E9]">
              <FileText className="w-8 h-8" />
            </div>
            <span className="text-xl font-display font-semibold">
              AI Resume Pro
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="font-medium">
                Login
              </Button>
              <Button className="font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background backdrop-blur-lg z-40 pt-20 px-6 md:hidden transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-6 text-lg">
            <MobileNavLinks closeMenu={() => setMobileMenuOpen(false)} />
          </div>
          <div className="flex flex-col space-y-4">
            <Button variant="outline" className="w-full">
              Login
            </Button>
            <Button className="w-full">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => {
  return (
    <>
      <a
        href="#features"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
      >
        Features
      </a>
      <a
        href="#how-it-works"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
      >
        How It Works
      </a>
      <a
        href="#templates"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
      >
        Templates
      </a>
      <a
        href="#pricing"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
      >
        Pricing
      </a>
    </>
  );
};

const MobileNavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <a
        href="#features"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
        onClick={closeMenu}
      >
        Features
      </a>
      <a
        href="#how-it-works"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
        onClick={closeMenu}
      >
        How It Works
      </a>
      <a
        href="#templates"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
        onClick={closeMenu}
      >
        Templates
      </a>
      <a
        href="#pricing"
        className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
        onClick={closeMenu}
      >
        Pricing
      </a>
    </>
  );
};

export default NavBar;
