import React from 'react';

const Testimonial = ({ quote, author, role, company, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-6">
        {image ? (
          <img 
            src={image} 
            alt={author}
            className="w-16 h-16 rounded-full object-cover mr-4"
            loading="lazy"
          />
        ) : (
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-red-600 font-bold text-xl">{author.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="font-bold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
          <p className="text-gray-500 text-sm">{company}</p>
        </div>
      </div>
      
      <blockquote className="text-gray-700 italic font-serif text-lg leading-relaxed">
        "{quote}"
      </blockquote>
    </div>
  );
};

export default Testimonial;
