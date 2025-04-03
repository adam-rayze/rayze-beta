import React, { useState, KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, Users, Wallet, Vote, ArrowUpRight, X } from 'lucide-react';

interface FilterOption {
  label: string;
  value: string;
}

interface Tag {
  label: string;
  value: string;
}

const locationOptions: FilterOption[] = [
  { label: 'North America', value: 'na' },
  { label: 'Europe', value: 'eu' },
  { label: 'Asia', value: 'asia' },
];

const categoryOptions: FilterOption[] = [
  { label: 'DeFi', value: 'defi' },
  { label: 'NFT', value: 'nft' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Infrastructure', value: 'infrastructure' },
];

const stageOptions: FilterOption[] = [
  { label: 'Pre-seed', value: 'pre-seed' },
  { label: 'Seed', value: 'seed' },
  { label: 'Series A', value: 'series-a' },
  { label: 'Series B', value: 'series-b' },
];

// Sample data
const recommendedItems = [
  {
    id: 'ai-platform-x',
    name: 'AI Platform X',
    logo: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'AI-powered developer productivity platform',
    match: '95%',
    type: 'project',
    stage: 'Series A',
    tags: ['AI', 'Developer Tools']
  },
  {
    id: 'defi-dao-y',
    name: 'DeFi DAO Y',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'Decentralized investment fund for DeFi protocols',
    match: '92%',
    type: 'dao',
    members: 2800,
    tvl: '$52M',
    tags: ['DeFi', 'Investment']
  }
];

const daos = [
  {
    id: 'defi-dao',
    name: 'DeFi DAO',
    logo: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'Decentralized investment fund focused on DeFi protocols and infrastructure',
    members: 2500,
    tvl: '$45M',
    activeProposals: 8,
    tags: ['DeFi', 'Investment']
  },
  {
    id: 'nft-collective',
    name: 'NFT Collective',
    logo: 'https://images.unsplash.com/photo-1642403711604-3908e90960ce?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'Community-driven NFT curation and investment platform',
    members: 1800,
    tvl: '$12M',
    activeProposals: 5,
    tags: ['NFT', 'Art', 'Community']
  }
];

const projects = [
  {
    id: 'techvision-ai',
    name: 'TechVision AI',
    logo: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'AI-powered developer productivity platform',
    stage: 'Series A',
    tags: ['AI', 'Developer Tools', 'SaaS']
  },
  {
    id: 'blockchain-solutions',
    name: 'BlockChain Solutions',
    logo: 'https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&w=64&h=64&q=80',
    description: 'Enterprise blockchain infrastructure and solutions',
    stage: 'Seed',
    tags: ['Infrastructure', 'B2B', 'Blockchain']
  }
];

export function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'daos' | 'projects'>('all');
  const [locationTags, setLocationTags] = useState<string[]>([]);
  const [categoryTags, setCategoryTags] = useState<string[]>([]);
  const [stageTags, setStageTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [locationInput, setLocationInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  const handleTagKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    value: string,
    setter: (tags: string[]) => void,
    currentTags: string[]
  ) => {
    if (e.key === 'Enter' && value.trim()) {
      e.preventDefault();
      if (!currentTags.includes(value.trim())) {
        setter([...currentTags, value.trim()]);
      }
      if (e.currentTarget.name === 'location') {
        setLocationInput('');
      } else if (e.currentTarget.name === 'category') {
        setCategoryInput('');
      }
    }
  };

  const removeTag = (tag: string, tags: string[], setter: (tags: string[]) => void) => {
    setter(tags.filter(t => t !== tag));
  };

  const filteredItems = () => {
    let items = selectedType === 'daos' ? daos : 
                selectedType === 'projects' ? projects :
                [...daos, ...projects];

    if (searchQuery) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (locationTags.length > 0) {
      items = items.filter(item => 
        item.tags.some(tag => locationTags.includes(tag))
      );
    }

    if (categoryTags.length > 0) {
      items = items.filter(item => 
        item.tags.some(tag => categoryTags.includes(tag))
      );
    }

    if (selectedType !== 'daos' && stageTags.length > 0) {
      items = items.filter(item => 
        'stage' in item && stageTags.includes(item.stage)
      );
    }

    return items;
  };

  const filteredDAOs = filteredItems().filter(item => 'members' in item);
  const filteredProjects = filteredItems().filter(item => 'stage' in item);
  const hasResults = filteredDAOs.length > 0 || filteredProjects.length > 0;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Explore our Network</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-[#201E29] border border-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00BF63] w-64"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-[#201E29] border border-gray-800 rounded-lg text-white hover:border-[#00BF63] transition-colors"
          >
            <Filter className="h-5 w-5" />
            {isFilterOpen ? 'Close' : 'Filters'}
          </button>
        </div>
      </div>

      {/* Filters */}
      {isFilterOpen && (
        <div className="bg-[#201E29] border border-gray-800 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as 'all' | 'daos' | 'projects')}
                className="w-full bg-[#16141D] border border-gray-800 rounded-lg px-3 py-2 text-white"
              >
                <option value="all">All</option>
                <option value="daos">DAOs</option>
                <option value="projects">Projects</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onKeyDown={(e) => handleTagKeyDown(e, locationInput, setLocationTags, locationTags)}
                placeholder="Type and press Enter"
                className="w-full bg-[#16141D] border border-gray-800 rounded-lg px-3 py-2 text-white mb-2"
              />
              <div className="flex flex-wrap gap-2">
                {locationTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-[#00BF63]/10 text-[#00BF63] rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag, locationTags, setLocationTags)}
                      className="hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Tags</label>
              <input
                type="text"
                name="category"
                value={categoryInput}
                onChange={(e) => setCategoryInput(e.target.value)}
                onKeyDown={(e) => handleTagKeyDown(e, categoryInput, setCategoryTags, categoryTags)}
                placeholder="Type and press Enter"
                className="w-full bg-[#16141D] border border-gray-800 rounded-lg px-3 py-2 text-white mb-2"
              />
              <div className="flex flex-wrap gap-2">
                {categoryTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 bg-[#00BF63]/10 text-[#00BF63] rounded-full text-sm"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(tag, categoryTags, setCategoryTags)}
                      className="hover:text-white"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {selectedType !== 'daos' && (
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Stage</label>
                <select
                  value={stageTags[0] || ''}
                  onChange={(e) => setStageTags(e.target.value ? [e.target.value] : [])}
                  className="w-full bg-[#16141D] border border-gray-800 rounded-lg px-3 py-2 text-white"
                >
                  <option value="">All Stages</option>
                  {stageOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Recommended Section */}
      {!searchQuery && !locationTags.length && !categoryTags.length && !stageTags.length && (
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">⭐For you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedItems.map((item) => (
              <Link
                key={item.id}
                to={item.type === 'project' ? `/explore/project/${item.id}` : `/dao/${item.id}`}
                className="bg-[#201E29] border border-gray-800 rounded-xl p-6 hover:border-[#00BF63] transition-colors group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-lg">{item.name}</h3>
                      <span className="text-sm text-[#00BF63]">{item.match} match</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00BF63]" />
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#16141D] rounded-full text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {hasResults ? (
        <>
          {/* DAOs Section */}
          {(selectedType === 'all' || selectedType === 'daos') && filteredDAOs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-6">🔥DAOs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDAOs.map((item) => (
                  <Link
                    key={item.id}
                    to={`/explore/dao/${item.id}`}
                    className="bg-[#201E29] border border-gray-800 rounded-xl p-6 hover:border-[#00BF63] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Users className="h-4 w-4" />
                            <span>{item.members.toLocaleString()} members</span>
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00BF63]" />
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-2 text-[#00BF63]">
                        <Wallet className="h-4 w-4" />
                        <span>{item.tvl}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Vote className="h-4 w-4" />
                        <span>{item.activeProposals} active proposals</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#16141D] rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {(selectedType === 'all' || selectedType === 'projects') && filteredProjects.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-6">🔥Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((item) => (
                  <Link
                    key={item.id}
                    to={`/explore/project/${item.id}`}
                    className="bg-[#201E29] border border-gray-800 rounded-xl p-6 hover:border-[#00BF63] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-lg">{item.name}</h3>
                          <span className="text-sm text-[#00BF63]">{item.stage}</span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-[#00BF63]" />
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-[#16141D] rounded-full text-xs text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-400 mb-2">No results found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}