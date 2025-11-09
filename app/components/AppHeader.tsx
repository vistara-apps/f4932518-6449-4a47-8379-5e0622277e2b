'use client';

import { Wallet } from 'lucide-react';
import { ConnectWallet } from '@coinbase/onchainkit/wallet';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-white font-bold text-xl">LL</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-fg">Leveraged Legends</h1>
            <p className="text-xs text-fg/60">Virtual Trading Sandbox</p>
          </div>
        </div>
        
        <ConnectWallet />
      </div>
    </header>
  );
}
