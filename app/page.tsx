'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { TradingTerminal } from './components/TradingTerminal';
import { Portfolio } from './components/Portfolio';
import { Leaderboard } from './components/Leaderboard';
import { AppHeader } from './components/AppHeader';
import { BottomNav } from './components/BottomNav';
import { TrendingUp, BarChart3, Trophy, MessageSquare } from 'lucide-react';

type Tab = 'terminal' | 'portfolio' | 'leaderboard' | 'forum';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('terminal');
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
          <p className="text-fg text-lg">Loading Leveraged Legends...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg text-fg flex flex-col">
      <AppHeader />
      
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {activeTab === 'terminal' && <TradingTerminal />}
          {activeTab === 'portfolio' && <Portfolio />}
          {activeTab === 'leaderboard' && <Leaderboard />}
          {activeTab === 'forum' && (
            <div className="text-center py-20">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 text-accent" />
              <h2 className="text-2xl font-semibold mb-2">Strategy Forums</h2>
              <p className="text-fg/70">Coming soon - Share strategies and learn from top traders</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
