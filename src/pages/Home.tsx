import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RecentInvestments } from '../components/RecentInvestments';

export function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BF63] to-emerald-400 text-transparent bg-clip-text leading-normal py-2">
            Invest in Tomorrow
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Fast-track your growth with seamless access to diverse funding streams, resources, and financial infrastructure 
          </p>
          
          <RecentInvestments />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Startups</h3>
              <p className="text-gray-400 mb-4">
                Launch your startup and unlock growth with expert investors, capital, and a powerful fundraising network.
              </p>
              <Link 
                to="/startups"
                className="inline-flex items-center text-[#00BF63] hover:text-[#00a857]"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">Investors</h3>
              <p className="text-gray-400 mb-4">
                Discover vetted, innovative startups and streamline your investment strategy through our comprehensive platform. 
              </p>
              <Link 
                to="/investors"
                className="inline-flex items-center text-[#00BF63] hover:text-[#00a857]"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold mb-2">DAOs</h3>
              <p className="text-gray-400 mb-4">
                Empower your DAO with seamless, compliant governance and investment infrastructure designed for modern digital collaboration.
              </p>
              <Link 
                to="/daos"
                className="inline-flex items-center text-[#00BF63] hover:text-[#00a857]"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}