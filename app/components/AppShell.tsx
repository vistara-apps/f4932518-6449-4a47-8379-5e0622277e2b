'use client';

import { type ReactNode } from 'react';
import { ConnectWallet } from './ConnectWallet';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-fg/10">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-white font-bold text-sm">LL</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-fg">Leveraged Legends</h1>
              <p className="text-xs text-positive font-mono">+$1,472.42</p>
            </div>
          </div>
          <ConnectWallet />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">{children}</main>
    </div>
  );
}
