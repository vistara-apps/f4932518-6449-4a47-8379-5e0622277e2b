'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { PriceChart } from './PriceChart';

export function TradingTerminal() {
  const [selectedAsset, setSelectedAsset] = useState('BTC/USD');
  const [tradeType, setTradeType] = useState<'long' | 'short'>('long');
  const [leverage, setLeverage] = useState(10);
  const [amount, setAmount] = useState('');

  const assets = [
    { symbol: 'BTC/USD', price: 87659.96, change: 2.34, positive: true },
    { symbol: 'ETH/USD', price: 3245.12, change: -1.23, positive: false },
    { symbol: 'SOL/USD', price: 178.45, change: 5.67, positive: true },
  ];

  return (
    <div className="p-4 space-y-4">
      {/* Asset Selector */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-fg">Markets</h2>
          <span className="text-xs text-fg/60 font-mono">Real-time</span>
        </div>
        <div className="space-y-2">
          {assets.map((asset) => (
            <button
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset.symbol)}
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                selectedAsset === asset.symbol
                  ? 'bg-accent/10 border border-accent/30'
                  : 'bg-bg hover:bg-bg/80 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  asset.positive ? 'bg-positive/10' : 'bg-negative/10'
                }`}>
                  {asset.positive ? (
                    <TrendingUp size={20} className="text-positive" />
                  ) : (
                    <TrendingDown size={20} className="text-negative" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-bold text-fg">{asset.symbol}</p>
                  <p className="text-xs text-fg/60 font-mono">${asset.price.toLocaleString()}</p>
                </div>
              </div>
              <div className={`text-right ${asset.positive ? 'text-positive' : 'text-negative'}`}>
                <p className="font-bold">{asset.positive ? '+' : ''}{asset.change}%</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Chart */}
      <PriceChart asset={selectedAsset} />

      {/* Trade Form */}
      <div className="bg-surface rounded-2xl p-4 border border-fg/10">
        <h3 className="text-lg font-bold text-fg mb-4">Place Trade</h3>
        
        {/* Long/Short Toggle */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setTradeType('long')}
            className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
              tradeType === 'long'
                ? 'bg-positive text-white'
                : 'bg-bg text-fg/60 hover:bg-bg/80'
            }`}
          >
            <ArrowUpRight size={20} className="inline mr-2" />
            Long
          </button>
          <button
            onClick={() => setTradeType('short')}
            className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
              tradeType === 'short'
                ? 'bg-negative text-white'
                : 'bg-bg text-fg/60 hover:bg-bg/80'
            }`}
          >
            <ArrowDownRight size={20} className="inline mr-2" />
            Short
          </button>
        </div>

        {/* Amount Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-fg/80 mb-2">Amount (USD)</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full px-4 py-3 rounded-xl bg-bg border border-fg/10 text-fg font-mono text-lg focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Leverage Slider */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-fg/80">Leverage</label>
            <span className="text-accent font-bold">{leverage}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={leverage}
            onChange={(e) => setLeverage(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${leverage}%, rgba(255,255,255,0.1) ${leverage}%, rgba(255,255,255,0.1) 100%)`
            }}
          />
          <div className="flex justify-between text-xs text-fg/60 mt-1">
            <span>1x</span>
            <span>50x</span>
            <span>100x</span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          className={`w-full py-4 rounded-xl font-bold text-white transition-colors ${
            tradeType === 'long'
              ? 'bg-positive hover:bg-positive/90'
              : 'bg-negative hover:bg-negative/90'
          }`}
        >
          Open {tradeType === 'long' ? 'Long' : 'Short'} Position
        </button>

        {/* Trade Info */}
        <div className="mt-4 p-3 rounded-xl bg-bg border border-fg/10">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-fg/60">Entry Price</span>
            <span className="text-fg font-mono">$87,659.96</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-fg/60">Position Size</span>
            <span className="text-fg font-mono">${amount || '0.00'}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Liquidation Price</span>
            <span className="text-negative font-mono">$79,193.96</span>
          </div>
        </div>
      </div>
    </div>
  );
}
