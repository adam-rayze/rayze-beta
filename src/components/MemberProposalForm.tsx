import React, { useState } from 'react';
import { X } from 'lucide-react';

interface MemberProposalFormProps {
  projectName: string;
  milestones: Array<{ title: string; fundingGoal: string; }>;
  onClose: () => void;
}

export function MemberProposalForm({ projectName, milestones, onClose }: MemberProposalFormProps) {
  const [stage, setStage] = useState('');
  const [milestone, setMilestone] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = () => {
    // Handle proposal submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#201E29] rounded-xl p-8 max-w-lg w-full mx-4 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold mb-2">Submit Proposal for {projectName}</h2>
        <p className="text-gray-400 mb-6">Create a new funding proposal</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Stage
            </label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
            >
              <option value="">Select stage</option>
              <option value="pre-seed">Pre-seed</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Milestone
            </label>
            <select
              value={milestone}
              onChange={(e) => setMilestone(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
            >
              <option value="">Select milestone</option>
              {milestones.map((m, index) => (
                <option key={index} value={m.title}>
                  {m.title} - {m.fundingGoal}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Details
            </label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-32 resize-none"
              placeholder="Provide details about the proposal..."
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!stage || !milestone || !details.trim()}
            className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
}