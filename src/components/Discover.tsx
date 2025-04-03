import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';

interface DiscoverProps {
  onWaitlist: () => void;
}

interface Discovery {
  name: string;
  logo: string;
  amount: string;
  description: string;
  type: string;
  investors: string[];
  [key: string]: any;
}

const discoveries: Discovery[] = [
  {
    name: 'Rayze High Risk',
    logo: 'https://i.postimg.cc/7637xT3z/Rayze-Favicon.png',
    amount: '$85M',
    description: 'High-risk investment DAO focused on emerging technologies and early-stage startups with potential for exponential growth',
    type: 'DAO',
    investors: ['Crypto Ventures', 'Tech Pioneers'],
    governance: 'Token-based voting',
    members: 1800,
    activeProposals: 15,
    treasury: '$85M AUM'
  },
  {
    name: 'Nexus Protocol',
    logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$12M',
    description: 'Cross-chain DeFi infrastructure enabling seamless asset transfers and liquidity provision across multiple blockchains',
    type: 'Startup',
    investors: ['Alpha Fund', 'Beta Ventures'],
    stage: 'Series A',
    team: ['Jane Smith - CEO', 'Alex Chen - CTO', 'Maria Garcia - Head of Product'],
    traction: '500K+ Monthly Active Users',
    location: 'Atlanta, GA',
    website: 'https://nexusprotocol.io'
  },
  {
    name: 'InnovateDAO',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$45M',
    description: 'Decentralized venture capital fund focused on early-stage Web3 startups with community-driven investment decisions',
    type: 'DAO',
    investors: ['Web3 Collective', 'DeFi Alliance'],
    governance: 'Token-based voting',
    members: 2500,
    activeProposals: 8,
    treasury: '$45M AUM'
  },
  {
    name: 'Quantum Ventures',
    logo: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$50M',
    description: 'Deep tech investment fund specializing in quantum computing and AI startups',
    type: 'Fund',
    investors: ['Tech Pioneers', 'Innovation Capital'],
    portfolio: 15,
    focus: ['Quantum Computing', 'AI/ML', 'Deep Tech'],
    exits: 3
  },
  {
    name: 'EcoSphere AI',
    logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$8.5M',
    description: 'AI-powered climate tech platform for sustainable resource management and carbon footprint optimization',
    type: 'Startup',
    investors: ['Green Tech Fund', 'Climate Ventures'],
    stage: 'Seed',
    team: ['David Park - CEO', 'Sarah Johnson - CTO', 'Michael Brown - Head of Research'],
    traction: '50+ Enterprise Clients',
    location: 'Miami, FL'
  },
  {
    name: 'MetaGov DAO',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$32M',
    description: 'Decentralized governance protocol enabling cross-chain DAO coordination and treasury management',
    type: 'DAO',
    investors: ['Governance Fund', 'Web3 Foundation'],
    governance: 'Quadratic voting',
    members: 3800,
    activeProposals: 12,
    treasury: '$32M AUM'
  },
  {
    name: 'Neural Labs',
    logo: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=200&h=200&q=80',
    amount: '$15M',
    description: 'Pioneering brain-computer interface technology for enhanced human-AI collaboration and cognitive augmentation',
    type: 'Startup',
    investors: ['Neurotech Fund', 'Future Ventures'],
    stage: 'Series A',
    team: ['Dr. Emma Chen - CEO', 'Dr. James Wilson - CTO', 'Dr. Maya Patel - Head of Research'],
    traction: '3 Major Research Partnerships',
    location: 'Boston, MA',
    website: 'https://neurallabs.ai'
  }
];

export function Discover({ onWaitlist }: DiscoverProps) {
  const [selectedEntity, setSelectedEntity] = useState<Discovery | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const lastX = useRef<number>(0);
  const velocity = useRef<number>(0);
  const baseSpeed = 1;

  useEffect(() => {
    let startTime = performance.now();
    
    const animate = () => {
      if (!carouselRef.current) return;
      
      const now = performance.now();
      const elapsed = now - startTime;
      startTime = now;

      if (isDragging) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (Math.abs(velocity.current) > 0.45) {
        velocity.current *= 0.95;
      } else {
        velocity.current = baseSpeed;
      }
      
      setCurrentTranslate(prev => {
        const newTranslate = prev + velocity.current * (elapsed / 16);
        const maxTranslate = carouselRef.current!.scrollWidth / 3;
        return newTranslate >= maxTranslate ? 0 : newTranslate;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentTranslate}px)`;
    }
  }, [currentTranslate]);

  const handleDragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    lastX.current = e.touches[0].clientX;
    setPrevTranslate(currentTranslate);
    velocity.current = 0;
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleDragMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.touches[0].clientX;
    const diff = lastX.current - currentX;
    lastX.current = currentX;
    
    velocity.current = diff * 0.3;
    
    setCurrentTranslate(prev => {
      const newTranslate = prev + diff;
      const maxTranslate = carouselRef.current!.scrollWidth / 3;
      return newTranslate < 0 ? maxTranslate + newTranslate : newTranslate >= maxTranslate ? newTranslate - maxTranslate : newTranslate;
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    velocity.current = Math.min(Math.max(velocity.current, -10), 10);
  };

  const handleEntityClick = (entity: Discovery) => {
    if (!isDragging) {
      setSelectedEntity(entity);
    }
  };

  const handleJoinWaitlist = () => {
    setSelectedEntity(null);
    onWaitlist();
  };

  return (
    <div className="relative overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6 text-center">Explore our network</h2>
      
      <div className="mx-[-1rem] px-4">
        <div 
          ref={carouselRef}
          className="flex gap-4 touch-pan-x"
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{ 
            transform: 'translateX(0)',
            willChange: 'transform',
            transition: isDragging ? 'none' : 'transform 0.1s ease-out'
          }}
        >
          {[...discoveries, ...discoveries, ...discoveries].map((discovery, index) => (
            <div
              key={`${discovery.name}-${index}`}
              onClick={() => handleEntityClick(discovery)}
              className="w-[65%] sm:w-1/3 min-w-[65%] sm:min-w-[33.333%] flex-shrink-0"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700 transform hover:scale-105 transition-transform duration-300 h-full">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={discovery.logo}
                      alt={`${discovery.name} logo`}
                      className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-sm sm:text-base">{discovery.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-[#00BF63] font-semibold text-sm">{discovery.amount}</span>
                        <span className="text-xs sm:text-sm text-gray-400">• {discovery.type}</span>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-[#00BF63] transition-colors duration-200" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{discovery.description}</p>
                <div className="text-xs text-gray-500">
                  {discovery.investors.join(' • ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedEntity && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-8 max-w-2xl w-full mx-4 relative">
            <button 
              onClick={() => setSelectedEntity(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={selectedEntity.logo}
                alt={`${selectedEntity.name} logo`}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-white">{selectedEntity.name}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-[#00BF63] font-semibold">{selectedEntity.amount}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{selectedEntity.type}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6">{selectedEntity.description}</p>

            {selectedEntity.type === 'DAO' && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Members</h3>
                  <p className="text-lg font-semibold text-white">{selectedEntity.members.toLocaleString()}</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Active Proposals</h3>
                  <p className="text-lg font-semibold text-white">{selectedEntity.activeProposals}</p>
                </div>
              </div>
            )}

            {selectedEntity.type === 'Startup' && (
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Team</h3>
                  <div className="space-y-2">
                    {selectedEntity.team.map((member: string) => (
                      <div key={member} className="text-white">{member}</div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Stage</h3>
                    <p className="text-lg font-semibold text-white">{selectedEntity.stage}</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Location</h3>
                    <p className="text-lg font-semibold text-white">{selectedEntity.location}</p>
                  </div>
                </div>
              </div>
            )}

            {selectedEntity.type === 'Fund' && (
              <div className="space-y-4 mb-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-400 mb-2">Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedEntity.focus.map((area: string) => (
                      <span key={area} className="bg-gray-700/50 px-3 py-1 rounded-full text-sm text-white">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Portfolio</h3>
                    <p className="text-lg font-semibold text-white">{selectedEntity.portfolio} companies</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-sm font-medium text-gray-400 mb-1">Exits</h3>
                    <p className="text-lg font-semibold text-white">{selectedEntity.exits}</p>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={handleJoinWaitlist}
              className="w-full bg-[#00BF63] text-white py-3 rounded-lg hover:bg-[#00a857] transition-colors flex items-center justify-center gap-2"
            >
              View full profile <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}