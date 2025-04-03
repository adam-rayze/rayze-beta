import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wallet2, Copy, LayoutDashboard, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function WalletButton() {
  const [isConnected, setIsConnected] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  
  // Simulated wallet address
  const walletAddress = '0x1234...5678';

  const handleConnect = () => {
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setIsDropdownOpen(false);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    // You could add a toast notification here
  };

  const handleDashboard = () => {
    navigate('/dashboard');
    setIsDropdownOpen(false);
  };

  if (!isConnected) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleConnect}
        className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
      >
        <Wallet2 className="h-4 w-4" />
        Connect Wallet
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="bg-[#201E29] text-white px-4 py-2 rounded-lg border border-gray-700 hover:border-[#00BF63] transition-colors flex items-center gap-2"
      >
        <img
          src="https://api.dicebear.com/7.x/shapes/svg?seed=Mimi&backgroundColor=00bf63"
          alt="Profile"
          className="w-5 h-5 rounded-full"
        />
        <span className="text-sm font-medium">{walletAddress}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </motion.button>

      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-[#201E29] rounded-lg shadow-lg border border-gray-700 overflow-hidden z-50"
          >
            <div className="py-1">
              <button
                onClick={handleCopyAddress}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 w-full text-left"
              >
                <Copy className="h-4 w-4" />
                Copy Address
              </button>
              <button
                onClick={handleDashboard}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700/50 w-full text-left"
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </button>
              <button
                onClick={handleDisconnect}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-700/50 w-full text-left"
              >
                <LogOut className="h-4 w-4" />
                Disconnect
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}