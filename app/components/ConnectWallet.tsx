'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <button
      onClick={() => setIsConnected(!isConnected)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent/90 transition-colors"
    >
      <Wallet size={16} />
      {isConnected ? '0x1234...5678' : 'Connect'}
    </button>
  );
}
