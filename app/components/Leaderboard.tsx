'use client';

import { Trophy, TrendingUp, Medal } from 'lucide-react';

export function Leaderboard() {
  const leaders = [
    { rank: 1, username: 'cryptoking', displayName: 'Crypto King', profit: 295853, profitPercent: 147.93, trades: 1234, avatar: '👑' },
    { rank: 2, username: 'traderpro', displayName: 'Trader Pro', profit: 258476, profitPercent: 129.24, trades: 987, avatar: '🚀' },
    { rank: 3, username: 'moonshot', displayName: 'Moon Shot', profit: 234567, profitPercent: 117.28, trades: 856, avatar: '🌙' },
    { rank: 4, username: 'hodlmaster', displayName: 'HODL Master', profit: 198234, profitPercent: 99.12, trades: 743, avatar: '💎' },
    { rank: 5, username: 'degentrader', displayName: 'Degen Trader', profit: 176543, profitPercent: 88.27, trades: 654, avatar: '🎲' },
  ];

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'text-yellow-400';
    if (rank === 2) return 'text-gray-300';
    if (rank === 3) return 'text-orange-400';
    return 'text-fg/60';
  };

  const getRankIcon = (rank: number) => {
    if (rank <= 3) return <Trophy size={20} className={getRankColor(rank)} />;
    return <Medal size={20} className="text-fg/40" />;
  };

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="bg-surface rounded-2xl p-6 border border-fg/10 text-center">
        <Trophy size={48} className="mx-auto mb-4 text-accent" />
        <h2 className="text-2xl font-bold text-fg mb-2">Global Leaderboard</h2>
        <p className="text-fg/60">Top traders by virtual profit</p>
      </div>

      {/* Your Rank */}
      <div className="bg-accent/10 rounded-2xl p-4 border border-accent/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-2xl">
              🎯
            </div>
            <div>
              <p className="font-bold text-fg">Your Rank</p>
              <p className="text-sm text-fg/60">@yourname</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-accent">#42</p>
            <p className="text-sm text-positive">+$12,345</p>
          </div>
        </div>
      </div>

      {/* Top Traders */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-fg">Top Traders</h3>
          <button className="text-sm text-accent font-medium">View All</button>
        </div>
        <div className="space-y-3">
          {leaders.map((leader) => (
            <div
              key={leader.rank}
              className="bg-bg rounded-xl p-4 border border-fg/10 hover:border-accent/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl border-2 border-fg/10">
                      {leader.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-bg flex items-center justify-center border-2 border-bg">
                      {getRankIcon(leader.rank)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-fg">{leader.displayName}</p>
                    <p className="text-xs text-fg/60">@{leader.username}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-positive">
                    +${leader.profit.toLocaleString()}
                  </p>
                  <p className="text-xs text-positive">+{leader.profitPercent}%</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-fg/60">
                  <TrendingUp size={14} />
                  <span>{leader.trades} trades</span>
                </div>
                <button className="px-3 py-1 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors">
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
