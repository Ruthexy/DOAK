import React from 'react';
import Button from '../components/Button';

const BlogPreview = () => {
  const blogPosts = [
    {
      title: "The Future of Precision Agriculture: AI-Driven Crop Management",
      excerpt: "Explore how artificial intelligence and machine learning are revolutionizing farming practices, from soil analysis to yield prediction.",
      date: "March 15, 2025",
      category: "Technology",
      readTime: "5 min read",
      image: "/img/blog/precision-agriculture.jpg"
    },
    {
      title: "Global Grain Market Trends: What to Expect in 2024",
      excerpt: "Analysis of current market conditions, price forecasts, and strategic recommendations for grain traders and producers.",
      date: "March 8, 2025",
      category: "Market Analysis",
      readTime: "7 min read",
      image: "/img/blog/grain-market.jpg"
    },
    {
      title: "Sustainable Warehousing: Reducing Post-Harvest Losses",
      excerpt: "Best practices for modern grain storage facilities, including climate control, monitoring systems, and quality preservation techniques.",
      date: "February 28, 2025",
      category: "Operations",
      readTime: "6 min read",
      image: "/img/blog/warehousing.jpg"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Insights & Trends
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with expert analysis, market trends, and innovations 
            shaping the future of agribusiness and food supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-6xl">📰</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Button variant="outline" size="small">
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/blog" variant="primary" size="medium">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
