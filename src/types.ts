export interface Startup {
  id: string;
  name: string;
  description: string;
  category: 'web3' | 'tech';
  stage: 'seed' | 'series-a' | 'series-b' | 'growth';
  fundingGoal: number;
  raised: number;
  logo: string;
  website: string;
  pitch: string;
  team: TeamMember[];
}

export interface TeamMember {
  name: string;
  role: string;
  linkedin: string;
}

export interface Investor {
  id: string;
  name: string;
  type: 'dao' | 'vc' | 'angel';
  portfolio: string[];
  investmentRange: {
    min: number;
    max: number;
  };
  focusAreas: string[];
}