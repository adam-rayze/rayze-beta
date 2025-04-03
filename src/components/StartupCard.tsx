import React from 'react';
import { ExternalLink, Users, Target } from 'lucide-react';
import type { Startup } from '../types';

interface StartupCardProps {
  startup: Startup;
}

export function StartupCard({ startup }: StartupCardProps) {
  const progress = (startup.raised / startup.fundingGoal) * 100;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={startup.logo}
              alt={`${startup.name} logo`}
              className="w-12 h-12 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{startup.name}</h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#00BF63] bg-opacity-10 text-[#00BF63]">
                {startup.category}
              </span>
            </div>
          </div>
          <a
            href={startup.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#00BF63]"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-4 text-gray-600">{startup.description}</p>

        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Raised: ${startup.raised.toLocaleString()}</span>
            <span>{progress.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#00BF63] rounded-full h-2"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span className="text-sm">{startup.team.length} team members</span>
            </div>
            <div className="flex items-center text-gray-500">
              <Target className="h-4 w-4 mr-1" />
              <span className="text-sm">${startup.fundingGoal.toLocaleString()} goal</span>
            </div>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-[#00BF63] hover:bg-[#00BF63] hover:bg-opacity-5 rounded-lg">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}