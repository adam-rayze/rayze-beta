import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddMilestoneFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (milestone: { title: string; description: string; fundingGoal: string; deadline: string }) => void;
}

export function AddMilestoneForm({ isOpen, onClose, onSubmit }: AddMilestoneFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fundingGoal, setFundingGoal] = useState('');
  const [deadline, setDeadline] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (title && description && fundingGoal && deadline) {
      onSubmit({ title, description, fundingGoal, deadline });
      setTitle('');
      setDescription('');
      setFundingGoal('');
      setDeadline('');
      onClose();
    }
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

        <h2 className="text-2xl font-bold mb-2">Add Milestone</h2>
        <p className="text-gray-400 mb-6">Add a new milestone to your project</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Enter milestone title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63] h-32 resize-none"
              placeholder="Enter milestone description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Funding Goal
            </label>
            <input
              type="text"
              value={fundingGoal}
              onChange={(e) => setFundingGoal(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Enter funding goal (e.g., $1M)"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!title || !description || !fundingGoal || !deadline}
            className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Milestone
          </button>
        </div>
      </div>
    </div>
  );
}