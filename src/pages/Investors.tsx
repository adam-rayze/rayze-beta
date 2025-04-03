import React, { useState } from 'react';
import { ArrowRight, Target, BarChart3, Users, Brain, Rocket, Shield, Briefcase, Globe, Wrench } from 'lucide-react';
import { InvestorFeatureMockup } from '../components/InvestorFeatureMockup';
import { WaitlistPopup } from '../components/WaitlistPopup';

export function Investors() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#16141D] text-white">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00BF63] to-emerald-400 text-transparent bg-clip-text py-4">
              Accelerate Your Investment Vision
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover and invest in elite startups and DAOs through Rayze's curated platform, designed to transform your investment strategy.
            </p>
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-[#00BF63] text-white px-8 py-3 rounded-lg hover:bg-[#00a857] transition-colors inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-5 w-5" />
            </button>
          </div>

          {/* Precision-Driven Discovery Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div>
              <h2 className="text-3xl font-bold mb-6">Precision-Driven Investment Discovery</h2>
              <p className="text-gray-300 mb-8">
                Our platform goes beyond traditional investing, leveraging advanced technology to connect you with opportunities that align with your investment strategy.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Brain className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Advanced Matching</h3>
                  <p className="text-sm text-gray-400">Technology aligns opportunities with your unique investment profile</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Shield className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Rigorous Due Diligence</h3>
                  <p className="text-sm text-gray-400">Only high-potential ventures reach your dashboard</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Rocket className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Seamless Experience</h3>
                  <p className="text-sm text-gray-400">Complex investing transformed into a streamlined journey</p>
                </div>
                <div className="bg-[#201E29] backdrop-blur-sm p-4 rounded-lg border border-gray-700">
                  <Wrench className="h-6 w-6 text-[#00BF63] mb-2" />
                  <h3 className="font-medium mb-1">Investor Tools</h3>
                  <p className="text-sm text-gray-400">Comprehensive suite of tools for portfolio management and analysis</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <InvestorFeatureMockup type="matching" />
            </div>
          </div>

          {/* Investment Ecosystem Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-6">Comprehensive Investment Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#201E29] backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Briefcase className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-xl font-medium mb-4">Startup Investments</h3>
                <p className="text-gray-400 mb-6">Dive into pre-vetted opportunities across diverse sectors:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#16141D]/50 rounded-lg px-4 py-2 text-sm">Technology</div>
                  <div className="bg-[#16141D]/50 rounded-lg px-4 py-2 text-sm">Web3</div>
                  <div className="bg-[#16141D]/50 rounded-lg px-4 py-2 text-sm">DeFI</div>
                  <div className="bg-[#16141D]/50 rounded-lg px-4 py-2 text-sm">Emerging Sectors</div>
                </div>
              </div>
              <div className="bg-[#201E29] backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Globe className="h-8 w-8 text-[#00BF63] mb-4" />
                <h3 className="text-xl font-medium mb-4">DAO Investments</h3>
                <p className="text-gray-400">
                  Explore groundbreaking decentralized organizations reshaping digital collaboration and governance. Access unique opportunities in the rapidly evolving Web3 ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Advantage Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden order-2 lg:order-1">
              <InvestorFeatureMockup type="dashboard" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Your Investing Advantage</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Target className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Personalized Deal Flow</h3>
                    <p className="text-sm text-gray-400">Opportunities tailored to your specific interests and investment criteria</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Expert Screening</h3>
                    <p className="text-sm text-gray-400">Comprehensive due diligence by industry specialists</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <Users className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Direct Access</h3>
                    <p className="text-sm text-gray-400">Connect directly with founding teams</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#201E29] backdrop-blur-sm p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-[#00BF63]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Real-Time Insights</h3>
                    <p className="text-sm text-gray-400">Continuous portfolio monitoring and performance tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three-Step Process Section */}
          <div className="mb-32">
            <h2 className="text-3xl font-bold mb-12 text-center">Three-Step Investment Acceleration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#201E29] backdrop-blur-sm p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00BF63] rounded-full flex items-center justify-center text-lg font-bold">
                  1
                </div>
                <h3 className="text-lg font-medium mb-3">Create Your Investor Profile</h3>
                <p className="text-gray-400">Simply connect your wallet and add any additional informatiion about yourself</p>
              </div>
              <div className="bg-[#201E29] backdrop-blur-sm p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00BF63] rounded-full flex items-center justify-center text-lg font-bold">
                  2
                </div>
                <h3 className="text-lg font-medium mb-3">Define Investment Criteria</h3>
                <p className="text-gray-400">Set your investment parameters and target sectors</p>
              </div>
              <div className="bg-[#201E29] backdrop-blur-sm p-6 rounded-xl border border-gray-700 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#00BF63] rounded-full flex items-center justify-center text-lg font-bold">
                  3
                </div>
                <h3 className="text-lg font-medium mb-3">Explore Matched Opportunities</h3>
                <p className="text-gray-400">Connect with pre-vetted startups and DAOs aligned with your criteria</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Redefine Your Investment Strategy?</h2>
            <p className="text-gray-300 mb-8">
              Join Rayze today and transform how you discover, evaluate, and invest in the most innovative ventures globally.
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