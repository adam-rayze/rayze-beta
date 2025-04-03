import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Twitter, Linkedin, Facebook } from 'lucide-react';
import { blogPosts } from '../blog-posts';

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  const shareUrl = `https://rayze.io/blog/${slug}`;
  const shareTitle = post?.title;

  const handleShare = (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };

    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  React.useEffect(() => {
    if (post) {
      document.title = post.metaTitle || post.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription || post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...');
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(post.schema);
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }
  }, [post, slug]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#16141D] text-white pt-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          <div className="relative">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00BF63] mb-8"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Blog
            </Link>

            <article>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[400px] object-cover rounded-xl mb-8"
              />

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  {post.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80"
                  alt={post.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-gray-400">{post.authorRole}</div>
                </div>
              </div>

              <div 
                className="prose prose-invert prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="flex flex-wrap gap-2 mb-12">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#201E29] text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-12">
                <span className="text-gray-400">Share:</span>
                <button 
                  onClick={() => handleShare('twitter')}
                  className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleShare('linkedin')}
                  className="text-gray-400 hover:text-[#0077B5] transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button 
                  onClick={() => handleShare('facebook')}
                  className="text-gray-400 hover:text-[#4267B2] transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}