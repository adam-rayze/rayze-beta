import React from 'react';
import { ArrowUpRight, Users, Target, BarChart3, Briefcase, CheckCircle2, AlertCircle } from 'lucide-react';

interface StartupFeatureMockupProps {
  type: 'matching' | 'dashboard';
}

export function StartupFeatureMockup({ type }: StartupFeatureMockupProps) {
  const mockups = {
    matching: (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Investor Matches</h3>
            <p className="text-sm text-gray-500">Based on your startup profile</p>
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
              name: 'Alpha Ventures',
              logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80',
              match: '95%',
              focus: 'AI/ML, SaaS',
              portfolio: 45,
              range: '$500K - $2M'
            },
            {
              name: 'Tech Pioneers DAO',
              logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=100&h=100&q=80',
              match: '92%',
              focus: 'Web3, DeFi',
              portfolio: 28,
              range: '$1M - $5M'
            },
            {
              name: 'Growth Fund',
              logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=100&h=100&q=80',
              match: '88%',
              focus: 'Enterprise Tech',
              portfolio: 62,
              range: '$2M - $10M'
            }
          ].map((investor) => (
            <div key={investor.name} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={investor.logo}
                    alt={investor.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{investor.name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00BF63] font-medium">{investor.match} match</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500">{investor.focus}</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-[#00BF63]">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{investor.portfolio} companies</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  <span>{investor.range}</span>
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
            <h3 className="text-gray-900 text-lg font-semibold">Startup Dashboard</h3>
            <p className="text-sm text-gray-500">TechVision AI</p>
          </div>
          <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm">
            Update Profile
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Investability Score</h4>
            <div className="text-2xl font-semibold text-gray-900">85/100</div>
            <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
              <BarChart3 className="h-4 w-4" />
              <span>+12 pts</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Investor Views</h4>
            <div className="text-2xl font-semibold text-gray-900">324</div>
            <div className="text-sm text-gray-500 mt-1">Last 30 days</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Active Discussions</h4>
            <div className="text-2xl font-semibold text-gray-900">8</div>
            <div className="text-sm text-gray-500 mt-1">3 new this week</div>
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
                  <h5 className="text-sm font-medium text-gray-900">Due Diligence Completed</h5>
                  <p className="text-xs text-gray-500">Alpha Ventures completed review</p>
                </div>
                <span className="ml-auto text-xs text-gray-500">2h ago</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">New Investor Interest</h5>
                  <p className="text-xs text-gray-500">Tech Pioneers DAO viewed your profile</p>
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
                  <h5 className="text-sm font-medium text-gray-900">Document Update Required</h5>
                  <p className="text-xs text-gray-500">Financial projections need updating</p>
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