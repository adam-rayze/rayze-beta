import React from 'react';
import { ArrowUpRight, Upload, Users, Target, BarChart3, Network, Building2, Brain, ClipboardCheck, Vote, Shield, MessageSquare, TrendingUp, Briefcase, CheckCircle2, AlertCircle, FileText } from 'lucide-react';

interface MockupProps {
  type: 'startup' | 'investor' | 'dao';
}

export function FeatureMockups({ type }: MockupProps) {
  const mobileMockups = {
    startup: (
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80"
            alt="TechVision AI logo"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">TechVision AI</h3>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#00BF63] bg-opacity-10 text-[#00BF63]">
              Series A
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700">Funding Goal</h5>
              <div className="text-lg font-semibold text-gray-900">$12M</div>
              <div className="text-xs text-green-600 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>75% Raised</span>
              </div>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700">Team</h5>
              <div className="text-lg font-semibold text-gray-900">28</div>
              <div className="text-xs text-gray-500">Members</div>
            </div>
          </div>

          <div className="p-3 bg-gray-50 rounded-lg">
            <h5 className="text-sm font-medium text-gray-700 mb-2">Overview</h5>
            <p className="text-sm text-gray-600">
              TechVision AI is revolutionizing enterprise decision-making through advanced AI and machine learning solutions. Our platform enables businesses to harness the power of their data for predictive analytics and automated insights.
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors">
            <FileText className="w-4 h-4" />
            <span>View Deck</span>
          </button>
        </div>
      </div>
    ),
    investor: (
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Portfolio</h3>
            <p className="text-xs text-gray-500">Track investments</p>
          </div>
          <button className="px-3 py-1.5 bg-[#00BF63] text-white rounded-lg text-sm">
            New
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">AUM</h4>
            <div className="text-lg font-semibold text-gray-900">$142.5M</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+18.3%</span>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Deals</h4>
            <div className="text-lg font-semibold text-gray-900">45</div>
            <div className="text-xs text-gray-500">Active</div>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { name: 'AI Platform X', stage: 'Due Diligence', amount: '$5M' },
            { name: 'BlockChain Y', stage: 'Term Sheet', amount: '$8M' }
          ].map((deal) => (
            <div key={deal.name} className="p-2 border border-gray-100 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="text-sm font-medium text-gray-900">{deal.name}</h5>
                  <div className="flex items-center gap-1 text-xs">
                    <span className="text-[#00BF63]">{deal.amount}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{deal.stage}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    dao: (
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Governance</h3>
            <p className="text-xs text-gray-500">DAO operations</p>
          </div>
          <button className="px-3 py-1.5 bg-[#00BF63] text-white rounded-lg text-sm">
            New
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Treasury</h4>
            <div className="text-lg font-semibold text-gray-900">$24.5M</div>
            <div className="text-xs text-green-600 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              <span>+12.5%</span>
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700">Proposals</h4>
            <div className="text-lg font-semibold text-gray-900">28</div>
            <div className="text-xs text-gray-500">12 Active</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#00BF63]/10 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-[#00BF63]" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-gray-900">DeFi Investment</h5>
                  <p className="text-xs text-gray-500">2 days left</p>
                </div>
              </div>
              <div className="text-xs font-medium text-green-600">65% Yes</div>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }} />
            </div>
          </div>
        </div>
      </div>
    )
  };

  const desktopMockups = {
    startup: (
      <div className="bg-white p-6 h-[600px] overflow-visible relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=200&q=80"
              alt="TechVision AI logo"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div>
              <h3 className="text-gray-900 text-xl font-semibold">TechVision AI</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00BF63] bg-opacity-10 text-[#00BF63]">
                Series A
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors">
              <FileText className="w-4 h-4" />
              <span>View Deck</span>
            </button>
            <button className="text-gray-400 hover:text-[#00BF63]">
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Overview</h4>
            <p className="text-gray-600">
              TechVision AI is revolutionizing enterprise decision-making through advanced AI and machine learning solutions. Our platform enables businesses to harness the power of their data for predictive analytics and automated insights.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Funding Goal</h5>
              <div className="text-xl font-semibold text-gray-900">$12M</div>
              <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>75% Raised</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Team Size</h5>
              <div className="text-xl font-semibold text-gray-900">28</div>
              <div className="text-sm text-gray-500 mt-1">Members</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700 mb-2">Traction</h5>
              <div className="text-xl font-semibold text-gray-900">150K+</div>
              <div className="text-sm text-gray-500 mt-1">Monthly Users</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Leadership Team</h4>
            <div className="space-y-3">
              {[
                { name: 'Sarah Chen', role: 'CEO & Co-founder', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80' },
                { name: 'Michael Rodriguez', role: 'CTO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80' },
                { name: 'Emily Zhang', role: 'Chief Revenue Officer', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=100&h=100&q=80' }
              ].map((member) => (
                <div key={member.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">{member.name}</h5>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 text-sm text-[#00BF63] hover:text-[#00a857] font-medium">
                    View Profile
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    investor: (
      <div className="bg-white p-6 h-[600px] overflow-visible">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Investment Dashboard</h3>
            <p className="text-sm text-gray-500">Track your portfolio and deal flow</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm">
              New Investment
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">AUM</h4>
            <div className="text-2xl font-semibold text-gray-900">$142.5M</div>
            <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
              <TrendingUp className="w-4 h-4" />
              <span>+18.3%</span>
            </div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Portfolio</h4>
            <div className="text-2xl font-semibold text-gray-900">24</div>
            <div className="text-sm text-gray-500 mt-1">Companies</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Pipeline</h4>
            <div className="text-2xl font-semibold text-gray-900">45</div>
            <div className="text-sm text-gray-500 mt-1">Active Deals</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-gray-900">Active Deals</h4>
              <button className="text-sm text-[#00BF63]">View All</button>
            </div>
            
            <div className="space-y-3">
              {[
                { name: 'AI Platform X', stage: 'Due Diligence', amount: '$5M' },
                { name: 'BlockChain Y', stage: 'Term Sheet', amount: '$8M' },
                { name: 'SaaS Platform Z', stage: 'Initial Review', amount: '$3M' }
              ].map((deal) => (
                <div key={deal.name} className="p-3 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-gray-900">{deal.name}</h5>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00BF63]">{deal.amount}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{deal.stage}</span>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#00BF63]">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-gray-900">Portfolio Overview</h4>
              <select className="text-sm border-none bg-transparent text-gray-500">
                <option>Last 12 Months</option>
                <option>YTD</option>
                <option>All Time</option>
              </select>
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="text-sm font-medium text-gray-700 mb-3">Sector Distribution</h5>
                <div className="flex items-center justify-between text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#571b7e]" />
                      <span className="text-gray-600">AI/ML</span>
                      <span className="text-gray-900 font-medium">45%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#9172ec]" />
                      <span className="text-gray-600">Web3</span>
                      <span className="text-gray-900 font-medium">30%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#e238ec]" />
                      <span className="text-gray-600">SaaS</span>
                      <span className="text-gray-900 font-medium">25%</span>
                    </div>
                  </div>
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#e238ec]"
                        style={{
                          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)',
                          transform: 'rotate(162deg)'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#9172ec]"
                        style={{
                          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)',
                          transform: 'rotate(54deg)'
                        }}
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#571b7e]"
                        style={{
                          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)',
                          transform: 'rotate(-36deg)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h5 className="text-sm font-medium text-gray-700 mb-3">Investment Stages</h5>
                <div className="flex items-center justify-between text-sm pb-2">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#571b7e]" />
                      <span className="text-gray-600">Pre-seed</span>
                      <span className="text-gray-900 font-medium">65%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#9172ec]" />
                      <span className="text-gray-600">Seed</span>
                      <span className="text-gray-900 font-medium">25%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#e238ec]" />
                      <span className="text-gray-600">Series A</span>
                      <span className="text-gray-900 font-medium">10%</span>
                    </div>
                  </div>
                  <div className="relative w-24 h-24">
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#571b7e]" 
                        style={{ 
                          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)',
                          transform: 'rotate(-90deg)'
                        }} 
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#9172ec]" 
                        style={{ 
                          clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)',
                          transform: 'rotate(144deg)'
                        }} 
                      />
                    </div>
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full border-[12px] border-[#e238ec]" 
                        style={{ 
                          clipPath: 'polygon(50% 50%, 50% 0, 70% 0)',
                          transform: 'rotate(234deg)'
                        }} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    dao: (
      <div className="bg-white p-6 h-[600px] overflow-visible">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-gray-900 text-lg font-semibold">Governance Dashboard</h3>
            <p className="text-sm text-gray-500">Manage your DAO operations</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-[#00BF63] text-white rounded-lg text-sm font-medium">
              New Proposal
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Treasury</h4>
              <div className="text-2xl font-semibold text-gray-900">$24.5M</div>
              <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+12.5%</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Members</h4>
              <div className="text-2xl font-semibold text-gray-900">1,250</div>
              <div className="text-sm text-green-600 flex items-center gap-1 mt-1">
                <TrendingUp className="w-4 h-4" />
                <span>+85</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Proposals</h4>
              <div className="text-2xl font-semibold text-gray-900">28</div>
              <div className="text-sm text-gray-500 mt-1">12 Active</div>
            </div>
          </div>

          <div className="space-y-4">
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
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-green-600">65% Yes</span>
                      <span className="text-gray-400 mx-1">/</span>
                      <span className="text-red-600">35% No</span>
                    </div>
                    <button className="text-gray-400 hover:text-[#00BF63]">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
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
                      <Target className="w-4 h-4 text-[#00BF63]" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Protocol Upgrade v2.5</h5>
                      <p className="text-xs text-gray-500">Ends in 5 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-sm">
                      <span className="text-green-600">82% Yes</span>
                      <span className="text-gray-400 mx-1">/</span>
                      <span className="text-red-600">18% No</span>
                    </div>
                    <button className="text-gray-400 hover:text-[#00BF63]">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '82%' }} />
                </div>
              </div>
            </div>

            <h4 className="font-medium text-gray-900 mt-6">Completed Proposals</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Treasury Diversification</h5>
                      <p className="text-xs text-gray-500">Executed 3 days ago</p>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">Passed with 78% Yes</div>
                </div>
              </div>

              <div className="bg-gray-50  rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Governance Parameter Update</h5>
                      <p className="text-xs text-gray-500">Failed 1 week ago</p>
                    </div>
                  </div>
                  <div className="text-sm text-red-600 font-medium">Failed with 45% Yes</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Community Fund Allocation</h5>
                      <p className="text-xs text-gray-500">Executed 2 weeks ago</p>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">Passed with 92% Yes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <>
      <div className="block sm:hidden">
        {mobileMockups[type]}
      </div>
      <div className="hidden sm:block">
        {desktopMockups[type]}
      </div>
    </>
  );
}