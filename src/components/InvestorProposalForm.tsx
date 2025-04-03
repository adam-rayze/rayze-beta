import React, { useState } from 'react';
import { X } from 'lucide-react';

interface InvestorProposalFormProps {
  projectName: string;
  onClose: () => void;
}

export function InvestorProposalForm({ projectName, onClose }: InvestorProposalFormProps) {
  const [selectedDao, setSelectedDao] = useState('');

  // Sample DAO data - In a real app, this would come from your backend
  const userDaos = [
    {
      id: 'defi-dao',
      name: 'DeFi DAO',
      tvl: '$45M',
      logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=64&h=64&q=80'
    },
    {
      id: 'nft-dao',
      name: 'NFT Collective',
      tvl: '$12M',
      logo: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&w=64&h=64&q=80'
    }
  ];

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

        <h2 className="text-2xl font-bold mb-2">Invest in {projectName}</h2>
        <p className="text-gray-400 mb-6">Select a DAO to submit your investment proposal</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Select DAO</h3>
            <div className="space-y-3">
              {userDaos.map((dao) => (
                <button
                  key={dao.id}
                  onClick={() => setSelectedDao(dao.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border ${
                    selectedDao === dao.id
                      ? 'border-[#00BF63] bg-[#00BF63]/10'
                      : 'border-gray-700 bg-[#16141D] hover:border-[#00BF63]'
                  } transition-colors`}
                >
                  <img
                    src={dao.logo}
                    alt={dao.name}
                    className="w-12 h-12 rounded-lg"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="font-medium">{dao.name}</h4>
                    <p className="text-sm text-[#00BF63]">TVL: {dao.tvl}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedDao}
            className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
}