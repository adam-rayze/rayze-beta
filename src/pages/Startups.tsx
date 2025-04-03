import React, { useState } from 'react';
import { ArrowRight, Rocket, Cpu, Shield, Users, Target, BarChart3, Clock, Zap } from 'lucide-react';
import { StartupFeatureMockup } from '../components/StartupFeatureMockup';
import { WaitlistPopup } from '../components/WaitlistPopup';

export function Startups() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#16141D] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BF63] to-emerald-400 text-transparent bg-clip-text py-4">
              Fund Smarter, Build Faster
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Connect with the future of startup financing through Rayze's innovative platform, where traditional venture capital meets decentralized investment opportunities.
            </p>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#00BF63] text-white px-8 py-3 rounded-lg hover:bg-[#00a857] transition-colors inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Smart Matching Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div>
              <h2 className="text-3xl font-bold mb-6">Smart Matching Technology</h2>
              <p className="text-gray-300 mb-8">
                Connect with ideal investors through our data-driven matching system, precisely aligned with your startup's vision and growth trajectory.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Cpu className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">AI-Powered Matching</h3>
                  <p className="text-sm text-gray-400">Intelligent investor recommendations based on your startup's profile</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Target className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Precision Targeting</h3>
                  <p className="text-sm text-gray-400">Connect with investors who align with your industry and stage</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Clock className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Faster Funding</h3>
                  <p className="text-sm text-gray-400">Accelerate your fundraising by connecting directly with pre-qualified investors who match your criteria</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Zap className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Rayze Velocity</h3>
                  <p className="text-sm text-gray-400">Automatically progress through funding rounds with stage-appropriate investors as your business grows</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <StartupFeatureMockup type="matching" />
            </div>
          </div>

          {/* Tools Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden order-2 lg:order-1">
              <StartupFeatureMockup type="dashboard" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Streamlined Startup Tools</h2>
              <p className="text-gray-300 mb-8">
                Everything you need to manage your funding journey in one place. Our comprehensive suite of tools helps you stay organized and make data-driven decisions.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Users className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Cap Table Management</h3>
                    <p className="text-sm text-gray-400">Track ownership and equity distribution with real-time updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Target className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Investability Score</h3>
                    <p className="text-sm text-gray-400">Monitor and improve your startup's investment readiness</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Compliance Checks</h3>
                    <p className="text-sm text-gray-400">Automated regulatory compliance monitoring and reporting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Getting Started Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Funding Journey?</h2>
            <p className="text-gray-300 mb-8">
              Transform your fundraising journey with Rayze's end-to-end platform, connecting you with the right capital at every stage.
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