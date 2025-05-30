import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ContactPopup } from './ContactPopup';
import { WalletButton } from './WalletButton';

interface HeaderProps {
  onNavClick: (section: string) => void;
}

export function Header({ onNavClick }: HeaderProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePage = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#201E29] border-b border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="150" viewBox="0 0 210 74.999997" height="54" className="max-w-[120px] sm:max-w-full">
                <defs>
                  <clipPath id="header-clip-1">
                    <path d="M 24 5 L 44 5 L 44 26 L 24 26 Z M 24 5 " clipRule="nonzero"/>
                  </clipPath>
                  <clipPath id="header-clip-2">
                    <path d="M 20.285156 15.367188 L 36.730469 -1.082031 L 50.316406 12.5 L 33.867188 28.949219 Z M 20.285156 15.367188 " clipRule="nonzero"/>
                  </clipPath>
                  <clipPath id="header-clip-3">
                    <path d="M 43.492188 5.738281 L 29.066406 6.582031 L 32.886719 10.398438 L 24.101562 19.183594 L 30.050781 25.132812 L 38.835938 16.347656 L 42.652344 20.164062 Z M 43.492188 5.738281 " clipRule="nonzero"/>
                  </clipPath>
                </defs>
                <g clipPath="url(#header-clip-1)">
                  <g clipPath="url(#header-clip-2)">
                    <g clipPath="url(#header-clip-3)">
                      <path fill="#00e577" d="M 20.285156 15.367188 L 36.679688 -1.027344 L 50.261719 12.554688 L 33.867188 28.949219 Z M 20.285156 15.367188 " fillOpacity="1" fillRule="nonzero"/>
                    </g>
                  </g>
                </g>
                <g fill="#fefeff" fillOpacity="1">
                  <g transform="translate(31.55048, 55.973835)">
                    <path d="M 27.140625 0 L 20.21875 -10 L 12.578125 -10 L 12.578125 0 L 4.265625 0 L 4.265625 -35.921875 L 19.8125 -35.921875 C 22.988281 -35.921875 25.75 -35.390625 28.09375 -34.328125 C 30.4375 -33.265625 32.238281 -31.757812 33.5 -29.8125 C 34.769531 -27.863281 35.40625 -25.554688 35.40625 -22.890625 C 35.40625 -20.222656 34.765625 -17.921875 33.484375 -15.984375 C 32.203125 -14.046875 30.378906 -12.566406 28.015625 -11.546875 L 36.078125 0 Z M 26.984375 -22.890625 C 26.984375 -24.898438 26.332031 -26.441406 25.03125 -27.515625 C 23.738281 -28.597656 21.84375 -29.140625 19.34375 -29.140625 L 12.578125 -29.140625 L 12.578125 -16.625 L 19.34375 -16.625 C 21.84375 -16.625 23.738281 -17.171875 25.03125 -18.265625 C 26.332031 -19.359375 26.984375 -20.898438 26.984375 -22.890625 Z M 26.984375 -22.890625 "/>
                  </g>
                </g>
                <g fill="#fefeff" fillOpacity="1">
                  <g transform="translate(67.111469, 55.973835)">
                    <path d="M 14.828125 -28.015625 C 19.109375 -28.015625 22.394531 -26.992188 24.6875 -24.953125 C 26.976562 -22.921875 28.125 -19.851562 28.125 -15.75 L 28.125 0 L 20.625 0 L 20.625 -3.4375 C 19.125 -0.875 16.320312 0.40625 12.21875 0.40625 C 10.09375 0.40625 8.25 0.046875 6.6875 -0.671875 C 5.132812 -1.390625 3.945312 -2.378906 3.125 -3.640625 C 2.3125 -4.910156 1.90625 -6.347656 1.90625 -7.953125 C 1.90625 -10.515625 2.867188 -12.53125 4.796875 -14 C 6.734375 -15.476562 9.71875 -16.21875 13.75 -16.21875 L 20.109375 -16.21875 C 20.109375 -17.957031 19.578125 -19.296875 18.515625 -20.234375 C 17.460938 -21.179688 15.875 -21.65625 13.75 -21.65625 C 12.28125 -21.65625 10.832031 -21.421875 9.40625 -20.953125 C 7.988281 -20.492188 6.785156 -19.875 5.796875 -19.09375 L 2.921875 -24.6875 C 4.429688 -25.738281 6.238281 -26.554688 8.34375 -27.140625 C 10.445312 -27.722656 12.609375 -28.015625 14.828125 -28.015625 Z M 14.21875 -4.984375 C 15.582031 -4.984375 16.796875 -5.296875 17.859375 -5.921875 C 18.921875 -6.554688 19.671875 -7.488281 20.109375 -8.71875 L 20.109375 -11.546875 L 14.625 -11.546875 C 11.34375 -11.546875 9.703125 -10.46875 9.703125 -8.3125 C 9.703125 -7.28125 10.101562 -6.46875 10.90625 -5.875 C 11.707031 -5.28125 12.8125 -4.984375 14.21875 -4.984375 Z M 14.21875 -4.984375 "/>
                  </g>
                </g>
                <g fill="#fefeff" fillOpacity="1">
                  <g transform="translate(96.617321, 55.973835)">
                    <path d="M 31.09375 -27.609375 L 18.625 1.6875 C 17.363281 4.875 15.800781 7.113281 13.9375 8.40625 C 12.070312 9.707031 9.820312 10.359375 7.1875 10.359375 C 5.75 10.359375 4.328125 10.132812 2.921875 9.6875 C 1.523438 9.25 0.378906 8.632812 -0.515625 7.84375 L 2.40625 2.15625 C 3.019531 2.695312 3.726562 3.125 4.53125 3.4375 C 5.34375 3.75 6.140625 3.90625 6.921875 3.90625 C 8.015625 3.90625 8.90625 3.640625 9.59375 3.109375 C 10.28125 2.578125 10.894531 1.695312 11.4375 0.46875 L 11.546875 0.203125 L -0.40625 -27.609375 L 7.84375 -27.609375 L 15.59375 -8.875 L 23.40625 -27.609375 Z M 31.09375 -27.609375 "/>
                  </g>
                </g>
                <g fill="#fefeff" fillOpacity="1">
                  <g transform="translate(125.148198, 55.973835)">
                    <path d="M 26.421875 -6.15625 L 26.421875 0 L 1.796875 0 L 1.796875 -4.828125 L 15.859375 -21.453125 L 2.15625 -21.453125 L 2.15625 -27.609375 L 25.96875 -27.609375 L 25.96875 -22.78125 L 11.90625 -6.15625 Z M 26.421875 -6.15625 "/>
                  </g>
                </g>
                <g fill="#fefeff" fillOpacity="1">
                  <g transform="translate(150.856765, 55.973835)">
                    <path d="M 30.734375 -13.703125 C 30.734375 -13.597656 30.679688 -12.878906 30.578125 -11.546875 L 9.703125 -11.546875 C 10.078125 -9.835938 10.960938 -8.484375 12.359375 -7.484375 C 13.765625 -6.492188 15.507812 -6 17.59375 -6 C 19.03125 -6 20.304688 -6.210938 21.421875 -6.640625 C 22.535156 -7.066406 23.570312 -7.742188 24.53125 -8.671875 L 28.78125 -4.046875 C 26.1875 -1.078125 22.390625 0.40625 17.390625 0.40625 C 14.273438 0.40625 11.519531 -0.195312 9.125 -1.40625 C 6.738281 -2.625 4.894531 -4.3125 3.59375 -6.46875 C 2.289062 -8.625 1.640625 -11.066406 1.640625 -13.796875 C 1.640625 -16.503906 2.28125 -18.941406 3.5625 -21.109375 C 4.84375 -23.285156 6.601562 -24.976562 8.84375 -26.1875 C 11.09375 -27.40625 13.601562 -28.015625 16.375 -28.015625 C 19.070312 -28.015625 21.515625 -27.429688 23.703125 -26.265625 C 25.890625 -25.109375 27.609375 -23.441406 28.859375 -21.265625 C 30.109375 -19.097656 30.734375 -16.578125 30.734375 -13.703125 Z M 16.421875 -21.96875 C 14.609375 -21.96875 13.082031 -21.453125 11.84375 -20.421875 C 10.613281 -19.398438 9.863281 -18 9.59375 -16.21875 L 23.1875 -16.21875 C 22.914062 -17.957031 22.164062 -19.347656 20.9375 -20.390625 C 19.707031 -21.441406 18.203125 -21.96875 16.421875 -21.96875 Z M 16.421875 -21.96875 "/>
                  </g>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link 
              to="/startups" 
              className={`transition-colors ${isActivePage('/startups') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'}`}
            >
              Startups
            </Link>
            <Link 
              to="/investors" 
              className={`transition-colors ${isActivePage('/investors') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'}`}
            >
              Investors
            </Link>
            <Link 
              to="/daos" 
              className={`transition-colors ${isActivePage('/daos') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'}`}
            >
              DAOs
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${isActivePage('/blog') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'}`}
            >
              Blog
            </Link>
            <button 
              onClick={() => setIsContactOpen(true)}
              className="text-white hover:text-[#00BF63]"
            >
              Contact
            </button>
            <WalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-[#201E29] border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <Link 
                to="/startups"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActivePage('/startups') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'
                }`}
              >
                Startups
              </Link>
              <Link 
                to="/investors"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActivePage('/investors') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'
                }`}
              >
                Investors
              </Link>
              <Link 
                to="/daos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActivePage('/daos') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'
                }`}
              >
                DAOs
              </Link>
              <Link 
                to="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left py-2 transition-colors ${
                  isActivePage('/blog') ? 'text-[#00BF63]' : 'text-white hover:text-[#00BF63]'
                }`}
              >
                Blog
              </Link>
              <button 
                onClick={() => {
                  setIsContactOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-white hover:text-[#00BF63] py-2"
              >
                Contact
              </button>
              <div className="py-2">
                <WalletButton />
              </div>
            </div>
          </div>
        )}
      </div>

      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </header>
  );
}