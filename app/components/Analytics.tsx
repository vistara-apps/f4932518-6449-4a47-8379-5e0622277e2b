'use client';

import { TrendingUp, Target, Award, Activity } from 'lucide-react';

export function Analytics() {
  const stats = [
    { label: 'Win Rate', value: '67.8%', icon: Target, color: 'text-positive' },
    { label: 'Avg Profit', value: '+$234.56', icon: TrendingUp, color: 'text-positive' },
    { label: 'Total Trades', value: '234', icon: Activity, color: 'text-accent' },
    { label: 'Achievements', value: '12', icon: Award, color: 'text-yellow-400' },
  ];

  const recentTrades = [
    { symbol: 'BTC/USD', type: 'Long', profit: 284.52, time: '2h ago', positive: true },
    { symbol: 'ETH/USD', type: 'Short', profit: 101.58, time: '5h ago', positive: true },
    { symbol: 'SOL/USD', type: 'Long', profit: -45.23, time: '1d ago', positive: false },
    { symbol: 'BTC/USD', type: 'Short', profit: 567.89, time: '2d ago', positive: true },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-surface rounded-2xl p-4 border border-fg/10">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon size={20} className={stat.color} />
              <p className="text-xs text-fg/60">{stat.label}</p>
            </div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Performance Chart */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Performance</h3>
        <div className="h-48 flex items-end justify-between gap-2">
          {[65, 72, 58, 81, 69, 88, 75, 92, 78, 85, 91, 87].map((height, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-accent rounded-t-lg transition-all hover:bg-accent/80"
                style={{ height: `${height}%` }}
              />
              <span className="text-xs text-fg/40">{i + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Recent Trades</h3>
        <div className="space-y-3">
          {recentTrades.map((trade, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-bg rounded-xl border border-fg/10">
              <div>
                <p className="font-bold text-fg">{trade.symbol}</p>
                <p className="text-xs text-fg/60">{trade.type} • {trade.time}</p>
              </div>
              <p className={`font-bold ${trade.positive ? 'text-positive' : 'text-negative'}`}>
                {trade.positive ? '+' : ''}${Math.abs(trade.profit).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Achievements</h3>
        <div className="grid grid-cols-3 gap-3">
          {['🏆', '💎', '🚀', '🎯', '⚡', '🌟'].map((emoji, i) => (
            <div key={i} className="aspect-square bg-bg rounded-xl border border-fg/10 flex items-center justify-center text-4xl hover:border-accent/30 transition-colors">
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
