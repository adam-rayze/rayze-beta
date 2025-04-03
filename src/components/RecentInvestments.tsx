import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const recentInvestments = [
  {
    name: 'DeFi Protocol X',
    logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$12M',
    description: 'Next-gen decentralized exchange protocol',
    investors: ['Alpha Fund', 'Beta Ventures']
  },
  {
    name: 'AI Platform Y',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$8.5M',
    description: 'AI-powered developer productivity platform',
    investors: ['Tech Ventures', 'Innovation DAO']
  },
  {
    name: 'Web3 Gaming Z',
    logo: 'https://images.unsplash.com/photo-1642132652075-2b0036099ae9?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$15M',
    description: 'Blockchain gaming infrastructure',
    investors: ['GameFi Fund', 'Meta Ventures']
  }
];

export function RecentInvestments() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-6">Investments This Week</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recentInvestments.map((investment) => (
          <div key={investment.name} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src={investment.logo}
                  alt={`${investment.name} logo`}
                  className="w-12 h-12 rounded-xl"
                />
                <div>
                  <h3 className="font-medium">{investment.name}</h3>
                  <p className="text-[#00BF63] font-semibold">{investment.amount}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-[#00BF63]">
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </div>
            <p className="text-gray-400 text-sm mb-4">{investment.description}</p>
            <div className="text-xs text-gray-500">
              {investment.investors.join(' • ')}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}