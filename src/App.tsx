import React, { useRef, useState, useEffect } from 'react';
import { Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Discover } from './components/Discover';
import { ArrowRight, Upload, Users, Target, BarChart3, Network, Building2, Brain, ClipboardCheck, Vote, Shield, MessageSquare } from 'lucide-react';
import { FeatureMockups } from './components/FeatureMockups';
import { MetaManager } from './components/MetaManager';
import { Startups } from './pages/Startups';
import { Investors } from './pages/Investors';
import { DAOs } from './pages/DAOs';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { DashboardLayout } from './components/DashboardLayout';
import { UserProfile } from './components/UserProfile';
import { CreateDAO } from './pages/CreateDAO';
import { CreateProject } from './pages/CreateProject';
import { Dashboard } from './components/Dashboard';
import { Explore } from './pages/Explore';
import { DAODetail } from './pages/DAODetail';
import { DAOPublicView } from './pages/DAOPublicView';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProjectPublicView } from './pages/ProjectPublicView';
import { Messages } from './pages/Messages';
import { Transactions } from './pages/Transactions';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const startupsRef = useRef<HTMLDivElement>(null);
  const investorsRef = useRef<HTMLDivElement>(null);
  const daosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Check if we're in the dashboard
  const isDashboard = location.pathname.startsWith('/dashboard') || 
                     location.pathname.startsWith('/dao/') ||
                     location.pathname.startsWith('/project/') ||
                     location.pathname === '/explore' || 
                     location.pathname === '/messages' ||
                     location.pathname === '/transactions' ||
                     location.pathname === '/profile' ||
                     location.pathname === '/create-dao' ||
                     location.pathname === '/create-project';

  // Check if we're in a public view
  const isPublicView = location.pathname.startsWith('/explore/');

  if (isDashboard && !isPublicView) {
    return (
      <DashboardLayout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/create-dao" element={<CreateDAO />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/dao/:id" element={<DAODetail />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </DashboardLayout>
    );
  }

  if (isPublicView) {
    return (
      <div className="min-h-screen bg-[#16141D] text-white font-montserrat p-8">
        <Routes>
          <Route path="/explore/project/:id" element={<ProjectPublicView />} />
          <Route path="/explore/dao/:id" element={<DAOPublicView />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#16141D] text-white font-montserrat pt-16">
      <MetaManager />
      <Header 
        onNavClick={(section) => {
          if (location.pathname === '/') {
            if (section === 'startups') scrollToSection(startupsRef);
            if (section === 'investors') scrollToSection(investorsRef);
            if (section === 'daos') scrollToSection(daosRef);
          }
        }}
      />
      
      <Routes>
        <Route path="/" element={
          <main className="relative pt-32">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">
                  Revolutionizing Startup Funding Through Decentralized Autonomy
                </h1>
                <p className="text-xl text-gray-400 mb-8">
                  Join the future of collaborative investing where startups, investors, and DAOs unite to create unprecedented opportunities.
                </p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => handleNavigation('/dashboard')}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                  >
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleNavigation('/explore')}
                    className="bg-white bg-opacity-10 text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-20 transition-opacity"
                  >
                    Explore Projects
                  </button>
                </div>
              </div>

              <FeatureMockups />

              <div ref={startupsRef}>
                <Startups />
              </div>

              <div ref={investorsRef}>
                <Investors />
              </div>

              <div ref={daosRef}>
                <DAOs />
              </div>

              <Discover />
            </div>
          </main>
        } />
        <Route path="/startups" element={<Startups />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/daos" element={<DAOs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;