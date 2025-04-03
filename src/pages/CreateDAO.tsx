import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image, X, Upload, ArrowRight, ArrowLeft } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DAOFormData {
  name: string;
  logo: string;
  banner: string;
  description: string;
  tags: string[];
  website: string;
  socials: {
    twitter: string;
    discord: string;
    telegram: string;
  };
  governance: {
    votingThreshold: number;
    quorum: number;
    votingDuration: number;
    minDeposit: {
      required: boolean;
      amount: number;
    };
    privacy: 'open' | 'invite';
  };
}

const initialFormData: DAOFormData = {
  name: '',
  logo: '',
  banner: '',
  description: '',
  tags: [],
  website: '',
  socials: {
    twitter: '',
    discord: '',
    telegram: ''
  },
  governance: {
    votingThreshold: 50,
    quorum: 25,
    votingDuration: 72,
    minDeposit: {
      required: false,
      amount: 0
    },
    privacy: 'open'
  }
};

export function CreateDAO() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<DAOFormData>(initialFormData);
  const [tagInput, setTagInput] = useState('');

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

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleDeploy = () => {
    // Here you would handle the actual DAO deployment
    // For now, we'll just navigate to a simulated DAO view
    navigate('/dao/new-dao');
  };

  const BasicInfo = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          DAO Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
          placeholder="Enter DAO name"
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
          Banner
        </label>
        <div className="bg-[#201E29] border border-gray-700 border-dashed rounded-lg p-4 text-center">
          <div className="flex items-center justify-center">
            <Upload className="h-8 w-8 text-gray-400" />
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Drag and drop or click to upload
          </p>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-32 resize-none"
          placeholder="Describe your DAO's mission and goals"
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

  const GovernanceSettings = () => (
    <div className="space-y-8">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          What percentage of YES votes are needed for a proposal to pass?
        </label>
        <select
          value={formData.governance.votingThreshold}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            governance: { ...prev.governance, votingThreshold: parseInt(e.target.value) }
          }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
        >
          <option value="50">50% (Simple Majority)</option>
          <option value="67">67% (Super Majority)</option>
          <option value="75">75% (High Consensus)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          What percentage of members must vote for the result to be valid?
        </label>
        <select
          value={formData.governance.quorum}
          onChange={(e) => setFormData(prev => ({
            ...prev,
            governance: { ...prev.governance, quorum: parseInt(e.target.value) }
          }))}
          className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
        >
          <option value="25">25% (Low Quorum)</option>
          <option value="50">50% (Medium Quorum)</option>
          <option value="75">75% (High Quorum)</option>
          <option value="100">100% (Full Participation)</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          How long will members have to vote on each proposal?
        </label>
        <div className="flex justify-between gap-4">
          {[24, 72, 168].map((hours) => (
            <button
              key={hours}
              onClick={() => setFormData(prev => ({
                ...prev,
                governance: { ...prev.governance, votingDuration: hours }
              }))}
              className={`flex-1 p-4 rounded-lg border ${
                formData.governance.votingDuration === hours
                  ? 'border-[#00BF63] bg-[#00BF63]/10 text-[#00BF63]'
                  : 'border-gray-700 bg-[#201E29] text-gray-400 hover:border-[#00BF63] hover:text-[#00BF63]'
              }`}
            >
              {hours === 24 ? '24 hours' : hours === 72 ? '72 hours' : '7 days'}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Privacy Rules
        </label>
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setFormData(prev => ({
              ...prev,
              governance: { ...prev.governance, privacy: 'open' }
            }))}
            className={`flex-1 p-4 rounded-lg border ${
              formData.governance.privacy === 'open'
                ? 'border-[#00BF63] bg-[#00BF63]/10 text-[#00BF63]'
                : 'border-gray-700 bg-[#201E29] text-gray-400 hover:border-[#00BF63] hover:text-[#00BF63]'
            }`}
          >
            Anyone can request to join
          </button>
          <button
            onClick={() => setFormData(prev => ({
              ...prev,
              governance: { ...prev.governance, privacy: 'invite' }
            }))}
            className={`flex-1 p-4 rounded-lg border ${
              formData.governance.privacy === 'invite'
                ? 'border-[#00BF63] bg-[#00BF63]/10 text-[#00BF63]'
                : 'border-gray-700 bg-[#201E29] text-gray-400 hover:border-[#00BF63] hover:text-[#00BF63]'
            }`}
          >
            Invite only
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-4">
          Minimum deposit required to join?
        </label>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFormData(prev => ({
                ...prev,
                governance: {
                  ...prev.governance,
                  minDeposit: { ...prev.governance.minDeposit, required: false }
                }
              }))}
              className={`flex-1 p-4 rounded-lg border ${
                !formData.governance.minDeposit.required
                  ? 'border-[#00BF63] bg-[#00BF63]/10 text-[#00BF63]'
                  : 'border-gray-700 bg-[#201E29] text-gray-400 hover:border-[#00BF63] hover:text-[#00BF63]'
              }`}
            >
              No
            </button>
            <button
              onClick={() => setFormData(prev => ({
                ...prev,
                governance: {
                  ...prev.governance,
                  minDeposit: { ...prev.governance.minDeposit, required: true }
                }
              }))}
              className={`flex-1 p-4 rounded-lg border ${
                formData.governance.minDeposit.required
                  ? 'border-[#00BF63] bg-[#00BF63]/10 text-[#00BF63]'
                  : 'border-gray-700 bg-[#201E29] text-gray-400 hover:border-[#00BF63] hover:text-[#00BF63]'
              }`}
            >
              Yes
            </button>
          </div>
          {formData.governance.minDeposit.required && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Amount (USDC)
              </label>
              <input
                type="number"
                min="0"
                value={formData.governance.minDeposit.amount}
                onChange={(e) => setFormData(prev => ({
                  ...prev,
                  governance: {
                    ...prev.governance,
                    minDeposit: { ...prev.governance.minDeposit, amount: parseInt(e.target.value) }
                  }
                }))}
                className="w-full bg-[#201E29] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              />
            </div>
          )}
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
        <h3 className="text-lg font-medium mb-4">Governance Settings</h3>
        <div className="space-y-4">
          <div>
            <span className="block text-sm text-gray-400">Voting Threshold</span>
            <span className="text-white">{formData.governance.votingThreshold}% YES votes required</span>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Quorum</span>
            <span className="text-white">{formData.governance.quorum}% participation required</span>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Voting Duration</span>
            <span className="text-white">
              {formData.governance.votingDuration === 24 ? '24 hours' :
               formData.governance.votingDuration === 72 ? '72 hours' :
               '7 days'}
            </span>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Privacy</span>
            <span className="text-white">
              {formData.governance.privacy === 'open' ? 'Anyone can request to join' : 'Invite only'}
            </span>
          </div>
          <div>
            <span className="block text-sm text-gray-400">Minimum Deposit</span>
            <span className="text-white">
              {formData.governance.minDeposit.required
                ? `${formData.governance.minDeposit.amount} USDC`
                : 'Not required'}
            </span>
          </div>
        </div>
      </div>

      <div className="bg-[#201E29] rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-medium mb-4">Important Notes</h3>
        <p className="text-gray-400">
          No details can be changed, and no funds withdrawn for any purpose, except with approval from {formData.governance.votingThreshold}% of members defined above.
        </p>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Create DAO</h1>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <div className={`w-2 h-2 rounded-full ${step >= 1 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
          <div className={`w-2 h-2 rounded-full ${step >= 2 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
          <div className={`w-2 h-2 rounded-full ${step >= 3 ? 'bg-[#00BF63]' : 'bg-gray-600'}`} />
        </div>
      </div>

      {step === 1 && <BasicInfo />}
      {step === 2 && <GovernanceSettings />}
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
            onClick={handleDeploy}
            className="px-6 py-2 bg-[#00BF63] text-white rounded-lg hover:bg-[#00a857] transition-colors"
          >
            Deploy DAO
          </button>
        )}
      </div>
    </div>
  );
}