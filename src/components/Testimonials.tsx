
import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Image Guardian has saved our studio thousands in potential revenue loss. We've caught over 35 unauthorized uses of our work in just the first month.",
    author: "Jessica Miller",
    title: "Professional Photographer",
    avatar: "/placeholder.svg",
    stars: 5,
  },
  {
    quote: "The automated takedown process is a game-changer. What used to take hours of my time now happens with just a few clicks.",
    author: "Michael Chen",
    title: "Digital Artist",
    avatar: "/placeholder.svg",
    stars: 5,
  },
  {
    quote: "As a small business, protecting our product imagery is crucial. Image Guardian makes it affordable and effective.",
    author: "Sarah Johnson",
    title: "E-commerce Owner",
    avatar: "/placeholder.svg",
    stars: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
            Trusted by <span className="gradient-text">Image Creators</span> Worldwide
          </h2>
          <p className="mt-4 text-lg text-navy-700">
            See what our customers have to say about protecting their visual assets with Image Guardian.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-navy-700 italic">{testimonial.quote}</p>
              <div className="mt-6 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full mr-3"
                />
                <div>
                  <h4 className="font-semibold text-navy-900">{testimonial.author}</h4>
                  <p className="text-sm text-navy-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-navy-800 to-navy-900 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to secure your images?</h3>
              <p className="mt-4 text-lg text-gray-300">
                Join thousands of photographers, artists, and businesses who trust Image Guardian to protect their visual assets.
              </p>
              <button className="mt-8 bg-guardian-500 hover:bg-guardian-600 text-white px-8 py-3 rounded-lg font-medium">
                Start Your 14-Day Free Trial
              </button>
              <p className="mt-4 text-sm text-gray-400">No credit card required</p>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent" />
              <img
                src="/placeholder.svg"
                alt="Protected Images"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
