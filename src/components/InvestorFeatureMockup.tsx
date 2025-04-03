import React from 'react';
import { ArrowUpRight, Users, Target, BarChart3, Briefcase, CheckCircle2, AlertCircle, Globe, Wallet } from 'lucide-react';

interface InvestorFeatureMockupProps {
  type: 'matching' | 'dashboard';
}

export function InvestorFeatureMockup({ type }: InvestorFeatureMockupProps) {
  const mockups = {
    matching: (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Startup Matches</h3>
            <p className="text-sm text-gray-500">Based on your investment criteria</p>
          </div>
          <select className="text-sm border-none bg-transparent text-gray-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>All time</option>
          </select>
        </div>

        <div className="space-y-4">
          {[
            {
              name: 'TechVision AI',
              logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80',
              match: '95%',
              sector: 'AI/ML',
              stage: 'Series A',
              raise: '$12M',
              traction: '500K+ MAU'
            },
            {
              name: 'BlockChain Solutions',
              logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100&q=80',
              match: '92%',
              sector: 'Web3',
              stage: 'Seed',
              raise: '$5M',
              traction: '100K+ Users'
            },
            {
              name: 'GreenTech Innovations',
              logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=100&h=100&q=80',
              match: '88%',
              sector: 'CleanTech',
              stage: 'Pre-seed',
              raise: '$2M',
              traction: '12 Enterprise Clients'
            }
          ].map((startup) => (
            <div key={startup.name} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={startup.logo}
                    alt={startup.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{startup.name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00BF63] font-medium">{startup.match} match</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{startup.sector}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#00BF63]">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  <span>{startup.stage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Wallet className="h-4 w-4" />
                  <span>{startup.raise}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{startup.traction}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <button className="text-[#00BF63] hover:text-[#00a857] font-medium">
            View All Matches
          </button>
        </div>
      </div>
    ),
    dashboard: (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Investment Dashboard</h3>
            <p className="text-sm text-gray-500">Alpha Ventures</p>
          </div>
          <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm">
            New Investment
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Portfolio Value</h4>
            <div className="text-2xl font-semibold text-gray-900">$142.5M</div>
            <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
              <BarChart3 className="h-4 w-4" />
              <span>+18.3%</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Active Deals</h4>
            <div className="text-2xl font-semibold text-gray-900">45</div>
            <div className="text-sm text-gray-500 mt-1">8 in due diligence</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Pipeline Value</h4>
            <div className="text-2xl font-semibold text-gray-900">$85M</div>
            <div className="text-sm text-gray-500 mt-1">12 opportunities</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-gray-900">Recent Activity</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">Investment Completed</h5>
                  <p className="text-xs text-gray-500">$2M invested in TechVision AI</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">2h ago</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">New Opportunity</h5>
                  <p className="text-xs text-gray-500">BlockChain Solutions matches your criteria</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">5h ago</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">Due Diligence Update</h5>
                  <p className="text-xs text-gray-500">New documents available for review</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">1d ago</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100">
          <button className="text-[#00BF63] hover:text-[#00a857] font-medium text-sm">
            View All Activity
          </button>
        </div>
      </div>
    )
  };

  return mockups[type];
}