import React, { useState } from 'react';
import { X, Image } from 'lucide-react';

interface AddMemberFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (member: { name: string; position: string; walletAddress: string; avatar?: string }) => void;
}

export function AddMemberForm({ isOpen, onClose, onSubmit }: AddMemberFormProps) {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [avatar, setAvatar] = useState<string | undefined>();

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (name && position) {
      onSubmit({ name, position, walletAddress, avatar });
      setName('');
      setPosition('');
      setWalletAddress('');
      setAvatar(undefined);
      onClose();
    }
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
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

        <h2 className="text-2xl font-bold mb-2">Add Team Member</h2>
        <p className="text-gray-400 mb-6">Add a new member to your project team</p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Profile Picture
            </label>
            <div className="relative group">
              <div className={`w-24 h-24 rounded-xl flex items-center justify-center ${
                avatar ? 'bg-transparent' : 'bg-[#16141D] border-2 border-dashed border-gray-700'
              }`}>
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Profile"
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <Image className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <label className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <Image className="h-6 w-6 text-white" />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Enter member name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Position
            </label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Enter member position"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Wallet Address (Optional)
            </label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full bg-[#16141D] border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-[#00BF63]"
              placeholder="Enter wallet address"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!name || !position}
            className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}