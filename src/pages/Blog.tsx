import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { blogPostsList } from '../blog-posts';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Get unique categories from blog posts
  const categories = ['All', ...new Set(blogPostsList.map(post => post.category))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPostsList
    : blogPostsList.filter(post => post.category === selectedCategory);

  React.useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Rayze Blog",
      "description": "Stay informed with the latest insights on Web3 investment, DAO governance, and startup funding strategies.",
      "url": "https://rayze.io/blog",
      "publisher": {
        "@type": "Organization",
        "name": "Rayze",
        "logo": {
          "@type": "ImageObject",
          "url": "https://rayze.io/rayze-social.png"
        }
      },
      "blogPost": blogPostsList.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "datePublished": new Date(post.date).toISOString(),
        "image": post.image,
        "url": `https://rayze.io/blog/${post.slug}`,
        "keywords": post.tags.join(',')
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#16141D] text-white pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          <div className="relative">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold mb-4">Rayze Blog</h1>
              <p className="text-xl text-gray-400">
                Insights and updates from the world of Web3 investment
              </p>
            </div>

            {/* Featured Categories */}
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === category
                      ? 'border-[#00BF63] text-[#00BF63]'
                      : 'border-gray-700 text-gray-300 hover:border-[#00BF63] hover:text-[#00BF63]'
                  } text-sm transition-colors`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-[#201E29] backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700">
                  <Link to={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-2 hover:text-[#00BF63] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Tag className="h-4 w-4 text-[#00BF63]" />
                          <span className="text-sm text-[#00BF63]">{post.category}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}