import React from "react";
import { GlobeAltIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const VisionMission = () => {
  return (
    <section id="vision-mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Vision & Mission
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driving transformation in agriculture and supply chains through
            innovation, technology, and sustainable practices.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full mr-4">
                <RocketLaunchIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To accelerate agricultural and supply chain transformation in West
              Africa through research, innovation, and technology-driven
              solutions.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-green-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 rounded-full mr-4">
                <GlobeAltIcon className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-green-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              A region where supply chains are transparent, efficient, and
              resilient — powered by information technology and data
              intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
