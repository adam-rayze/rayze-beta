import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, X, Upload, ArrowRight, ArrowLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface TeamMember {
  name: string;
  walletAddress: string;
  role: string;
}

interface Milestone {
  title: string;
  description: string;
  fundingGoal: number;
  deadline: string;
}

interface ProjectFormData {
  name: string;
  logo: string;
  walletAddress: string;
  website: string;
  description: string;
  tags: string[];
  team: TeamMember[];
  milestones: Milestone[];
  files: {
    pitchDeck?: File;
    financials?: File;
    whitepaper?: File;
  };
  socials: {
    twitter: string;
    discord: string;
    telegram: string;
  };
}

const initialFormData: ProjectFormData = {
  name: '',
  logo: '',
  walletAddress: '',
  website: '',
  description: '',
  tags: [],
  team: [],
  milestones: [],
  files: {},
  socials: {
    twitter: '',
    discord: '',
    telegram: ''
  }
};

export function CreateProject() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [tagInput, setTagInput] = useState('');
  const [showAddMember, setShowAddMember] = useState(false);
  const [showAddMilestone, setShowAddMilestone] = useState(false);
  const [newMember, setNewMember] = useState<TeamMember>({
    name: '',
    walletAddress: '',
    role: ''
  });
  const [newMilestone, setNewMilestone] = useState<Milestone>({
    title: '',
    description: '',
    fundingGoal: 0,
    deadline: ''
  });

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData(prev => ({
          ...prev,
          tags: [...prev.tags, tagInput.trim()]
        }));
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.walletAddress && newMember.role) {
      setFormData(prev => ({
        ...prev,
        team: [...prev.team, newMember]
      }));
      setNewMember({
        name: '',
        walletAddress: '',
        role: ''
      });
      setShowAddMember(false);
    }
  };

  const handleRemoveMember = (index: number) => {
    setFormData(prev => ({
      ...prev,
      team: prev.team.filter((_, i) => i !== index)
    }));
  };

  const handleAddMilestone = () => {
    if (newMilestone.title && newMilestone.description && newMilestone.fundingGoal) {
      setFormData(prev => ({
        ...prev,
        milestones: [...prev.milestones, newMilestone]
      }));
      setNewMilestone({
        title: '',
        description: '',
        fundingGoal: 0,
        deadline: ''
      });
      setShowAddMilestone(false);
    }
  };

  const handleRemoveMilestone = (index: number) => {
    setFormData(prev => ({
      ...prev,
      milestones: prev.milestones.filter((_, i) => i !== index)
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleCreate = () => {
    // Here you would handle the actual project creation
    // For now, we'll just navigate to a simulated project view
    navigate('/project/new-project');
  };

  const BasicInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
          placeholder="Enter project name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Logo
        </label>
        <div className="bg-[#201E29] border border-gray-700 border-dashed rounded-lg p-4 text-center">
          <div className="flex items-center justify-center">
            <Image className="h-8 w-8 text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Drag and drop or click to upload
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Wallet Address
        </label>
        <input
          type="text"
          value={formData.walletAddress}
          onChange={(e) => setFormData(prev => ({ ...prev, walletAddress: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
          placeholder="Enter wallet address"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Website
        </label>
        <input
          type="url"
          value={formData.website}
          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
          placeholder="https://"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-32 resize-none"
          placeholder="Describe your project"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tags
        </label>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleTagKeyDown}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] mb-2"
          placeholder="Add tags (press Enter)"
        />
        <div className="flex flex-wrap gap-2">
          {formData.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#00BF63]/10 text-[#00BF63] rounded-full text-sm"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-white"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-300">
          Social Links
        </label>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" className="text-gray-400" />
            <input
              type="text"
              value={formData.socials.twitter}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socials: { ...prev.socials, twitter: e.target.value }
              }))}
              className="flex-1 bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Twitter handle"
            />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon="fa-brands fa-discord" className="text-gray-400" />
            <input
              type="text"
              value={formData.socials.discord}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socials: { ...prev.socials, discord: e.target.value }
              }))}
              className="flex-1 bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Discord server"
            />
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon="fa-brands fa-telegram" className="text-gray-400" />
            <input
              type="text"
              value={formData.socials.telegram}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socials: { ...prev.socials, telegram: e.target.value }
              }))}
              className="flex-1 bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Telegram group"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const TeamAndMilestones = () => (
    <div className="space-y-8">
      {/* Team Members */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Team Members</h3>
          <button
            onClick={() => setShowAddMember(true)}
            className="text-[#00BF63] hover:text-[#00a857]"
          >
            Add Member
          </button>
        </div>

        {showAddMember && (
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700 mb-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={newMember.name}
                  onChange={(e) => setNewMember(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={newMember.walletAddress}
                  onChange={(e) => setNewMember(prev => ({ ...prev, walletAddress: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Role
                </label>
                <input
                  type="text"
                  value={newMember.role}
                  onChange={(e) => setNewMember(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowAddMember(false)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMember}
                  className="px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857]"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {formData.team.map((member, index) => (
            <div
              key={index}
              className="bg-[#201E29] rounded-xl p-4 border border-gray-700 flex items-center justify-between"
            >
              <div>
                <h4 className="font-medium">{member.name}</h4>
                <div className="text-sm text-gray-400">
                  {member.role} • {member.walletAddress}
                </div>
              </div>
              <button
                onClick={() => handleRemoveMember(index)}
                className="text-gray-400 hover:text-red-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Milestones */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Milestones</h3>
          <button
            onClick={() => setShowAddMilestone(true)}
            className="text-[#00BF63] hover:text-[#00a857]"
          >
            Add Milestone
          </button>
        </div>

        {showAddMilestone && (
          <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700 mb-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={newMilestone.title}
                  onChange={(e) => setNewMilestone(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  value={newMilestone.description}
                  onChange={(e) => setNewMilestone(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-24 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Funding Goal (USDC)
                </label>
                <input
                  type="number"
                  value={newMilestone.fundingGoal}
                  onChange={(e) => setNewMilestone(prev => ({ ...prev, fundingGoal: parseInt(e.target.value) }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Deadline
                </label>
                <input
                  type="date"
                  value={newMilestone.deadline}
                  onChange={(e) => setNewMilestone(prev => ({ ...prev, deadline: e.target.value }))}
                  className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setShowAddMilestone(false)}
                  className="text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMilestone}
                  className="px-4 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857]"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {formData.milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-[#201E29] rounded-xl p-4 border border-gray-700"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{milestone.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{milestone.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-[#00BF63]">${milestone.fundingGoal.toLocaleString()}</span>
                    <span className="text-gray-400">Due {new Date(milestone.deadline).toLocaleDateString()}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveMilestone(index)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* File Uploads */}
      <div>
        <h3 className="text-lg font-medium mb-4">Documents</h3>
        <div className="space-y-4">
          <div className="bg-[#201E29] border border-gray-700 border-dashed rounded-lg p-4 text-center">
            <div className="flex items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400" />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Upload pitch deck, financials, or other documents
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const Preview = () => (
    <div className="space-y-8">
      <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-medium mb-4">Basic Information</h3>
        <div className="space-y-4">
          <div>
            <span className="block text-sm text-gray-400">Name</span>
            <span className="text-white">{formData.name}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Description</span>
            <p className="text-white">{formData.description}</p>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Tags</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#00BF63]/10 text-[#00BF63] rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-medium mb-4">Team</h3>
        <div className="space-y-4">
          {formData.team.map((member) => (
            <div key={member.name} className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">{member.name}</h4>
                <div className="text-sm text-gray-400">
                  {member.role} • {member.walletAddress}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-medium mb-4">Milestones</h3>
        <div className="space-y-4">
          {formData.milestones.map((milestone) => (
            <div key={milestone.title}>
              <h4 className="font-medium">{milestone.title}</h4>
              <p className="text-sm text-gray-400 mb-2">{milestone.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-[#00BF63]">${milestone.fundingGoal.toLocaleString()}</span>
                <span className="text-gray-400">Due {new Date(milestone.deadline).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Create Project</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
          <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
          <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
        </div>
      </div>

      {step === 1 && <BasicInfo />}
      {step === 2 && <TeamAndMilestones />}
      {step === 3 && <Preview />}

      <div className="flex items-center justify-between mt-8">
        {step > 1 ? (
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Back
          </button>
        ) : (
          <div />
        )}
        
        {step < 3 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
          >
            Next
            <ArrowRight className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={handleCreate}
            className="px-6 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
          >
            Create Project
          </button>
        )}
      </div>
    </div>
  );
}