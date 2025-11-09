'use client';

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { PriceChart } from './PriceChart';
import { OrderForm } from './OrderForm';

interface Asset {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
}

const MOCK_ASSETS: Asset[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: 67659.96, change24h: 2.34 },
  { symbol: 'ETH', name: 'Ethereum', price: 3456.78, change24h: -1.23 },
  { symbol: 'SOL', name: 'Solana', price: 145.32, change24h: 5.67 },
  { symbol: 'BASE', name: 'Base Token', price: 1.23, change24h: 12.45 },
];

export function TradingTerminal() {
  const [selectedAsset, setSelectedAsset] = useState<Asset>(MOCK_ASSETS[0]);
  const [virtualBalance] = useState(10000);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedAsset(prev => ({
        ...prev,
        price: prev.price * (1 + (Math.random() - 0.5) * 0.002),
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Virtual Balance Card */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-fg/60 text-sm">Virtual Balance</span>
          <DollarSign className="w-5 h-5 text-accent" />
        </div>
        <div className="text-3xl font-bold text-fg">
          ${virtualBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
        </div>
        <div className="text-sm text-positive mt-1">+$234.56 (2.35%) Today</div>
      </div>

      {/* Asset Selector */}
      <div className="bg-surface rounded-2xl p-4 border border-white/10">
        <div className="grid grid-cols-2 gap-3">
          {MOCK_ASSETS.map((asset) => (
            <button
              key={asset.symbol}
              onClick={() => setSelectedAsset(asset)}
              className={`p-4 rounded-xl border transition-all duration-200 ${
                selectedAsset.symbol === asset.symbol
                  ? 'border-accent bg-accent/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-fg">{asset.symbol}</span>
                <span className={`text-xs font-medium ${
                  asset.change24h >= 0 ? 'text-positive' : 'text-negative'
                }`}>
                  {asset.change24h >= 0 ? '+' : ''}{asset.change24h.toFixed(2)}%
                </span>
              </div>
              <div className="text-sm text-fg/60">{asset.name}</div>
              <div className="text-lg font-bold text-fg mt-1">
                ${asset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Price Chart */}
      <div className="bg-surface rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-fg">{selectedAsset.symbol}/USD</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-2xl font-bold text-fg">
                ${selectedAsset.price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
              <span className={`flex items-center gap-1 text-sm font-medium ${
                selectedAsset.change24h >= 0 ? 'text-positive' : 'text-negative'
              }`}>
                {selectedAsset.change24h >= 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {Math.abs(selectedAsset.change24h).toFixed(2)}%
              </span>
            </div>
          </div>
        </div>
        <PriceChart asset={selectedAsset} />
      </div>

      {/* Order Form */}
      <OrderForm asset={selectedAsset} virtualBalance={virtualBalance} />
    </div>
  );
}
