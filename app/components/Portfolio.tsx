'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';

export function Portfolio() {
  const positions = [
    {
      id: 1,
      symbol: 'BTC/USD',
      type: 'Long',
      entry: 85234.50,
      current: 87659.96,
      size: 1000,
      leverage: 10,
      pnl: 284.52,
      pnlPercent: 28.45,
      positive: true,
    },
    {
      id: 2,
      symbol: 'ETH/USD',
      type: 'Short',
      entry: 3312.45,
      current: 3245.12,
      size: 500,
      leverage: 5,
      pnl: 101.58,
      pnlPercent: 20.32,
      positive: true,
    },
    {
      id: 3,
      symbol: 'SOL/USD',
      type: 'Long',
      entry: 185.23,
      current: 178.45,
      size: 300,
      leverage: 15,
      pnl: -305.40,
      pnlPercent: -15.27,
      positive: false,
    },
  ];

  const totalPnL = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const totalPnLPercent = (totalPnL / positions.reduce((sum, pos) => sum + pos.size, 0)) * 100;

  return (
    <div className="p-4 space-y-4">
      {/* Portfolio Summary */}
      <div className="bg-surface rounded-2xl p-6 border border-fg/10">
        <div className="text-center mb-6">
          <p className="text-sm text-fg/60 mb-2">Total Portfolio Value</p>
          <h2 className="text-4xl font-bold text-fg mb-2">$6,328,478</h2>
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            totalPnL >= 0 ? 'bg-positive/10 text-positive' : 'bg-negative/10 text-negative'
          }`}>
            {totalPnL >= 0 ? <TrendingUp size={20} /> : <TrendingDown size={20} />}
            <span className="font-bold">
              {totalPnL >= 0 ? '+' : ''}${Math.abs(totalPnL).toFixed(2)} ({totalPnL >= 0 ? '+' : ''}{totalPnLPercent.toFixed(2)}%)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-xs text-fg/60 mb-1">Open Positions</p>
            <p className="text-xl font-bold text-fg">{positions.length}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-fg/60 mb-1">Win Rate</p>
            <p className="text-xl font-bold text-positive">67.8%</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-fg/60 mb-1">Total Trades</p>
            <p className="text-xl font-bold text-fg">234</p>
          </div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Open Positions</h3>
        <div className="space-y-3">
          {positions.map((position) => (
            <div
              key={position.id}
              className="bg-bg rounded-xl p-4 border border-fg/10"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    position.positive ? 'bg-positive/10' : 'bg-negative/10'
                  }`}>
                    {position.positive ? (
                      <TrendingUp size={20} className="text-positive" />
                    ) : (
                      <TrendingDown size={20} className="text-negative" />
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-fg">{position.symbol}</p>
                    <p className="text-xs text-fg/60">
                      {position.type} • {position.leverage}x
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${position.positive ? 'text-positive' : 'text-negative'}`}>
                    {position.positive ? '+' : ''}${Math.abs(position.pnl).toFixed(2)}
                  </p>
                  <p className={`text-xs ${position.positive ? 'text-positive' : 'text-negative'}`}>
                    {position.positive ? '+' : ''}{position.pnlPercent.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <p className="text-fg/60">Entry</p>
                  <p className="text-fg font-mono">${position.entry.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-fg/60">Current</p>
                  <p className="text-fg font-mono">${position.current.toFixed(2)}</p>
                </div>
                <div>
                  <p className="text-fg/60">Size</p>
                  <p className="text-fg font-mono">${position.size}</p>
                </div>
              </div>
              <button className="w-full mt-3 py-2 rounded-lg bg-negative/10 text-negative font-medium text-sm hover:bg-negative/20 transition-colors">
                Close Position
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
