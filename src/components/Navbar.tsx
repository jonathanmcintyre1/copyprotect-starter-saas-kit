
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.svg" 
                alt="Image Guardian Protect" 
                className="h-9 w-auto" 
              />
              <span className="font-bold text-xl text-navy-900">ImageGuardian</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/#features" className="text-navy-700 hover:text-guardian-600 transition-colors">
              Features
            </Link>
            <Link to="/#pricing" className="text-navy-700 hover:text-guardian-600 transition-colors">
              Pricing
            </Link>
            <Link to="/#testimonials" className="text-navy-700 hover:text-guardian-600 transition-colors">
              Testimonials
            </Link>
            <Link to="/blog" className="text-navy-700 hover:text-guardian-600 transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-guardian-500 text-guardian-600 hover:bg-guardian-50">
              Sign In
            </Button>
            <Button className="bg-guardian-600 hover:bg-guardian-700 text-white">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-navy-900">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <Link 
              to="/#features" 
              className="block py-2 text-navy-700 hover:text-guardian-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/#pricing" 
              className="block py-2 text-navy-700 hover:text-guardian-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/#testimonials" 
              className="block py-2 text-navy-700 hover:text-guardian-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/blog" 
              className="block py-2 text-navy-700 hover:text-guardian-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="border-guardian-500 text-guardian-600 w-full justify-center">
                Sign In
              </Button>
              <Button className="bg-guardian-600 hover:bg-guardian-700 text-white w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
