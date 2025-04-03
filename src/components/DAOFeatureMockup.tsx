import React from 'react';
import { ArrowUpRight, Users, Target, BarChart3, Briefcase, CheckCircle2, AlertCircle, Vote, Shield, MessageSquare, Settings, Wallet } from 'lucide-react';

interface DAOFeatureMockupProps {
  type: 'setup' | 'governance' | 'treasury';
}

export default function DAOFeatureMockup({ type }: DAOFeatureMockupProps) {
  const mockups = {
    setup: (
      <div className="p-6 h-[600px] overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">DAO Setup</h3>
            <p className="text-sm text-gray-500">Configure your organization</p>
          </div>
          <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm">
            Preview
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Governance Parameters</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Voting Period</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
                  <option className="text-gray-900">3 days</option>
                  <option className="text-gray-900">5 days</option>
                  <option className="text-gray-900">7 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Quorum</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
                  <option className="text-gray-900">25%</option>
                  <option className="text-gray-900">33%</option>
                  <option className="text-gray-900">51%</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Proposal Threshold</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900"
                    placeholder="1000"
                  />
                  <span className="text-sm text-gray-500">tokens</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Token Economics</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Token Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900"
                  placeholder="DEMO"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Initial Supply</label>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900"
                    placeholder="1000000"
                  />
                  <span className="text-sm text-gray-500">tokens</span>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Distribution</label>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <input type="checkbox" checked readOnly />
                    <span>Community</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <input type="checkbox" checked readOnly />
                    <span>Treasury</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <input type="checkbox" checked readOnly />
                    <span>Team</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-900">
                    <input type="checkbox" />
                    <span>Investors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Advanced Settings</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Voting Delay</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
                  <option className="text-gray-900">1 day</option>
                  <option className="text-gray-900">2 days</option>
                  <option className="text-gray-900">3 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Execution Delay</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-900">
                  <option className="text-gray-900">24 hours</option>
                  <option className="text-gray-900">48 hours</option>
                  <option className="text-gray-900">72 hours</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly />
                  <span className="text-sm text-gray-900">Enable emergency pause</span>
                </div>
                <button className="text-sm text-[#00BF63]">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    governance: (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Governance Dashboard</h3>
            <p className="text-sm text-gray-500">InnovateDAO</p>
          </div>
          <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm">
            New Proposal
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Active Proposals</h4>
            <div className="text-2xl font-semibold text-gray-900">12</div>
            <div className="text-sm text-gray-500 mt-1">4 ending soon</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Members</h4>
            <div className="text-2xl font-semibold text-gray-900">2,580</div>
            <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
              <BarChart3 className="h-4 w-4" />
              <span>+85 this week</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Voting Power</h4>
            <div className="text-2xl font-semibold text-gray-900">89.5%</div>
            <div className="text-sm text-gray-500 mt-1">Participation rate</div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h4 className="font-medium text-gray-900">Active Proposals</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00BF63]/10 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-4 h-4 text-[#00BF63]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">Investment in DeFi Protocol</h5>
                    <p className="text-xs text-gray-500">Ends in 2 days</p>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-green-600">65% Yes</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-red-600">35% No</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00BF63]/10 rounded-lg flex items-center justify-center">
                    <Settings className="w-4 h-4 text-[#00BF63]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900">Protocol Upgrade v2.5</h5>
                    <p className="text-xs text-gray-500">Ends in 5 days</p>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="text-green-600">82% Yes</span>
                  <span className="text-gray-400 mx-1">/</span>
                  <span className="text-red-600">18% No</span>
                </div>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '82%' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-gray-900">Recent Activity</h4>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">Treasury Diversification</h5>
                  <p className="text-xs text-gray-500">Executed 3 days ago</p>
                </div>
                <div className="ml-auto text-sm text-green-600 font-medium">Passed with 78% Yes</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">Parameter Update</h5>
                  <p className="text-xs text-gray-500">Failed 1 week ago</p>
                </div>
                <div className="ml-auto text-sm text-red-600 font-medium">Failed with 45% Yes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    treasury: (
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Treasury Management</h3>
            <p className="text-sm text-gray-500">Real-time analytics</p>
          </div>
          <select className="text-sm border-none bg-transparent text-gray-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>All time</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Total Value</h4>
            <div className="text-2xl font-semibold text-gray-900">$24.5M</div>
            <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
              <BarChart3 className="h-4 w-4" />
              <span>+12.5%</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Investments</h4>
            <div className="text-2xl font-semibold text-gray-900">15</div>
            <div className="text-sm text-gray-500 mt-1">Active positions</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Transactions</h4>
            <div className="text-2xl font-semibold text-gray-900">128</div>
            <div className="text-sm text-gray-500 mt-1">This month</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Asset Allocation</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#571b7e]" />
                  <span className="text-sm text-gray-600">Stablecoins</span>
                </div>
                <span className="text-sm font-medium text-gray-900">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#9172ec]" />
                  <span className="text-sm text-gray-600">Investments</span>
                </div>
                <span className="text-sm font-medium text-gray-900">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#e238ec]" />
                  <span className="text-sm text-gray-600">Operating</span>
                </div>
                <span className="text-sm font-medium text-gray-900">20%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 mb-4">Recent Transactions</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#00BF63]" />
                  <span className="text-sm text-gray-600">Investment in Startup X</span>
                </div>
                <span className="text-sm font-medium text-red-600">-$500K</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4 text-[#00BF63]" />
                  <span className="text-sm text-gray-600">Yield from Pool Y</span>
                </div>
                <span className="text-sm font-medium text-green-600">+$125K</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Treasury Growth</h4>
          <div className="h-48 flex items-end">
            {[35, 45, 38, 52, 48, 65, 58, 75, 68, 85, 78, 95].map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-[#00BF63] mx-0.5 rounded-t"
                style={{ height: `${value}%`, opacity: 0.2 + (index * 0.8) / 12 }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </div>
    )
  };

  return mockups[type];
}