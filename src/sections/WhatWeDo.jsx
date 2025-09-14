import React from "react";
import {
  BeakerIcon,
  TruckIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

const WhatWeDo = () => {
  const services = [
    {
      title: "Research & Development",
      description:
        "We apply research, data analytics, and field studies to design innovative solutions for agriculture and supply chains. Our R&D creates practical insights and models that improve efficiency, reduce waste, and drive sustainable impact.",
      icon: BeakerIcon,
    },
    {
      title: "Supply Chain Management",
      description:
        "We integrate technology into logistics, warehousing, and distribution to build smarter supply chains. By leveraging digital tracking, automation, and analytics, we help businesses move goods faster, reduce losses, and achieve transparency across the value chain.",
      icon: TruckIcon,
    },
    {
      title: "Agricultural Information Technology",
      description:
        "We develop and deploy digital tools, mobile applications, and enterprise information systems tailored to agriculture and agribusiness. These solutions give stakeholders access to real-time data, market insights, and decision-support systems that improve productivity and profitability.",
      icon: DevicePhoneMobileIcon,
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide innovative solutions that transform agriculture and
            supply chains through research, technology, and sustainable
            practices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <service.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
