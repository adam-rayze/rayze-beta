import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Users, Wallet, ArrowUpRight, Target, Clock } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalForm } from '../components/ProposalForm';

// Sample data - In a real app, this would come from your backend
const projectData = {
  id: 'techvision-ai',
  name: 'TechVision AI',
  logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=128&h=128&q=80',
  description: 'AI-powered developer productivity platform revolutionizing the way teams build software.',
  website: 'https://techvision.ai',
  socials: {
    twitter: '@techvisionai',
    discord: 'techvisionai',
    telegram: '@techvisionai'
  },
  tags: ['AI/ML', 'Developer Tools', 'SaaS', 'Enterprise'],
  stage: 'Series A',
  fundingGoal: 12000000,
  raised: 9000000,
  team: [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80',
      linkedin: 'https://linkedin.com/in/sarahchen'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80',
      linkedin: 'https://linkedin.com/in/michaelrodriguez'
    }
  ],
  milestones: [
    {
      title: 'Beta Launch',
      description: 'Launch beta version to initial test group',
      fundingGoal: '$2.5M',
      deadline: 'March 2025',
      status: 'completed'
    },
    {
      title: 'Enterprise Release',
      description: 'Full enterprise product release with advanced features',
      fundingGoal: '$5M',
      deadline: 'June 2025',
      status: 'active'
    }
  ],
  traction: {
    users: '150K+',
    growth: '+25% MoM',
    revenue: '$500K ARR'
  }
};

export function ProjectPublicView() {
  const { id } = useParams();
  const [isProposalFormOpen, setIsProposalFormOpen] = useState(false);

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

      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Project Header */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-start gap-6">
              <img
                src={projectData.logo}
                alt={projectData.name}
                className="w-24 h-24 rounded-xl"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold mb-2">{projectData.name}</h1>
                    <div className="flex items-center gap-4 text-gray-400">
                      <a
                        href={projectData.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                      <a
                        href={`https://twitter.com/${projectData.socials.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
                      </a>
                      <a
                        href={`https://discord.gg/${projectData.socials.discord}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-discord" />
                      </a>
                      <a
                        href={`https://t.me/${projectData.socials.telegram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        <FontAwesomeIcon icon="fa-brands fa-telegram" />
                      </a>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#00BF63] bg-opacity-10 text-[#00BF63]">
                    {projectData.stage}
                  </span>
                </div>

                <p className="text-gray-300 mt-4">{projectData.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {projectData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#16141D] rounded-full text-sm text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm text-gray-400">Funding Progress</span>
                <span className="text-sm text-[#00BF63]">
                  ${projectData.raised.toLocaleString()} / ${projectData.fundingGoal.toLocaleString()}
                </span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00BF63] rounded-full"
                  style={{ width: `${(projectData.raised / projectData.fundingGoal) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Traction Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Traction</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Monthly Users</div>
                <div className="text-2xl font-bold">{projectData.traction.users}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Growth Rate</div>
                <div className="text-2xl font-bold text-[#00BF63]">{projectData.traction.growth}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Revenue</div>
                <div className="text-2xl font-bold">{projectData.traction.revenue}</div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Team</h2>
            <div className="grid grid-cols-2 gap-4">
              {projectData.team.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#16141D] rounded-lg p-4 hover:border-[#00BF63] border border-transparent transition-colors group"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{member.name}</h3>
                      <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-[#00BF63]" />
                    </div>
                    <p className="text-sm text-[#00BF63]">{member.role}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <h2 className="text-xl font-semibold mb-6">Milestones</h2>
            <div className="space-y-4">
              {projectData.milestones.map((milestone) => (
                <div
                  key={milestone.title}
                  className="bg-[#16141D] rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{milestone.title}</h3>
                    <span className={`text-sm ${
                      milestone.status === 'completed' ? 'text-[#00BF63]' : 'text-yellow-500'
                    }`}>
                      {milestone.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{milestone.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#00BF63]">{milestone.fundingGoal}</span>
                    <span className="text-gray-400">Due {milestone.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Investment Panel */}
        <div className="bg-[#201E29] rounded-xl border border-gray-800 p-6 h-fit sticky top-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Investment Overview</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Stage</span>
                  <span className="font-medium">{projectData.stage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Funding Goal</span>
                  <span className="font-medium">${projectData.fundingGoal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Raised</span>
                  <span className="font-medium">${projectData.raised.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="font-medium mb-2">Current Milestone</h3>
              <div className="bg-[#16141D] rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Enterprise Release</h4>
                  <span className="text-[#00BF63]">$5M</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    <span>Active</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Due June 2025</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsProposalFormOpen(true)}
                className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors"
              >
                Invest Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProposalForm
        projectName={projectData.name}
        milestones={projectData.milestones.map(m => ({
          title: m.title,
          fundingGoal: m.fundingGoal
        }))}
        isOpen={isProposalFormOpen}
        onClose={() => setIsProposalFormOpen(false)}
      />
    </div>
  );
}