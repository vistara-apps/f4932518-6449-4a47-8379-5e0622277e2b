'use client';

import { useEffect, useRef, useState } from 'react';

interface Asset {
  symbol: string;
  price: number;
  change24h: number;
}

interface PriceChartProps {
  asset: Asset;
}

export function PriceChart({ asset }: PriceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);

  useEffect(() => {
    // Initialize with some historical data
    const initialData = Array.from({ length: 50 }, (_, i) => 
      asset.price * (1 + Math.sin(i / 5) * 0.02)
    );
    setPriceHistory(initialData);
  }, [asset.symbol]);

  useEffect(() => {
    // Add new price point
    setPriceHistory(prev => [...prev.slice(-49), asset.price]);
  }, [asset.price]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || priceHistory.length < 2) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = 20;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Calculate min/max for scaling
    const minPrice = Math.min(...priceHistory);
    const maxPrice = Math.max(...priceHistory);
    const priceRange = maxPrice - minPrice || 1;

    // Draw grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padding + (height - 2 * padding) * (i / 4);
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw price line
    const isPositive = asset.change24h >= 0;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, isPositive ? 'rgba(34, 197, 94, 0.3)' : 'rgba(239, 68, 68, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.beginPath();
    priceHistory.forEach((price, i) => {
      const x = padding + (width - 2 * padding) * (i / (priceHistory.length - 1));
      const y = height - padding - ((price - minPrice) / priceRange) * (height - 2 * padding);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    // Fill area under line
    const lastX = padding + (width - 2 * padding);
    const lastY = height - padding - ((priceHistory[priceHistory.length - 1] - minPrice) / priceRange) * (height - 2 * padding);
    ctx.lineTo(lastX, height - padding);
    ctx.lineTo(padding, height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw line on top
    ctx.beginPath();
    priceHistory.forEach((price, i) => {
      const x = padding + (width - 2 * padding) * (i / (priceHistory.length - 1));
      const y = height - padding - ((price - minPrice) / priceRange) * (height - 2 * padding);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.strokeStyle = isPositive ? '#22c55e' : '#ef4444';
    ctx.lineWidth = 2;
    ctx.stroke();

  }, [priceHistory, asset.change24h]);

  return (
    <div className="relative w-full h-64">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
