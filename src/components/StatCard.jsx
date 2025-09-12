import React from 'react';

const StatCard = ({ number, label, suffix = '', prefix = '' }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
        {prefix}{number}{suffix}
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </div>
  );
};

export default StatCard;
