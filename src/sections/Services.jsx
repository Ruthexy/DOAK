import React, { useEffect, useRef, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [animateFooter, setAnimateFooter] = useState(false);

  const headerRef = useRef(null);
  const cardRefs = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setAnimateHeader(true);
            } else if (entry.target === footerRef.current) {
              setAnimateFooter(true);
            } else {
              const idx = cardRefs.current.indexOf(entry.target);
              if (idx !== -1) {
                setVisibleCards((prev) => [...new Set([...prev, idx])]);
              }
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (footerRef.current) observer.observe(footerRef.current);
    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: "📈",
      title: "Commodity Trading",
      description:
        "Strategic trading solutions connecting producers with global markets. We handle grains, oilseeds, and specialty crops with transparent pricing and reliable delivery.",
      features: [
        "Real-time market analysis and pricing",
        "Global market access and connections",
        "Risk management and hedging strategies",
        "Quality assurance and certification",
      ],
    },
    {
      icon: "🏭",
      title: "Warehousing & Storage",
      description:
        "State-of-the-art storage facilities with climate control and advanced monitoring systems. Secure, efficient, and strategically located near major transportation hubs.",
      features: [
        "Climate-controlled storage facilities",
        "24/7 monitoring and security systems",
        "Strategic location near transport hubs",
        "Inventory management and tracking",
      ],
    },
    {
      icon: "🔬",
      title: "R&D Solutions",
      description:
        "Cutting-edge research and development services to improve crop yields, develop new varieties, and optimize agricultural processes for maximum efficiency.",
      features: [
        "Crop yield optimization research",
        "New variety development programs",
        "Soil health and nutrition analysis",
        "Sustainable farming practice innovation",
      ],
    },
    {
      icon: "💻",
      title: "IT Systems & Technology",
      description:
        "Comprehensive technology solutions including farm management software, supply chain tracking, and data analytics platforms tailored for agribusiness.",
      features: [
        "Farm management software platforms",
        "Supply chain tracking systems",
        "Data analytics and reporting tools",
        "Mobile apps for field operations",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-700 ${
            animateHeader
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive AgriTech Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DOAK Integrated Resources is a technology-driven company, focused on
            solving some of the region’s toughest challenges in supply chain
            management, agricultural productivity, and data-driven
            decision-making. We harness the power of research, digital
            platforms, and information systems to make agriculture smarter,
            supply chains more efficient, and businesses more competitive.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`transform transition-all duration-700 delay-${
                index * 100
              } ${
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div
          ref={footerRef}
          className={`mt-16 text-center transform transition-all duration-700 ${
            animateFooter
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                GAP Certified
              </span>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                ISO 9001
              </span>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                Organic Certified
              </span>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 shadow-sm">
              <span className="text-sm font-semibold text-gray-700">
                HACCP Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
