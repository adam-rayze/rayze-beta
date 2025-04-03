import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Wallet, Vote, ArrowUpRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Sample data - In a real app, this would come from your backend
const daoData = {
  id: 'defi-dao',
  name: 'DeFi DAO',
  description: 'DeFi DAO is a decentralized investment fund focused on identifying and supporting promising DeFi protocols and infrastructure projects. Our mission is to accelerate the adoption of decentralized finance through strategic investments and active participation in protocol governance.',
  logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=128&h=128&q=80',
  banner: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&h=400&q=80',
  wallet: '0x1234...5678',
  members: 2500,
  tvl: '$45M',
  activeProposals: 8,
  website: 'https://defidao.io',
  twitter: '@defidao',
  discord: 'defidao',
  telegram: '@defidao',
  tags: ['DeFi', 'Investment', 'Governance'],
  portfolio: [
    {
      name: 'DeFi Protocol X',
      logo: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&w=64&h=64&q=80',
      amount: '$500K',
      status: 'Active',
      return: '+15.5%'
    },
    {
      name: 'NFT Platform Y',
      logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=64&h=64&q=80',
      amount: '$250K',
      status: 'Active',
      return: '+8.3%'
    }
  ]
};

export function DAOPublicView() {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <Link
        to="/explore"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Explore
      </Link>

      {/* Banner & Logo */}
      <div className="relative mb-8">
        <img
          src={daoData.banner}
          alt={`${daoData.name} banner`}
          className="w-full h-48 object-cover rounded-xl"
        />
        <img
          src={daoData.logo}
          alt={`${daoData.name} logo`}
          className="absolute -bottom-8 left-8 w-24 h-24 rounded-xl border-4 border-[#16141D]"
        />
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* DAO Info */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-2">{daoData.name}</h1>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{daoData.members.toLocaleString()} members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="h-4 w-4" />
                    <span>{daoData.wallet}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={daoData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Globe className="h-5 w-5" />
                </a>
                <a
                  href={`https://twitter.com/${daoData.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
                </a>
                <a
                  href={`https://discord.gg/${daoData.discord}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-discord" />
                </a>
                <a
                  href={`https://t.me/${daoData.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <FontAwesomeIcon icon="fa-brands fa-telegram" />
                </a>
              </div>
            </div>

            <p className="text-gray-300 mt-4">{daoData.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {daoData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#16141D] rounded-full text-sm text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Portfolio Companies</h2>
            <div className="space-y-4">
              {daoData.portfolio.map((company) => (
                <div key={company.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium">{company.name}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00BF63]">{company.amount}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{company.status}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[#00BF63]">{company.return}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-6">
          <div className="bg-[#201E29] rounded-xl border border-gray-800 p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Members</span>
                    <span className="font-medium">{daoData.members.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">TVL</span>
                    <span className="font-medium">{daoData.tvl}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Active Proposals</span>
                    <span className="font-medium">{daoData.activeProposals}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-6">
                <button className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors">
                  Request to Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}