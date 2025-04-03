import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bell, Wallet, TrendingUp, ChevronRight, ArrowUpRight, CheckCircle2, AlertCircle, Vote, MessageSquare, BarChart3, Users, ArrowRight } from 'lucide-react';

export function Dashboard() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [hasNewNotifications] = useState(true);

  // Simulated data
  const financialData = {
    totalValue: '$142.5K',
    change: '+18.3%',
    invested: '$85K',
    returns: '$57.5K'
  };

  const notifications = [
    {
      id: 1,
      type: 'message',
      title: 'New Message',
      description: 'John from TechVision AI sent you a message',
      time: '2h ago',
      unread: true
    },
    {
      id: 2,
      type: 'proposal',
      title: 'New DAO Proposal',
      description: 'Vote on treasury allocation for Q2',
      time: '5h ago',
      unread: true
    },
    {
      id: 3,
      type: 'investment',
      title: 'Investment Update',
      description: 'BlockChain Solutions reached milestone',
      time: '1d ago',
      unread: false
    }
  ];

  const daos = [
    {
      id: 'defi-dao',
      name: 'DeFi DAO',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=64&h=64&q=80',
      activity: [
        {
          type: 'success',
          title: 'Treasury Diversification',
          description: 'Proposal passed with 78% votes',
          time: '3d ago'
        },
        {
          type: 'pending',
          title: 'New Investment Proposal',
          description: 'Vote ends in 2 days',
          time: '1d ago'
        }
      ]
    },
    {
      name: 'NFT Collective',
      id: 'nft-collective',
      logo: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&w=64&h=64&q=80',
      activity: [
        {
          type: 'success',
          title: 'New Member Onboarding',
          description: '5 new members joined',
          time: '1d ago'
        }
      ]
    }
  ];

  const investments = [
    {
      name: 'TechVision AI',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=64&h=64&q=80',
      amount: '$50K',
      change: '+12.5%',
      activity: [
        {
          type: 'success',
          title: 'Milestone Reached',
          description: 'Beta launch successful',
          time: '2d ago'
        }
      ]
    },
    {
      name: 'BlockChain Solutions',
      logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=64&h=64&q=80',
      amount: '$35K',
      change: '+8.3%',
      activity: [
        {
          type: 'info',
          title: 'Monthly Update',
          description: 'New features released',
          time: '1d ago'
        }
      ]
    }
  ];

  const trending = [
    {
      name: 'AI Platform X',
      logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=64&h=64&q=80',
      description: 'AI-powered developer productivity platform',
      raise: '$8.5M',
      interest: '85%'
    },
    {
      name: 'DeFi Protocol Y',
      logo: 'https://images.unsplash.com/photo-1642132652075-2b0036099ae9?auto=format&fit=crop&w=64&h=64&q=80',
      description: 'Next-gen decentralized exchange protocol',
      raise: '$12M',
      interest: '92%'
    }
  ];

  const myProjects = [
    {
      id: 'techvision-ai',
      name: 'TechVision AI',
      logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=64&h=64&q=80',
      description: 'AI-powered developer productivity platform',
      stage: 'Series A',
      fundingProgress: 75,
      fundingGoal: '$12M',
      raised: '$9M',
      activity: [
        {
          type: 'success',
          title: 'Milestone Reached',
          description: 'Beta launch successful',
          time: '2d ago'
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Notifications Panel */}
      <AnimatePresence>
        {isNotificationsOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-[#201E29] border-l border-gray-800 p-4 z-50"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <button
                onClick={() => setIsNotificationsOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg ${
                    notification.unread ? 'bg-[#16141D]' : 'bg-[#16141D]/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      notification.type === 'message' ? 'bg-blue-500/10 text-blue-500' :
                      notification.type === 'proposal' ? 'bg-purple-500/10 text-purple-500' :
                      'bg-green-500/10 text-green-500'
                    }`}>
                      {notification.type === 'message' ? <MessageSquare className="h-4 w-4" /> :
                       notification.type === 'proposal' ? <Vote className="h-4 w-4" /> :
                       <BarChart3 className="h-4 w-4" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm">{notification.title}</h3>
                        <span className="text-xs text-gray-400">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{notification.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
          className="relative text-gray-400 hover:text-white"
        >
          <Bell className="h-6 w-6" />
          {hasNewNotifications && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-gray-400">Total Value</h3>
            <Wallet className="h-4 w-4 text-[#00BF63]" />
          </div>
          <div className="text-2xl font-bold">{financialData.totalValue}</div>
          <div className="flex items-center gap-1 text-sm text-[#00BF63]">
            <TrendingUp className="h-4 w-4" />
            <span>{financialData.change}</span>
          </div>
        </div>

        <div className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-gray-400">Total Invested</h3>
            <BarChart3 className="h-4 w-4 text-[#00BF63]" />
          </div>
          <div className="text-2xl font-bold">{financialData.invested}</div>
          <div className="text-sm text-gray-400">Across {investments.length} projects</div>
        </div>

        <div className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-gray-400">Total Returns</h3>
            <TrendingUp className="h-4 w-4 text-[#00BF63]" />
          </div>
          <div className="text-2xl font-bold">{financialData.returns}</div>
          <div className="text-sm text-gray-400">Realized gains</div>
        </div>

        <div className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm text-gray-400">DAOs Joined</h3>
            <Users className="h-4 w-4 text-[#00BF63]" />
          </div>
          <div className="text-2xl font-bold">{daos.length}</div>
          <div className="text-sm text-gray-400">Active memberships</div>
        </div>
      </div>

      {/* My Projects Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">My Projects</h2>
          <Link 
            to="/create-project"
            className="text-[#00BF63] hover:text-[#00a857] text-sm"
          >
            View All
          </Link>
        </div>
        <div className="space-y-4">
          {myProjects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="block bg-[#201E29] p-4 rounded-xl border border-gray-800 hover:border-[#00BF63] transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-14 h-14 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-1">{project.name}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#00BF63]">{project.stage}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-400">{project.raised} raised</span>
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00BF63]" />
              </div>

              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Funding Progress</span>
                  <span className="text-[#00BF63]">{project.fundingProgress}%</span>
                </div>
                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#00BF63] rounded-full"
                    style={{ width: `${project.fundingProgress}%` }}
                  />
                </div>
              </div>

              {project.activity.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-800">
                  {project.activity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'success' ? 'bg-green-500/10' : 'bg-blue-500/10'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <MessageSquare className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{activity.title}</div>
                        <div className="text-sm text-gray-400">{activity.description}</div>
                      </div>
                      <span className="ml-auto text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              )}
            </Link>
          ))}

          {myProjects.length === 0 && (
            <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800 text-center">
              <p className="text-gray-400 mb-4">You haven't created any projects yet</p>
              <Link
                to="/create-project"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
              >
                Create Your First Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* My DAOs and My Investments sections horizontally */}
      <div className="space-y-8">
        {/* My DAOs Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My DAOs</h2>
            <button className="text-[#00BF63] hover:text-[#00a857] text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {daos.map((dao) => (
              <Link
                key={dao.id}
                to={`/dao/${dao.id}`}
                className="block bg-[#201E29] p-4 rounded-xl border border-gray-800 hover:border-[#00BF63] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={dao.logo}
                      alt={dao.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <h3 className="text-lg font-medium">{dao.name}</h3>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00BF63]" />
                </div>
                <div className="space-y-3">
                  {dao.activity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'success' ? 'bg-green-500/10' : 'bg-yellow-500/10'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle2 className={`h-4 w-4 ${
                            activity.type === 'success' ? 'text-green-500' : 'text-yellow-500'
                          }`} />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{activity.title}</div>
                        <div className="text-sm text-gray-400">{activity.description}</div>
                      </div>
                      <span className="ml-auto text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* My Investments Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">My Investments</h2>
            <button className="text-[#00BF63] hover:text-[#00a857] text-sm">View All</button>
          </div>
          <div className="space-y-4">
            {investments.map((investment) => (
              <div key={investment.name} className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={investment.logo}
                      alt={investment.name}
                      className="w-14 h-14 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="text-lg font-medium mb-1">{investment.name}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-[#00BF63]">{investment.amount}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-[#00BF63]">{investment.change}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </button>
                </div>
                <div className="space-y-3">
                  {investment.activity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activity.type === 'success' ? 'bg-green-500/10' : 'bg-blue-500/10'
                      }`}>
                        {activity.type === 'success' ? (
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        ) : (
                          <MessageSquare className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{activity.title}</div>
                        <div className="text-sm text-gray-400">{activity.description}</div>
                      </div>
                      <span className="ml-auto text-xs text-gray-400">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">🔥Trending</h2>
          <button className="text-[#00BF63] hover:text-[#00a857] text-sm">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trending.map((item) => (
            <div key={item.name} className="bg-[#201E29] p-4 rounded-xl border border-gray-800">
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-14 h-14 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-[#00BF63]">{item.raise}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-[#00BF63]">{item.interest} match</span>
                  </div>
                </div>
                <button className="ml-auto text-gray-400 hover:text-white">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}