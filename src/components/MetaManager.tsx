import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { blogPosts, blogPostsList } from '../blog-posts';

export function MetaManager() {
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      const path = location.pathname;
      let title = document.querySelector('meta[name="title"]')?.getAttribute('content') || '';
      let description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';

      // Blog-specific meta tags
      if (path.startsWith('/blog')) {
        if (path === '/blog') {
          title = 'Rayze Blog - Web3 Investment Insights & Updates';
          description = 'Stay informed with the latest insights on Web3 investment, DAO governance, startup funding strategies, and investment opportunities. Expert analysis and industry updates from Rayze.';
        } else {
          const slug = path.split('/blog/')[1];
          const post = blogPosts[slug];
          
          if (post) {
            title = post.metaTitle || `${post.title} | Rayze Blog`;
            description = post.metaDescription || post.content.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
          }
        }
      } else {
        // Existing page meta tags logic
        switch (path) {
          case '/startups':
            title = document.querySelector('meta[name="title-startups"]')?.getAttribute('content') || '';
            description = document.querySelector('meta[name="description-startups"]')?.getAttribute('content') || '';
            break;
          case '/investors':
            title = document.querySelector('meta[name="title-investors"]')?.getAttribute('content') || '';
            description = document.querySelector('meta[name="description-investors"]')?.getAttribute('content') || '';
            break;
          case '/daos':
            title = document.querySelector('meta[name="title-daos"]')?.getAttribute('content') || '';
            description = document.querySelector('meta[name="description-daos"]')?.getAttribute('content') || '';
            break;
        }
      }

      // Update title and meta tags
      document.title = title;
      
      // Update primary meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }

      // Update OpenGraph meta tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      const ogType = document.querySelector('meta[property="og:type"]');
      const ogUrl = document.querySelector('meta[property="og:url"]');
      
      if (ogTitle) ogTitle.setAttribute('content', title);
      if (ogDescription) ogDescription.setAttribute('content', description);
      if (ogType) ogType.setAttribute('content', path.startsWith('/blog/') ? 'article' : 'website');
      if (ogUrl) ogUrl.setAttribute('content', `https://rayze.io${path}`);

      // Update Twitter meta tags
      const twitterTitle = document.querySelector('meta[name="twitter:title"]');
      const twitterDescription = document.querySelector('meta[name="twitter:description"]');
      
      if (twitterTitle) twitterTitle.setAttribute('content', title);
      if (twitterDescription) twitterDescription.setAttribute('content', description);

      // Add article-specific meta tags for blog posts
      if (path.startsWith('/blog/')) {
        const slug = path.split('/blog/')[1];
        const post = blogPosts[slug];
        
        if (post) {
          // Remove any existing article meta tags
          document.querySelectorAll('meta[property^="article:"]').forEach(el => el.remove());

          // Add article meta tags
          const articleTags = document.createElement('meta');
          articleTags.setAttribute('property', 'article:tag');
          articleTags.setAttribute('content', post.tags.join(','));
          document.head.appendChild(articleTags);

          const articlePublished = document.createElement('meta');
          articlePublished.setAttribute('property', 'article:published_time');
          articlePublished.setAttribute('content', new Date(post.date).toISOString());
          document.head.appendChild(articlePublished);

          const articleAuthor = document.createElement('meta');
          articleAuthor.setAttribute('property', 'article:author');
          articleAuthor.setAttribute('content', post.author);
          document.head.appendChild(articleAuthor);

          const articleSection = document.createElement('meta');
          articleSection.setAttribute('property', 'article:section');
          articleSection.setAttribute('content', post.category);
          document.head.appendChild(articleSection);

          // Add schema.org structured data if available
          const existingSchema = document.querySelector('script[type="application/ld+json"]');
          if (existingSchema) {
            existingSchema.remove();
          }

          if (post.schema) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.text = JSON.stringify(post.schema);
            document.head.appendChild(script);
          }
        }
      }
    };

    updateMetaTags();
  }, [location]);

  return null;
}