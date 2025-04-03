import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Copy, SendHorizonal, Calendar, Eye, X, Settings, Wallet, Image } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface UserProfileProps {
  isEditable?: boolean;
}

interface UserData {
  username: string;
  avatar: string;
  walletAddress: string;
  joinDate: string;
  description: string;
  tvl: string;
  socials: {
    x: string;
    discord: string;
    telegram: string;
  };
  daosJoined: Array<{
    name: string;
    role: string;
    logo: string;
  }>;
  projectsInvested: Array<{
    name: string;
    amount: string;
    logo: string;
  }>;
  visibility: {
    tvl: boolean;
    socials: boolean;
    daos: boolean;
    projects: boolean;
  };
}

export function UserProfile({ isEditable = true }: UserProfileProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<{
    description: string;
    socials: {
      x: string;
      discord: string;
      telegram: string;
    };
  }>({
    description: '',
    socials: {
      x: '',
      discord: '',
      telegram: ''
    }
  });

  // Simulated user data
  const [userData, setUserData] = useState<UserData>({
    username: "cryptowhale.eth",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Mimi&backgroundColor=00bf63",
    walletAddress: "0x1234...5678",
    joinDate: "02/24",
    description: "Web3 enthusiast and early-stage investor. Focused on DeFi and NFT projects. Building the future of decentralized finance.",
    tvl: "$250K",
    socials: {
      x: "@cryptowhale",
      discord: "cryptowhale#1234",
      telegram: "@cryptowhale"
    },
    daosJoined: [
      { 
        name: "DeFi DAO", 
        role: "Core Member",
        logo: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=64&h=64&q=80"
      },
      { 
        name: "NFT Collective", 
        role: "Contributor",
        logo: "https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&w=64&h=64&q=80"
      }
    ],
    projectsInvested: [
      { 
        name: "DeFi Protocol", 
        amount: "$50K",
        logo: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=64&h=64&q=80"
      },
      { 
        name: "NFT Marketplace", 
        amount: "$25K",
        logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=64&h=64&q=80"
      }
    ],
    visibility: {
      tvl: true,
      socials: true,
      daos: true,
      projects: true
    }
  });

  const handleStartEdit = () => {
    setIsEditing(true);
    setEditData({
      description: userData.description,
      socials: { ...userData.socials }
    });
  };

  const handleSaveEdit = () => {
    setUserData(prev => ({
      ...prev,
      description: editData.description,
      socials: editData.socials
    }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData(prev => ({
          ...prev,
          avatar: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const SocialIcon = ({ platform, username }: { platform: string; username: string }) => {
    const icons = {
      x: <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" className="h-5 w-5" />,
      discord: <FontAwesomeIcon icon="fa-brands fa-discord" className="h-5 w-5" />,
      telegram: <FontAwesomeIcon icon="fa-brands fa-telegram" className="h-5 w-5" />
    };

    const getUrl = () => {
      switch (platform) {
        case 'x':
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
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        {isEditable && (
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Settings className="h-5 w-5" />
              Settings
            </button>
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="flex items-center gap-2 text-[#00BF63] hover:text-[#00a857]"
            >
              <Eye className="h-5 w-5" />
              Preview
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800">
        <div className="flex items-start gap-6">
          <div className="relative group">
            <img
              src={userData.avatar}
              alt={userData.username}
              className="w-24 h-24 rounded-xl"
            />
            {isEditable && (
              <label className="absolute inset-0 bg-black/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <Image className="h-6 w-6 text-white" />
              </label>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">{userData.username}</h2>
                <div className="flex items-center gap-4 text-gray-400 mt-2">
                  <div className="flex items-center gap-1">
                    <Wallet className="h-4 w-4" />
                    <span>{userData.walletAddress}</span>
                    <button 
                      onClick={() => navigator.clipboard.writeText(userData.walletAddress)}
                      className="hover:text-white"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Joined {userData.joinDate}</span>
                  </div>
                </div>
              </div>
              {isEditable && (
                <button
                  onClick={isEditing ? handleSaveEdit : handleStartEdit}
                  className="text-gray-400 hover:text-white"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
              )}
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
                      <SocialIcon platform="x" username="" />
                      <input
                        type="text"
                        value={editData.socials.x}
                        onChange={(e) => setEditData(prev => ({
                          ...prev,
                          socials: { ...prev.socials, x: e.target.value }
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
                        placeholder="Discord username"
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
                        placeholder="Telegram username"
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
              <>
                <p className="text-gray-300 mt-4">{userData.description}</p>
                {userData.visibility.socials && (
                  <div className="flex items-center gap-4 mt-4">
                    {userData.socials.x && (
                      <SocialIcon platform="x" username={userData.socials.x} />
                    )}
                    {userData.socials.discord && (
                      <SocialIcon platform="discord" username={userData.socials.discord} />
                    )}
                    {userData.socials.telegram && (
                      <SocialIcon platform="telegram" username={userData.socials.telegram} />
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {userData.visibility.daos && (
        <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800 mt-8">
          <h2 className="text-xl font-semibold mb-6">DAOs Joined</h2>
          <div className="grid grid-cols-2 gap-4">
            {userData.daosJoined.map((dao) => (
              <div
                key={dao.name}
                className="flex items-center gap-4 bg-[#16141D] rounded-lg p-4"
              >
                <img
                  src={dao.logo}
                  alt={dao.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{dao.name}</h3>
                  <p className="text-sm text-[#00BF63]">{dao.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {userData.visibility.projects && (
        <div className="bg-[#201E29] rounded-xl p-6 border border-gray-800 mt-8">
          <h2 className="text-xl font-semibold mb-6">Projects Invested</h2>
          <div className="grid grid-cols-2 gap-4">
            {userData.projectsInvested.map((project) => (
              <div
                key={project.name}
                className="flex items-center gap-4 bg-[#16141D] rounded-lg p-4"
              >
                <img
                  src={project.logo}
                  alt={project.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-medium">{project.name}</h3>
                  <p className="text-sm text-[#00BF63]">{project.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <PublicView />
          </motion.div>
        )}
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <SettingsModal />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  function PublicView() {
    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#201E29] rounded-xl p-8 max-w-2xl w-full mx-4 relative"
      >
        <button
          onClick={() => setIsPreviewOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center gap-6 mb-6">
          <img
            src={userData.avatar}
            alt={userData.username}
            className="w-20 h-20 rounded-xl"
          />
          <div>
            <h2 className="text-2xl font-bold">{userData.username}</h2>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex items-center gap-1 text-gray-400">
                <Wallet className="h-4 w-4" />
                <span>{userData.walletAddress}</span>
                <button 
                  onClick={() => navigator.clipboard.writeText(userData.walletAddress)}
                  className="hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <button className="text-[#00BF63] hover:text-[#00a857]">
                <SendHorizonal className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>On Rayze since {userData.joinDate}</span>
          </div>
          {userData.visibility.tvl && (
            <div className="flex items-center gap-2 text-[#00BF63]">
              <Wallet className="h-4 w-4" />
              <span>TVL: {userData.tvl}</span>
            </div>
          )}
          {userData.visibility.socials && (
            <div className="flex items-center gap-4">
              {userData.socials.x && (
                <SocialIcon platform="x" username={userData.socials.x} />
              )}
              {userData.socials.discord && (
                <SocialIcon platform="discord" username={userData.socials.discord} />
              )}
              {userData.socials.telegram && (
                <SocialIcon platform="telegram" username={userData.socials.telegram} />
              )}
            </div>
          )}
        </div>

        <p className="text-gray-300 mb-8">{userData.description}</p>

        {userData.visibility.daos && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">DAOs Joined</h3>
            <div className="grid grid-cols-2 gap-3">
              {userData.daosJoined.map((dao) => (
                <div
                  key={dao.name}
                  className="bg-[#16141D]/50 p-3 rounded-lg flex items-center gap-3"
                >
                  <img
                    src={dao.logo}
                    alt={dao.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium">{dao.name}</div>
                    <div className="text-sm text-[#00BF63]">{dao.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {userData.visibility.projects && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Projects Invested</h3>
            <div className="grid grid-cols-2 gap-3">
              {userData.projectsInvested.map((project) => (
                <div
                  key={project.name}
                  className="bg-[#16141D]/50 p-3 rounded-lg flex items-center gap-3"
                >
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="w-10 h-10 rounded-lg object-cover"
                  />
                  <div>
                    <div className="font-medium">{project.name}</div>
                    <div className="text-sm text-[#00BF63]">{project.amount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  function SettingsModal() {
    const toggleVisibility = (section: keyof UserData['visibility']) => {
      setUserData(prev => ({
        ...prev,
        visibility: {
          ...prev.visibility,
          [section]: !prev.visibility[section]
        }
      }));
    };

    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#201E29] rounded-xl p-6 max-w-md w-full mx-4"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Profile Settings</h3>
          <button
            onClick={() => setIsSettingsOpen(false)}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-[#16141D]/50 rounded-lg">
            <div>
              <h4 className="font-medium">Show TVL</h4>
              <p className="text-sm text-gray-400">Display your total value locked</p>
            </div>
            <button
              onClick={() => toggleVisibility('tvl')}
              className={`w-12 h-6 rounded-full transition-colors ${
                userData.visibility.tvl ? 'bg-[#00BF63]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  userData.visibility.tvl ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#16141D]/50 rounded-lg">
            <div>
              <h4 className="font-medium">Show Socials</h4>
              <p className="text-sm text-gray-400">Display your social media links</p>
            </div>
            <button
              onClick={() => toggleVisibility('socials')}
              className={`w-12 h-6 rounded-full transition-colors ${
                userData.visibility.socials ? 'bg-[#00BF63]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  userData.visibility.socials ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#16141D]/50 rounded-lg">
            <div>
              <h4 className="font-medium">Show DAOs</h4>
              <p className="text-sm text-gray-400">Display your DAO memberships</p>
            </div>
            <button
              onClick={() => toggleVisibility('daos')}
              className={`w-12 h-6 rounded-full transition-colors ${
                userData.visibility.daos ? 'bg-[#00BF63]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  userData.visibility.daos ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 bg-[#16141D]/50 rounded-lg">
            <div>
              <h4 className="font-medium">Show Projects</h4>
              <p className="text-sm text-gray-400">Display your investments</p>
            </div>
            <button
              onClick={() => toggleVisibility('projects')}
              className={`w-12 h-6 rounded-full transition-colors ${
                userData.visibility.projects ? 'bg-[#00BF63]' : 'bg-gray-600'
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                  userData.visibility.projects ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>
    );
  }
}