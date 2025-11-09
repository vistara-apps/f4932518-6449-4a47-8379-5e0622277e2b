'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { TradingTerminal } from './components/TradingTerminal';
import { Portfolio } from './components/Portfolio';
import { Leaderboard } from './components/Leaderboard';
import { Analytics } from './components/Analytics';
import { AppShell } from './components/AppShell';
import { Home, TrendingUp, Trophy, BarChart3 } from 'lucide-react';

type Tab = 'home' | 'portfolio' | 'leaderboard' | 'analytics';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg/60">Loading Leveraged Legends...</p>
        </div>
      </div>
    );
  }

  return (
    <AppShell>
      <div className="flex flex-col h-screen">
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-20">
          {activeTab === 'home' && <TradingTerminal />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'leaderboard' && <Leaderboard />}
          {activeTab === 'analytics' && <Analytics />}
        </div>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-fg/10 px-4 py-3 safe-area-inset-bottom">
          <div className="flex items-center justify-around max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'home' ? 'text-accent' : 'text-fg/60'
              }`}
            >
              <Home size={24} />
              <span className="text-xs font-medium">Trade</span>
            </button>
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'portfolio' ? 'text-accent' : 'text-fg/60'
              }`}
            >
              <TrendingUp size={24} />
              <span className="text-xs font-medium">Portfolio</span>
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'leaderboard' ? 'text-accent' : 'text-fg/60'
              }`}
            >
              <Trophy size={24} />
              <span className="text-xs font-medium">Leaders</span>
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'analytics' ? 'text-accent' : 'text-fg/60'
              }`}
            >
              <BarChart3 size={24} />
              <span className="text-xs font-medium">Analytics</span>
            </button>
          </div>
        </nav>
      </div>
    </AppShell>
  );
}
