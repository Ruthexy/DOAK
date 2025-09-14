import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation once component mounts
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      </div>

      {/* Navigation offset */}
      <div className="pt-20"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div
            className={`text-center lg:text-left transform transition-all duration-1000 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              From Field to Market—{" "}
              <span className="text-red-500">Powering Supply-Chains</span>,
              Through Technology
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Leading commercial agribusiness solutions: commodity trading,
              warehousing, R&amp;D innovation, and IT systems that connect farms
              to markets efficiently.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Button href="#contact" size="large">
                Get Free Quote
              </Button>
              <Button href="#services" variant="outline" size="large">
                Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div
              className={`mt-12 flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 transition-all duration-1000 delay-800 ${
                animate
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-500">
                  500+
                </div>
                <div className="text-sm text-gray-400">Farms Served</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-500">
                  2M+
                </div>
                <div className="text-sm text-gray-400">Tons Traded</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-500">
                  15+
                </div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-500">
                  99%
                </div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              <div className="w-full h-72 sm:h-80 md:h-96 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl md:text-8xl mb-4">
                    🌾
                  </div>
                  <p className="text-gray-600 font-medium text-sm sm:text-base">
                    Agribusiness Innovation
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                15+
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl">
                🚜
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
