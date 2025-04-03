import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Globe, 
  Copy, 
  Users, 
  Wallet,
  Vote,
  Send,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  X,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Sample data - In a real app, this would come from an API
const daoData = {
  id: 'defi-dao',
  name: 'DeFi DAO',
  description: 'DeFi DAO is a decentralized investment fund focused on identifying and supporting promising DeFi protocols and infrastructure projects. Our mission is to accelerate the adoption of decentralized finance through strategic investments and active participation in protocol governance.',
  logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=128&h=128&q=80',
  banner: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&h=400&q=80',
  wallet: '0x1234...5678',
  members: 2500,
  tvl: '$45M',
  investmentsYTD: '$12M',
  returnsYTD: '+18.5%',
  website: 'https://defidao.io',
  twitter: '@defidao',
  discord: 'defidao',
  telegram: '@defidao',
  tvlData: [
    { date: '2024-02-01', value: 40 },
    { date: '2024-02-08', value: 42 },
    { date: '2024-02-15', value: 45 },
    { date: '2024-02-22', value: 43 },
    { date: '2024-02-29', value: 45 }
  ],
  recentActivity: [
    {
      type: 'proposal',
      title: 'New Investment Proposal',
      description: 'Proposal to invest in DeFi Protocol X',
      time: '2h ago'
    },
    {
      type: 'member',
      title: 'New Member',
      description: 'Alice.eth joined the DAO',
      time: '5h ago'
    }
  ],
  activeProposals: [
    {
      id: 1,
      title: 'Treasury Diversification',
      description: 'Proposal to diversify treasury holdings into stablecoins',
      summary: 'This proposal aims to enhance the stability of our treasury by diversifying a portion of our holdings into various stablecoins, reducing exposure to market volatility while maintaining liquidity for future investments.',
      votes: { yes: 65, no: 35 },
      timeRemaining: '2d 5h',
      status: 'active',
      milestones: [
        {
          title: 'Initial Conversion',
          description: 'Convert 30% of ETH holdings to USDC',
          amount: '$2.5M',
          deadline: 'March 15, 2025'
        },
        {
          title: 'Secondary Conversion',
          description: 'Convert 20% of remaining ETH to DAI',
          amount: '$1.8M',
          deadline: 'March 30, 2025'
        }
      ],
      discussion: [
        {
          author: 'Alice.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63',
          content: 'I support this proposal. Having a balanced treasury is crucial for long-term stability.',
          time: '1d ago'
        },
        {
          author: 'Bob.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63',
          content: 'Agree with the general direction, but we might want to consider a more gradual approach.',
          time: '12h ago'
        }
      ]
    },
    {
      id: 2,
      title: 'New Investment',
      description: 'Invest $500K in Protocol Y',
      summary: 'Protocol Y has demonstrated strong growth potential in the DeFi space. This investment would give us a strategic position in their governance and potential returns from token appreciation.',
      votes: { yes: 78, no: 22 },
      timeRemaining: '1d 12h',
      status: 'active',
      milestones: [
        {
          title: 'Initial Investment',
          description: 'Purchase Protocol Y tokens',
          amount: '$300K',
          deadline: 'March 20, 2025'
        },
        {
          title: 'Follow-up Investment',
          description: 'Additional token purchase based on performance',
          amount: '$200K',
          deadline: 'April 15, 2025'
        }
      ],
      discussion: [
        {
          author: 'Carol.eth',
          avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Carol&backgroundColor=00bf63',
          content: 'The team behind Protocol Y has a strong track record. This could be a great opportunity.',
          time: '2d ago'
        }
      ]
    }
  ],
  messages: [
    {
      id: 1,
      author: 'Alice.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63',
      content: 'What are your thoughts on the new proposal?',
      time: '2h ago'
    },
    {
      id: 2,
      author: 'Bob.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63',
      content: 'I think it\'s a good opportunity for the DAO',
      time: '1h ago'
    }
  ]
};

const members = [
  {
    name: 'Alice.eth',
    role: 'Core Member',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63',
    joinDate: 'Jan 2024'
  },
  {
    name: 'Bob.eth',
    role: 'Contributor',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63',
    joinDate: 'Feb 2024'
  },
  {
    name: 'Carol.eth',
    role: 'Core Member',
    avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Carol&backgroundColor=00bf63',
    joinDate: 'Dec 2023'
  }
];

const portfolio = [
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
];

export function DAODetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [timeframe, setTimeframe] = useState('7d');
  const [message, setMessage] = useState('');
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<typeof daoData.activeProposals[0] | null>(null);
  const [proposalMessage, setProposalMessage] = useState('');

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(daoData.wallet);
    // You could add a toast notification here
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Here you would handle sending the message
    // For now, we'll just clear the input
    setMessage('');
  };

  const handleSendProposalMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proposalMessage.trim()) return;
    
    // Here you would handle sending the proposal message
    // For now, we'll just clear the input
    setProposalMessage('');
  };

  const handleVote = (vote: 'yes' | 'no') => {
    // Here you would handle the voting logic
    console.log(`Voted ${vote} on proposal ${selectedProposal?.id}`);
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <Link
        to="/dashboard"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Dashboard
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

      {/* Header Info */}
      <div className="flex items-start justify-between mt-12 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">{daoData.name}</h1>
          <p className="text-gray-400 mb-4 max-w-2xl">{daoData.description}</p>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{daoData.members.toLocaleString()} members</span>
            </div>
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span>{daoData.wallet}</span>
              <button 
                onClick={handleCopyAddress}
                className="hover:text-white"
              >
                <Copy className="h-4 w-4" />
              </button>
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

      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Treasury Overview */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="grid grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Balance</div>
                <div className="text-2xl font-bold">{daoData.tvl}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Investments YTD</div>
                <div className="text-2xl font-bold">{daoData.investmentsYTD}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Returns YTD</div>
                <div className="text-2xl font-bold text-[#00BF63]">{daoData.returnsYTD}</div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Treasury Overview</h2>
              <select
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                className="bg-[#16141D] border border-gray-700 rounded-lg px-3 py-1 text-sm text-gray-400"
              >
                <option value="7d">7 days</option>
                <option value="30d">30 days</option>
                <option value="all">All time</option>
              </select>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={daoData.tvlData}>
                  <XAxis 
                    dataKey="date" 
                    stroke="#4B5563"
                    tickFormatter={(value) => new Date(value).toLocaleDateString()}
                  />
                  <YAxis stroke="#4B5563" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#201E29',
                      border: '1px solid #374151',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00BF63" 
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {daoData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activity.type === 'proposal' ? 'bg-purple-500/10' : 'bg-blue-500/10'
                  }`}>
                    {activity.type === 'proposal' ? (
                      <Vote className={`h-5 w-5 text-purple-500`} />
                    ) : (
                      <Users className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{activity.title}</h3>
                      <span className="text-sm text-gray-400">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-400">{activity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Proposals */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Active Proposals</h2>
            <div className="space-y-4">
              {daoData.activeProposals.map((proposal) => (
                <div 
                  key={proposal.id}
                  onClick={() => setSelectedProposal(proposal)}
                  className="p-4 bg-[#16141D] rounded-lg hover:border-[#00BF63] border border-gray-800 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{proposal.title}</h3>
                    <span className="text-sm text-gray-400">{proposal.timeRemaining} left</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{proposal.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="text-green-500">{proposal.votes.yes}% Yes</span>
                        <span className="text-gray-400 mx-2">/</span>
                        <span className="text-red-500">{proposal.votes.no}% No</span>
                      </div>
                      <span className="text-[#00BF63]">View Details</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${proposal.votes.yes}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="bg-[#201E29] rounded-xl border border-gray-800 h-[800px] flex flex-col">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">DAO Discussion</h2>
              <button
                onClick={() => setIsChatExpanded(!isChatExpanded)}
                className="text-gray-400 hover:text-white"
              >
                <MessageSquare className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {daoData.messages.map((message) => (
              <div key={message.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={message.avatar}
                      alt={message.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-medium">{message.author}</span>
                  </div>
                  <span className="text-sm text-gray-400">{message.time}</span>
                </div>
                <p className="text-gray-300">{message.content}</p>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-800">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63]"
              />
              <button
                type="submit"
                className="p-2 text-[#00BF63] hover:text-[#00a857] disabled:text-gray-500"
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Members */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Members</h2>
          <div className="bg-[#201E29] rounded-xl border border-gray-800 p-6">
            <div className="space-y-4">
              {members.map((member) => (
                <div key={member.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <span className="text-sm text-[#00BF63]">{member.role}</span>
                    </div>
                  </div>
                  <span className="text-sm text-gray-400">Joined {member.joinDate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Companies */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-6">Portfolio Companies</h2>
          <div className="bg-[#201E29] rounded-xl border border-gray-800 p-6">
            <div className="space-y-4">
              {portfolio.map((company) => (
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
      </div>

      {/* Proposal Portal */}
      {selectedProposal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-end z-50 pt-16">
          <div className="w-full max-w-2xl bg-[#201E29] h-full overflow-y-auto">
            <div className="sticky top-0 bg-[#201E29] border-b border-gray-800 p-6 z-10">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{selectedProposal.title}</h2>
                <button
                  onClick={() => setSelectedProposal(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleVote('yes')}
                    className="flex items-center gap-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Vote Yes
                  </button>
                  <button
                    onClick={() => handleVote('no')}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    Vote No
                  </button>
                </div>
                <span className="text-gray-400">{selectedProposal.timeRemaining} left</span>
              </div>
            </div>

            <div className="p-6 space-y-8">
              {/* Summary */}
              <div>
                <h3 className="text-lg font-medium mb-3">Summary</h3>
                <p className="text-gray-400">{selectedProposal.summary}</p>
              </div>

              {/* Milestones */}
              <div>
                <h3 className="text-lg font-medium mb-4">Milestones</h3>
                <div className="space-y-4">
                  {selectedProposal.milestones.map((milestone, index) => (
                    <div key={index} className="bg-[#16141D] p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{milestone.title}</h4>
                        <span className="text-[#00BF63]">{milestone.amount}</span>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{milestone.description}</p>
                      <div className="text-sm text-gray-500">Deadline: {milestone.deadline}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Discussion */}
              <div>
                <h3 className="text-lg font-medium mb-4">Discussion</h3>
                <div className="space-y-4 mb-4">
                  {selectedProposal.discussion.map((message, index) => (
                    <div key={index} className="bg-[#16141D] p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <img
                            src={message.avatar}
                            alt={message.author}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="font-medium">{message.author}</span>
                        </div>
                        <span className="text-sm text-gray-400">{message.time}</span>
                      </div>
                      <p className="text-gray-300">{message.content}</p>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendProposalMessage} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={proposalMessage}
                    onChange={(e) => setProposalMessage(e.target.value)}
                    placeholder="Add to the discussion..."
                    className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63]"
                  />
                  <button
                    type="submit"
                    className="p-2 text-[#00BF63] hover:text-[#00a857] disabled:text-gray-500"
                    disabled={!proposalMessage.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}