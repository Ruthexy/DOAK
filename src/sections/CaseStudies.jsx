import React from 'react';
import StatCard from '../components/StatCard';

const CaseStudies = () => {
  const stats = [
    { number: '2.5M', label: 'Tons of Grain Traded', suffix: '+' },
    { number: '850', label: 'Farms Partnered', prefix: '' },
    { number: '15', label: 'Warehouses Operated', suffix: '' },
    { number: '35', label: 'Patents Filed', suffix: '%' },
    { number: '99.8', label: 'On-Time Delivery', suffix: '%' },
    { number: '50M', label: 'Revenue Generated', prefix: '#' }
  ];

  const caseStudies = [
    {
      title: 'Midwest Grain Cooperative',
      challenge: 'Needed to optimize storage and reduce post-harvest losses by 30%',
      solution: 'Implemented our smart warehousing system with IoT monitoring',
      result: 'Reduced losses by 45% and increased storage capacity by 60%',
      metric: 'ROI: 280% in first year'
    },
    {
      title: 'Organic Soybean Network',
      challenge: 'Required premium market access for 500+ organic farms',
      solution: 'Connected them to European organic food processors',
      result: 'Achieved 25% premium pricing and secured long-term contracts',
      metric: 'Additional Revenue: #12M annually'
    },
    {
      title: 'Precision Agriculture Group',
      challenge: 'Sought to improve corn yields using data-driven insights',
      solution: 'Deployed our R&D platform with AI-powered recommendations',
      result: 'Increased yields by 18% while reducing input costs by 12%',
      metric: 'Patents Filed: 8 new innovations'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Across the Supply Chain
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data-driven approach delivers measurable improvements in efficiency, 
            profitability, and sustainability for agribusiness partners nationwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{study.title}</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Challenge</h4>
                  <p className="text-gray-700">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Solution</h4>
                  <p className="text-gray-700">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2">Result</h4>
                  <p className="text-gray-700">{study.result}</p>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900">{study.metric}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your agribusiness operations?
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
            Start Your Transformation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
