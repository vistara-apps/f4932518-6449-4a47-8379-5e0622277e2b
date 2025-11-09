'use client';

import { TrendingUp, BarChart3, Trophy, MessageSquare } from 'lucide-react';

type Tab = 'terminal' | 'portfolio' | 'leaderboard' | 'forum';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: 'terminal' as Tab, icon: TrendingUp, label: 'Trade' },
    { id: 'portfolio' as Tab, icon: BarChart3, label: 'Portfolio' },
    { id: 'leaderboard' as Tab, icon: Trophy, label: 'Leaders' },
    { id: 'forum' as Tab, icon: MessageSquare, label: 'Forum' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-accent/20 text-accent'
                    : 'text-fg/60 hover:text-fg hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
