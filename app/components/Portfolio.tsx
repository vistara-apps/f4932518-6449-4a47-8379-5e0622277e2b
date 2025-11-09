'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

interface Position {
  id: string;
  symbol: string;
  type: 'long' | 'short';
  entryPrice: number;
  currentPrice: number;
  amount: number;
  leverage: number;
  pnl: number;
  pnlPercent: number;
}

const MOCK_POSITIONS: Position[] = [
  {
    id: '1',
    symbol: 'BTC',
    type: 'long',
    entryPrice: 65000,
    currentPrice: 67659.96,
    amount: 0.5,
    leverage: 3,
    pnl: 3989.88,
    pnlPercent: 12.28,
  },
  {
    id: '2',
    symbol: 'ETH',
    type: 'short',
    entryPrice: 3500,
    currentPrice: 3456.78,
    amount: 2,
    leverage: 2,
    pnl: 86.44,
    pnlPercent: 2.47,
  },
];

export function Portfolio() {
  const [positions] = useState<Position[]>(MOCK_POSITIONS);

  const totalPnL = positions.reduce((sum, pos) => sum + pos.pnl, 0);
  const totalValue = 10000 + totalPnL;

  return (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-fg">Portfolio Value</h2>
          <Activity className="w-6 h-6 text-accent" />
        </div>
        
        <div className="text-4xl font-bold text-fg mb-2">
          ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        
        <div className={`flex items-center gap-2 text-lg font-semibold ${
          totalPnL >= 0 ? 'text-positive' : 'text-negative'
        }`}>
          {totalPnL >= 0 ? (
            <TrendingUp className="w-5 h-5" />
          ) : (
            <TrendingDown className="w-5 h-5" />
          )}
          {totalPnL >= 0 ? '+' : ''}${Math.abs(totalPnL).toFixed(2)} (
          {((totalPnL / 10000) * 100).toFixed(2)}%)
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface rounded-xl p-4 border border-white/10">
          <div className="text-fg/60 text-sm mb-1">Total Trades</div>
          <div className="text-2xl font-bold text-fg">47</div>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-white/10">
          <div className="text-fg/60 text-sm mb-1">Win Rate</div>
          <div className="text-2xl font-bold text-positive">68.1%</div>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-white/10">
          <div className="text-fg/60 text-sm mb-1">Best Trade</div>
          <div className="text-2xl font-bold text-positive">+$1,234</div>
        </div>
        <div className="bg-surface rounded-xl p-4 border border-white/10">
          <div className="text-fg/60 text-sm mb-1">Avg Leverage</div>
          <div className="text-2xl font-bold text-accent">2.5x</div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-fg mb-4">Open Positions</h3>
        
        {positions.length === 0 ? (
          <div className="text-center py-12">
            <DollarSign className="w-12 h-12 mx-auto mb-3 text-fg/30" />
            <p className="text-fg/60">No open positions</p>
            <p className="text-sm text-fg/40 mt-1">Start trading to see your positions here</p>
          </div>
        ) : (
          <div className="space-y-3">
            {positions.map((position) => (
              <div
                key={position.id}
                className="bg-bg rounded-xl p-4 border border-white/10 hover:border-white/20 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      position.type === 'long' ? 'bg-positive/20' : 'bg-negative/20'
                    }`}>
                      {position.type === 'long' ? (
                        <TrendingUp className="w-5 h-5 text-positive" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-negative" />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-fg">{position.symbol}/USD</div>
                      <div className="text-xs text-fg/60">
                        {position.leverage}x {position.type.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className={`text-lg font-bold ${
                      position.pnl >= 0 ? 'text-positive' : 'text-negative'
                    }`}>
                      {position.pnl >= 0 ? '+' : ''}${position.pnl.toFixed(2)}
                    </div>
                    <div className={`text-sm ${
                      position.pnl >= 0 ? 'text-positive' : 'text-negative'
                    }`}>
                      {position.pnl >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-fg/60 mb-1">Entry</div>
                    <div className="font-mono text-fg">${position.entryPrice.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-fg/60 mb-1">Current</div>
                    <div className="font-mono text-fg">${position.currentPrice.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-fg/60 mb-1">Amount</div>
                    <div className="font-mono text-fg">{position.amount} {position.symbol}</div>
                  </div>
                </div>
                
                <button className="w-full mt-3 py-2 bg-negative/20 hover:bg-negative/30 text-negative rounded-lg text-sm font-medium transition-colors duration-200">
                  Close Position
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
