import React from 'react';
import ContactForm from '../components/ContactForm';
import Newsletter from '../components/Newsletter';
import Accordion from '../components/Accordion';

const ContactCTA = () => {
  const faqItems = [
    {
      question: "What types of commodities does Doak trade?",
      answer: "We specialize in grains (corn, wheat, soybeans), oilseeds (canola, sunflower), and specialty crops. Our trading team has deep expertise in both domestic and international markets, providing access to premium buyers and competitive pricing."
    },
    {
      question: "How does your warehousing system ensure grain quality?",
      answer: "Our state-of-the-art facilities feature climate control, automated monitoring systems, and regular quality testing. We maintain optimal temperature and humidity levels, conduct daily inspections, and use advanced preservation techniques to minimize spoilage and maintain grain integrity."
    },
    {
      question: "What R&D services do you offer for crop improvement?",
      answer: "We exist to help farmers, agribusinesses, and enterprises overcome inefficiencies by applying data, innovation, and digital tools that transform how food and resources move from production to market."

    },
    {
      question: "Can you integrate with our existing farm management software?",
      answer: "Yes, our IT systems are designed for seamless integration. We support API connections with major farm management platforms and can customize solutions to work with your existing workflows. Our team provides full implementation support and training."
    },
    {
      question: "What geographic regions do you serve?",
      answer: "We operate primarily in the North and Great Plains regions Nigeria, with strategic partnerships extending our reach nationwide. Our trading network connects to global markets, particularly in West Africa."
    },
    {
      question: "How quickly can you respond to market opportunities?",
      answer: "Our real-time market monitoring and automated trading systems allow us to respond within minutes to favorable market conditions. We maintain relationships with key market participants and use predictive analytics to anticipate trends and opportunities."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Agribusiness?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our experts to discuss how Doak can optimize your 
            supply chain, increase profitability, and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Newsletter & FAQ */}
          <div className="space-y-8">
            <Newsletter />
            
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <Accordion items={faqItems} />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
            <p className="text-gray-600">A05 Baraqa Mall, 69 Road,6th Ave, Amac, 900018, Nigeria.</p>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
            <p className="text-gray-600">+234 8109184166</p>
            <p className="text-gray-600">Mon-Fri 8AM-6PM WAT</p>
          </div>
          
          <div className="bg-white rounded-xl p-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
            <p className="text-gray-600">droakintegrated@gmail.com</p>
            <p className="text-gray-600">Response within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
