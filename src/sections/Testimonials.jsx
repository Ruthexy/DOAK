import React from 'react';
import Testimonial from '../components/Testimonial';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Doak transformed our grain operation. Their trading expertise and warehousing solutions helped us increase profitability by 35% while reducing risk. The team truly understands the complexities of modern agriculture.",
      author: "Ayomide Michael",
      role: "Operations Director",
      company: "Heartland Grain Cooperative"
    },
    {
      quote: "The R&D partnership with Doak has been game-changing. Their data-driven approach helped us develop three new corn varieties with 20% higher yields. Their technology platform is intuitive and powerful.",
      author: "Dr. James Paul",
      role: "Chief Research Officer",
      company: "AgriTech Innovations"
    },
    {
      quote: "Working with Doak's IT team revolutionized our supply chain visibility. Real-time tracking and predictive analytics have reduced our logistics costs by 25% while improving delivery reliability to 99.8%.",
      author: "Ugochukwu Eze",
      role: "Supply Chain Manager",
      company: "Green Valley Produce"
    },
    {
      quote: "Doak's commodity trading expertise opened new markets for our organic soybeans. They secured premium contracts with European buyers that increased our revenue by #2M annually. Highly recommend their services.",
      author: "Abraham Okonkwo",
      role: "CEO",
      company: "Organic Harvest Network"
    },
    {
      quote: "The warehousing solution Doak implemented exceeded our expectations. Climate control and monitoring systems preserved grain quality perfectly, reducing spoilage to near zero. Excellent ROI.",
      author: "Valentine Maduka",
      role: "Facilities Manager",
      company: "Prairie State Grains"
    },
    {
      quote: "Doak's comprehensive approach to agribusiness is unmatched. From trading to technology, every service is delivered with professionalism and deep industry knowledge. They've become our trusted partner.",
      author: "Amanda Phillips",
      role: "VP of Operations",
      company: "Midwest AgriGroup"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Partners Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from agribusiness leaders who have 
            transformed their operations with Doak's comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
