import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Globe, Copy, Users, Wallet, Edit2, X, Upload, Send, Plus, Image } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProposalForm } from '../components/ProposalForm';
import { AddMemberForm } from '../components/AddMemberForm';
import { AddMilestoneForm } from '../components/AddMilestoneForm';

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
  fundingGoal: 12000000,
  raised: 9000000,
  team: [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-founder',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80'
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
  files: [
    {
      name: 'Pitch Deck',
      type: 'pdf',
      size: '2.5 MB',
      uploadedAt: '2024-02-15'
    },
    {
      name: 'Financial Model',
      type: 'xlsx',
      size: '1.8 MB',
      uploadedAt: '2024-02-10'
    }
  ],
  discussion: [
    {
      author: 'Alice.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Alice&backgroundColor=00bf63',
      message: 'Impressive progress on the beta launch!',
      timestamp: '2h ago'
    },
    {
      author: 'Bob.eth',
      avatar: 'https://api.dicebear.com/7.x/shapes/svg?seed=Bob&backgroundColor=00bf63',
      message: 'Looking forward to the enterprise release',
      timestamp: '5h ago'
    }
  ]
};

export function ProjectDetail() {
  const { id } = useParams();
  const [isProposalFormOpen, setIsProposalFormOpen] = useState(false);
  const [isAddMemberOpen, setIsAddMemberOpen] = useState(false);
  const [isAddMilestoneOpen, setIsAddMilestoneOpen] = useState(false);
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    name: projectData.name,
    description: projectData.description,
    website: projectData.website,
    socials: { ...projectData.socials },
    tags: [...projectData.tags]
  });
  const [newTag, setNewTag] = useState('');

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditData({
      name: projectData.name,
      description: projectData.description,
      website: projectData.website,
      socials: { ...projectData.socials },
      tags: [...projectData.tags]
    });
  };

  const handleSaveEdit = () => {
    // Here you would update the project data
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle logo upload
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTag.trim()) {
      e.preventDefault();
      if (!editData.tags.includes(newTag.trim())) {
        setEditData(prev => ({
          ...prev,
          tags: [...prev.tags, newTag.trim()]
        }));
      }
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setEditData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage('');
  };

  const handleAddMember = (member: { name: string; position: string; walletAddress: string }) => {
    // Here you would handle adding the member to your backend
    console.log('Adding member:', member);
  };

  const handleAddMilestone = (milestone: { title: string; description: string; fundingGoal: string; deadline: string }) => {
    // Here you would handle adding the milestone to your backend
    console.log('Adding milestone:', milestone);
  };

  const SocialIcon = ({ platform, username }: { platform: string; username: string }) => {
    const icons = {
      twitter: <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" className="h-5 w-5" />,
      discord: <FontAwesomeIcon icon="fa-brands fa-discord" className="h-5 w-5" />,
      telegram: <FontAwesomeIcon icon="fa-brands fa-telegram" className="h-5 w-5" />
    };

    const getUrl = () => {
      switch (platform) {
        case 'twitter':
          return `https://twitter.com/${username.replace('@', '')}`;
        case 'discord':
          return `https://discord.gg/${username}`;
        case 'telegram':
          return `https://t.me/${username.replace('@', '')}`;
        default:
          return '#';
      }
    };

    return (
      <a
        href={getUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors"
      >
        {icons[platform as keyof typeof icons]}
      </a>
    );
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

      <div className="grid grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-8">
          {/* Project Header */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-start gap-6">
              <div className="relative group">
                <img
                  src={projectData.logo}
                  alt={projectData.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <label className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                  <Image className="h-6 w-6 text-white" />
                </label>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    {isEditing ? (
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData(prev => ({ ...prev, name: e.target.value }))}
                        className="text-2xl font-bold bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] mb-2"
                      />
                    ) : (
                      <h2 className="text-2xl font-bold mb-2">{projectData.name}</h2>
                    )}
                    <div className="flex items-center gap-4 text-gray-400">
                      {isEditing ? (
                        <>
                          <input
                            type="text"
                            value={editData.website}
                            onChange={(e) => setEditData(prev => ({ ...prev, website: e.target.value }))}
                            className="bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                            placeholder="Website URL"
                          />
                        </>
                      ) : (
                        <>
                          <a
                            href={projectData.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white"
                          >
                            <Globe className="h-5 w-5" />
                          </a>
                          <div className="flex items-center gap-4">
                            <SocialIcon platform="twitter" username={projectData.socials.twitter} />
                            <SocialIcon platform="discord" username={projectData.socials.discord} />
                            <SocialIcon platform="telegram" username={projectData.socials.telegram} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={isEditing ? handleSaveEdit : handleStartEdit}
                    className="text-gray-400 hover:text-white"
                  >
                    <Edit2 className="h-5 w-5" />
                  </button>
                </div>

                {isEditing ? (
                  <div className="mt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description
                      </label>
                      <textarea
                        value={editData.description}
                        onChange={(e) => setEditData(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-24 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Social Links
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <SocialIcon platform="twitter" username="" />
                          <input
                            type="text"
                            value={editData.socials.twitter}
                            onChange={(e) => setEditData(prev => ({
                              ...prev,
                              socials: { ...prev.socials, twitter: e.target.value }
                            }))}
                            className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                            placeholder="Twitter handle"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <SocialIcon platform="discord" username="" />
                          <input
                            type="text"
                            value={editData.socials.discord}
                            onChange={(e) => setEditData(prev => ({
                              ...prev,
                              socials: { ...prev.socials, discord: e.target.value }
                            }))}
                            className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                            placeholder="Discord server"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <SocialIcon platform="telegram" username="" />
                          <input
                            type="text"
                            value={editData.socials.telegram}
                            onChange={(e) => setEditData(prev => ({
                              ...prev,
                              socials: { ...prev.socials, telegram: e.target.value }
                            }))}
                            className="flex-1 bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                            placeholder="Telegram group"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4">
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 text-gray-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-300 mt-4">{projectData.description}</p>
                )}

                {/* Tags */}
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {(isEditing ? editData.tags : projectData.tags).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-[#00BF63]/10 text-[#00BF63] rounded-full text-sm group"
                      >
                        {tag}
                        {isEditing && (
                          <button
                            onClick={() => handleRemoveTag(tag)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </span>
                    ))}
                    {isEditing && (
                      <div className="relative">
                        <input
                          type="text"
                          value={newTag}
                          onChange={(e) => setNewTag(e.target.value)}
                          onKeyDown={handleAddTag}
                          placeholder="Add tag"
                          className="bg-[#16141D] border border-gray-700 rounded-full px-3 py-1 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63] w-24"
                        />
                        <Plus className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    )}
                  </div>
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

          {/* Proposals Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Active Proposals</h2>
                <p className="text-sm text-gray-400">Current investment opportunities</p>
              </div>
              <button
                onClick={() => setIsProposalFormOpen(true)}
                className="px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
              >
                Create Proposal
              </button>
            </div>

            <div className="space-y-4">
              {/* Example proposals - in a real app, this would come from your backend */}
              <div className="bg-[#16141D] rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Series A Investment</h3>
                  <span className="text-[#00BF63]">$5M</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                  Strategic investment to accelerate global expansion and product development
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">2 days remaining</span>
                  <button className="text-[#00BF63] hover:text-[#00a857]">View Details</button>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Team</h2>
              <button 
                onClick={() => setIsAddMemberOpen(true)}
                className="text-[#00BF63] hover:text-[#00a857]"
              >
                Add Member
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectData.team.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 bg-[#16141D] rounded-lg p-4"
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-[#00BF63]">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Milestones Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Milestones</h2>
              <button 
                onClick={() => setIsAddMilestoneOpen(true)}
                className="text-[#00BF63] hover:text-[#00a857]"
              >
                Add Milestone
              </button>
            </div>
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

          {/* Files Section */}
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Files</h2>
              <button className="text-[#00BF63] hover:text-[#00a857]">Upload File</button>
            </div>
            <div className="space-y-4">
              {projectData.files.map((file) => (
                <div
                  key={file.name}
                  className="flex items-center justify-between bg-[#16141D] rounded-lg p-4"
                >
                  <div className="flex items-center gap-4">
                    <Upload className="h-5 w-5 text-gray-400" />
                    <div>
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-gray-400">
                        {file.size} • Uploaded {new Date(file.uploadedAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button className="text-[#00BF63] hover:text-[#00a857]">Download</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="bg-[#201E29] rounded-xl border border-gray-800 h-[800px] flex flex-col sticky top-8">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Project Discussion</h2>
              <button
                onClick={() => setIsChatExpanded(!isChatExpanded)}
                className="text-gray-400 hover:text-white"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {projectData.discussion.map((message, index) => (
              <div key={index} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={message.avatar}
                      alt={message.author}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="font-medium">{message.author}</span>
                  </div>
                  <span className="text-sm text-gray-400">{message.timestamp}</span>
                </div>
                <p className="text-gray-300">{message.message}</p>
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
      </div>

      <AddMemberForm
        isOpen={isAddMemberOpen}
        onClose={() => setIsAddMemberOpen(false)}
        onSubmit={handleAddMember}
      />

      <AddMilestoneForm
        isOpen={isAddMilestoneOpen}
        onClose={() => setIsAddMilestoneOpen(false)}
        onSubmit={handleAddMilestone}
      />

      <ProposalForm
        projectName={projectData.name}
        milestones={projectData.milestones.map(m => ({
          title: m.title,
          fundingGoal: m.fundingGoal
        }))}
        isOpen={isProposalFormOpen}
        onClose={() => setIsProposalFormOpen(false)}
        isMemberView={true}
      />
    </div>
  );
}