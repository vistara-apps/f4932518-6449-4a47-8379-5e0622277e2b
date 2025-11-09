'use client';

interface PriceChartProps {
  asset: string;
}

export function PriceChart({ asset }: PriceChartProps) {
  // Simulated chart data
  const chartPoints = Array.from({ length: 50 }, (_, i) => {
    const base = 50;
    const variance = Math.sin(i / 5) * 20 + Math.random() * 10;
    return base + variance;
  });

  const maxValue = Math.max(...chartPoints);
  const minValue = Math.min(...chartPoints);
  const range = maxValue - minValue;

  return (
    <div className="bg-surface rounded-2xl p-4 border border-fg/10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-fg">{asset}</h3>
          <p className="text-2xl font-bold text-positive font-mono">$87,659.96</p>
          <p className="text-sm text-positive">+$2,034.52 (+2.38%)</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg bg-accent text-white text-xs font-medium">1D</button>
          <button className="px-3 py-1 rounded-lg bg-bg text-fg/60 text-xs font-medium">1W</button>
          <button className="px-3 py-1 rounded-lg bg-bg text-fg/60 text-xs font-medium">1M</button>
        </div>
      </div>

      {/* Chart SVG */}
      <div className="relative h-48 w-full">
        <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="37.5" x2="400" y2="37.5" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          <line x1="0" y1="112.5" x2="400" y2="112.5" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

          {/* Area gradient */}
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-positive)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-positive)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Chart path */}
          <path
            d={`M 0 ${150 - ((chartPoints[0] - minValue) / range) * 150} ${chartPoints
              .map((point, i) => {
                const x = (i / (chartPoints.length - 1)) * 400;
                const y = 150 - ((point - minValue) / range) * 150;
                return `L ${x} ${y}`;
              })
              .join(' ')} L 400 150 L 0 150 Z`}
            fill="url(#chartGradient)"
          />
          <path
            d={`M 0 ${150 - ((chartPoints[0] - minValue) / range) * 150} ${chartPoints
              .map((point, i) => {
                const x = (i / (chartPoints.length - 1)) * 400;
                const y = 150 - ((point - minValue) / range) * 150;
                return `L ${x} ${y}`;
              })
              .join(' ')}`}
            fill="none"
            stroke="var(--color-positive)"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
