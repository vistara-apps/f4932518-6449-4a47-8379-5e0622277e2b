'use client';

import { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface Asset {
  symbol: string;
  price: number;
}

interface OrderFormProps {
  asset: Asset;
  virtualBalance: number;
}

export function OrderForm({ asset, virtualBalance }: OrderFormProps) {
  const [orderType, setOrderType] = useState<'long' | 'short'>('long');
  const [amount, setAmount] = useState('');
  const [leverage, setLeverage] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate trade execution
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setAmount('');
    }, 3000);
  };

  const maxAmount = virtualBalance / asset.price;
  const totalValue = parseFloat(amount || '0') * asset.price * leverage;

  return (
    <div className="bg-surface rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-fg mb-6">Place Virtual Trade</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Order Type Toggle */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setOrderType('long')}
            className={`py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
              orderType === 'long'
                ? 'bg-positive text-white glow-positive'
                : 'bg-white/5 text-fg/60 hover:bg-white/10'
            }`}
          >
            <TrendingUp className="w-5 h-5 mx-auto mb-1" />
            Long
          </button>
          <button
            type="button"
            onClick={() => setOrderType('short')}
            className={`py-4 px-6 rounded-xl font-semibold transition-all duration-200 ${
              orderType === 'short'
                ? 'bg-negative text-white glow-negative'
                : 'bg-white/5 text-fg/60 hover:bg-white/10'
            }`}
          >
            <TrendingDown className="w-5 h-5 mx-auto mb-1" />
            Short
          </button>
        </div>

        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-fg/70 mb-2">
            Amount ({asset.symbol})
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              step="0.01"
              min="0"
              max={maxAmount}
              className="w-full bg-bg border border-white/10 rounded-xl px-4 py-3 text-fg font-mono text-lg focus:outline-none focus:border-accent transition-colors duration-200"
              required
            />
            <button
              type="button"
              onClick={() => setAmount((maxAmount / 2).toFixed(4))}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-accent hover:text-accent/80"
            >
              MAX
            </button>
          </div>
          <div className="text-xs text-fg/50 mt-1">
            Available: {maxAmount.toFixed(4)} {asset.symbol}
          </div>
        </div>

        {/* Leverage Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium text-fg/70">Leverage</label>
            <span className="text-lg font-bold text-accent">{leverage}x</span>
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={leverage}
            onChange={(e) => setLeverage(parseInt(e.target.value))}
            className="w-full h-2 bg-bg rounded-lg appearance-none cursor-pointer accent-accent"
          />
          <div className="flex justify-between text-xs text-fg/50 mt-1">
            <span>1x</span>
            <span>5x</span>
            <span>10x</span>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-bg rounded-xl p-4 space-y-2 border border-white/5">
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Entry Price</span>
            <span className="font-mono text-fg">${asset.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Position Size</span>
            <span className="font-mono text-fg">${totalValue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-fg/60">Direction</span>
            <span className={`font-semibold ${
              orderType === 'long' ? 'text-positive' : 'text-negative'
            }`}>
              {orderType.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!amount || parseFloat(amount) <= 0}
          className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
            orderType === 'long'
              ? 'bg-positive hover:bg-positive/90 disabled:bg-positive/50'
              : 'bg-negative hover:bg-negative/90 disabled:bg-negative/50'
          } disabled:cursor-not-allowed`}
        >
          Place {orderType === 'long' ? 'Long' : 'Short'} Trade
        </button>
      </form>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-positive text-white px-6 py-3 rounded-xl shadow-lg animate-bounce">
          ✓ Virtual trade executed successfully!
        </div>
      )}
    </div>
  );
}
