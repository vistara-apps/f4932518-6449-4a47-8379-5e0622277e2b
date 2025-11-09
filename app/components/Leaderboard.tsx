'use client';

import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  avatar: string;
  profit: number;
  profitPercent: number;
  trades: number;
  winRate: number;
}

const MOCK_LEADERBOARD: LeaderboardEntry[] = [
  {
    rank: 1,
    username: 'cryptoking.eth',
    avatar: '👑',
    profit: 15234.56,
    profitPercent: 152.35,
    trades: 234,
    winRate: 78.2,
  },
  {
    rank: 2,
    username: 'traderpro',
    avatar: '🚀',
    profit: 12456.78,
    profitPercent: 124.57,
    trades: 189,
    winRate: 72.5,
  },
  {
    rank: 3,
    username: 'moonshot',
    avatar: '🌙',
    profit: 9876.54,
    profitPercent: 98.77,
    trades: 156,
    winRate: 69.8,
  },
  {
    rank: 4,
    username: 'degentrader',
    avatar: '💎',
    profit: 8234.12,
    profitPercent: 82.34,
    trades: 201,
    winRate: 65.4,
  },
  {
    rank: 5,
    username: 'hodlmaster',
    avatar: '🔥',
    profit: 7123.45,
    profitPercent: 71.23,
    trades: 143,
    winRate: 68.9,
  },
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-fg/60 font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-accent" />
          <h2 className="text-2xl font-bold text-fg">Top Traders</h2>
        </div>
        <p className="text-fg/60">Compete with the best virtual traders on Base</p>
      </div>

      {/* Your Rank Card */}
      <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl p-6 border border-accent/30">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <div className="text-sm text-fg/60">Your Rank</div>
              <div className="text-xl font-bold text-fg">you.base</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-accent">#42</div>
            <div className="text-sm text-fg/60">of 1,234</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
          <div>
            <div className="text-xs text-fg/60 mb-1">Profit</div>
            <div className="text-sm font-bold text-positive">+$2,345</div>
          </div>
          <div>
            <div className="text-xs text-fg/60 mb-1">Trades</div>
            <div className="text-sm font-bold text-fg">47</div>
          </div>
          <div>
            <div className="text-xs text-fg/60 mb-1">Win Rate</div>
            <div className="text-sm font-bold text-fg">68.1%</div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <div className="space-y-3">
          {MOCK_LEADERBOARD.map((entry) => (
            <div
              key={entry.rank}
              className={`bg-bg rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02] ${
                entry.rank <= 3
                  ? 'border-accent/30 hover:border-accent/50'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className="w-12 flex items-center justify-center">
                  {getRankIcon(entry.rank)}
                </div>

                {/* Avatar & Username */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{entry.avatar}</span>
                    <span className="font-semibold text-fg">{entry.username}</span>
                  </div>
                  <div className="text-xs text-fg/60">
                    {entry.trades} trades • {entry.winRate}% win rate
                  </div>
                </div>

                {/* Stats */}
                <div className="text-right">
                  <div className="text-lg font-bold text-positive flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    +${entry.profit.toLocaleString()}
                  </div>
                  <div className="text-sm text-positive">
                    +{entry.profitPercent.toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <button className="w-full mt-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-fg font-medium transition-colors duration-200">
          Load More Traders
        </button>
      </div>

      {/* Achievement Badges */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-fg mb-4">Your Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {['🏆', '💎', '🚀', '🔥', '⭐', '🎯'].map((badge, i) => (
            <div
              key={i}
              className="aspect-square bg-bg rounded-xl border border-white/10 flex items-center justify-center text-4xl hover:scale-110 transition-transform duration-200 cursor-pointer"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
