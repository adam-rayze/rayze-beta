import React, { useState } from 'react';
import { Instagram, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { NewsletterForm } from './NewsletterForm';
import { ContactPopup } from './ContactPopup';

export function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#201E29] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleNavigation('/startups')}
                className="block text-gray-400 hover:text-[#00BF63]"
              >
                Startups
              </button>
              <button 
                onClick={() => handleNavigation('/investors')}
                className="block text-gray-400 hover:text-[#00BF63]"
              >
                Investors
              </button>
              <button 
                onClick={() => handleNavigation('/daos')}
                className="block text-gray-400 hover:text-[#00BF63]"
              >
                DAOs
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <button 
                onClick={() => setIsContactOpen(true)}
                className="block text-gray-400 hover:text-[#00BF63]"
              >
                Contact
              </button>
              <button className="block text-gray-400 hover:text-[#00BF63]">
                Login
              </button>
              <button className="block text-gray-400 hover:text-[#00BF63]">
                Connect Wallet
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://x.com/rayze_io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00BF63] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/rayze.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00BF63] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/rayze-ventures" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00BF63] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="mb-4 md:mb-0">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 210 74.999997" height="36">
                {/* SVG content */}
              </svg>
            </button>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rayze Ventures, LLC. All rights reserved.
          </div>
        </div>
      </div>

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </footer>
  );
}