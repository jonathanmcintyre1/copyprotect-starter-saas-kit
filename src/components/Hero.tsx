
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Protect Your Images <br />
              <span className="gradient-text">From Unauthorized Use</span>
            </h1>
            <p className="mt-6 text-lg text-navy-700 max-w-lg">
              Image Guardian uses advanced AI to detect and prevent unauthorized use of your images across the web. Keep your visual assets safe and secure.
            </p>
            
            <div className="mt-8 space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-guardian-500" />
                <span className="text-navy-700">Continuous monitoring across the web</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-guardian-500" />
                <span className="text-navy-700">Instant alerts for unauthorized usage</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-guardian-500" />
                <span className="text-navy-700">Automated takedown requests</span>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-guardian-600 hover:bg-guardian-700 text-white text-lg py-6 px-8">
                Start Protecting My Images
              </Button>
              <Button variant="outline" className="border-guardian-500 text-guardian-600 hover:bg-guardian-50 text-lg py-6 px-8">
                See How It Works
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-guardian-200/30 rounded-full blur-3xl transform -translate-y-4"></div>
              <img 
                src="/placeholder.svg" 
                alt="Image Protection Dashboard"
                className="relative z-10 rounded-xl shadow-2xl border border-gray-200 animate-float"
              />
              <div className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100 max-w-xs">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-navy-900">Image Match Found</span>
                </div>
                <p className="text-xs text-navy-700 mt-1">Unauthorized usage detected on example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
