
import React from "react";
import { Shield, Search, Bell, FileWarning, BarChart2, Zap } from "lucide-react";

const features = [
  {
    title: "Smart Detection Technology",
    description: "Our AI-powered system identifies your images even when they've been cropped, filtered, or edited.",
    icon: Shield,
  },
  {
    title: "Real-time Web Monitoring",
    description: "Continuous scanning across websites, social media platforms, and marketplaces to find your images.",
    icon: Search,
  },
  {
    title: "Instant Alerts",
    description: "Receive immediate notifications when your images are detected being used without permission.",
    icon: Bell,
  },
  {
    title: "Automated Takedown Requests",
    description: "Generate and send DMCA takedown requests directly through our platform with a few clicks.",
    icon: FileWarning,
  },
  {
    title: "Comprehensive Analytics",
    description: "Track where and how your images are being used with detailed visual reports and insights.",
    icon: BarChart2,
  },
  {
    title: "Lightning Fast Processing",
    description: "Upload your images and start protecting them in minutes with our efficient processing system.",
    icon: Zap,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            Advanced Features to <span className="gradient-text">Protect Your Visual Assets</span>
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            Our comprehensive suite of tools ensures your images remain protected across the entire internet.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg flex items-center justify-center guardian-gradient text-white mb-5">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
              <p className="text-navy-700">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-guardian-50 to-sky-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-7/12">
              <h3 className="text-2xl md:text-3xl font-bold text-navy-900">Ready to secure your visual content?</h3>
              <p className="mt-4 text-lg text-navy-700">
                Join thousands of creators and businesses protecting their images with Image Guardian.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <button className="guardian-button">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
