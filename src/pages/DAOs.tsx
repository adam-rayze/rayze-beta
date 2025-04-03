import React, { useState } from 'react';
import { ArrowRight, Settings, Shield, MessageSquare, Vote, Target, Wallet, FileCheck, Globe, Users } from 'lucide-react';
import DAOFeatureMockup from '../components/DAOFeatureMockup';
import { WaitlistPopup } from '../components/WaitlistPopup';

export function DAOs() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BF63] to-emerald-400 text-transparent bg-clip-text py-4">
              Enterprise-Grade DAO Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Build and scale your DAO with Rayze's all-in-one platform, featuring seamless formation, governance, and management tools.
            </p>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#00BF63] text-white px-8 py-3 rounded-lg hover:bg-[#00a857] transition-colors inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Setup Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div>
              <h2 className="text-3xl font-bold mb-6">Seamless DAO Creation</h2>
              <p className="text-gray-300 mb-8">
                Build your DAO in minutes with our intuitive setup process. Our platform provides all the tools you need to configure and launch your decentralized organization effectively.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Settings className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Governance Setup</h3>
                  <p className="text-sm text-gray-400">Configure voting parameters and token economics</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Shield className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Security First</h3>
                  <p className="text-sm text-gray-400">Multi-sig treasury management and role-based access</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Vote className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Flexible Voting</h3>
                  <p className="text-sm text-gray-400">Customizable proposal thresholds and voting mechanics</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Target className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Instant Deploy</h3>
                  <p className="text-sm text-gray-400">Launch your DAO on Solana's high-performance network</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <DAOFeatureMockup type="setup" />
            </div>
          </div>

          {/* Tools Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden order-2 lg:order-1">
              <DAOFeatureMockup type="governance" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Professional Tools & Analytics</h2>
              <p className="text-gray-300 mb-8">
                Our platform equips your DAO with enterprise-grade features designed for efficient operation and management.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg">
                    <Wallet className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Treasury Analytics</h3>
                    <p className="text-sm text-gray-400">Real-time treasury monitoring and transaction tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Communication Hub</h3>
                    <p className="text-sm text-gray-400">Integrated messaging across social platforms</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg">
                    <Vote className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Proposal Management</h3>
                    <p className="text-sm text-gray-400">One-click proposal creation and tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Treasury Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div>
              <h2 className="text-3xl font-bold mb-6">Interactive Treasury Management</h2>
              <p className="text-gray-300 mb-8">
                Monitor and manage your DAO's assets with precision. Our comprehensive treasury management tools provide complete visibility and control over your organization's resources.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Wallet className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Fund Tracking</h3>
                  <p className="text-sm text-gray-400">Monitor allocations and transaction history</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Globe className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Token Metrics</h3>
                  <p className="text-sm text-gray-400">Track token distribution and performance</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Vote className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Proposal Analytics</h3>
                  <p className="text-sm text-gray-400">Analyze voting patterns and engagement</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <FileCheck className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Financial Reports</h3>
                  <p className="text-sm text-gray-400">Generate detailed financial statements</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <DAOFeatureMockup type="treasury" />
            </div>
          </div>

          {/* Legal Section */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Legal & Compliance</h2>
              <p className="text-gray-300">
                Secure your DAO's future with optional Wyoming DAO LLC registration through our Doola partnership. Maintain compliance while preserving decentralization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Shield className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Legal Structure</h3>
                <p className="text-gray-400">Seamless registration process for Wyoming DAO LLC status</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Target className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Investment Access</h3>
                <p className="text-gray-400">Unlock access to Rayze's exclusive startup investment network</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Vote className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Balanced Governance</h3>
                <p className="text-gray-400">Maintain decentralization while ensuring regulatory compliance</p>
              </div>
            </div>
          </div>

          {/* Migration Section */}
          <div className="mb-32">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Powerful Migration Tools</h2>
              <p className="text-gray-300">
                Already have a DAO? Our migration toolkit enables a seamless transition to the Rayze platform while preserving your organization's history and continuity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Settings className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Smooth Transfer</h3>
                <p className="text-gray-400">Effortless migration from other platforms with minimal downtime</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <FileCheck className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Preserved History</h3>
                <p className="text-gray-400">Maintain your governance history and treasury data intact</p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Users className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-lg font-medium mb-2">Continuous Access</h3>
                <p className="text-gray-400">Uninterrupted member access and voting rights throughout transition</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to elevate your DAO?</h2>
            <p className="text-gray-300 mb-8">
              Launch on Rayze today and unlock the full potential of decentralized organization.
            </p>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#00BF63] text-white px-8 py-3 rounded-lg hover:bg-[#00a857] transition-colors w-full sm:w-auto"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      <WaitlistPopup 
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
}