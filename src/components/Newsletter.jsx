import React, { useState } from 'react';
import Button from './Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter signup logic here
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="bg-gray-50 rounded-xl p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
      <p className="text-gray-600 mb-6">
        Get the latest insights on agribusiness trends, market analysis, and supply chain innovations.
      </p>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">✅ Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            />
          </div>
          <Button type="submit" variant="primary" size="medium" className="w-full">
            Subscribe to Newsletter
          </Button>
        </form>
      )}
      
      <p className="text-xs text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default Newsletter;
