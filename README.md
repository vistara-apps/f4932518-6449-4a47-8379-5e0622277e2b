# Leveraged Legends

Master leveraged trading in a social, simulated sandbox on Base.

## Features

- 🎯 **Social Trading Terminal** - Practice leveraged trading with real-time data simulation
- 🏆 **Reputation & Leaderboards** - Compete with friends and build onchain trading reputation
- 💬 **Strategy Forums** - Share insights and learn from top performers
- ⚡ **Gasless Virtual Trading** - Seamless experience without gas fees
- 🎖️ **Onchain Achievements** - Earn verifiable badges for milestones

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit integration
- **Styling**: Tailwind CSS with BASE theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key from [Coinbase Developer Platform](https://portal.cdp.coinbase.com/)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit & React Query providers
│   ├── AppHeader.tsx   # App header with wallet connect
│   ├── BottomNav.tsx   # Bottom navigation
│   ├── TradingTerminal.tsx  # Main trading interface
│   ├── Portfolio.tsx   # Portfolio view
│   ├── Leaderboard.tsx # Leaderboard rankings
│   ├── PriceChart.tsx  # Price chart visualization
│   └── OrderForm.tsx   # Trade order form
├── layout.tsx          # Root layout
├── page.tsx           # Home page
└── globals.css        # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json # Farcaster Mini App manifest
```

## Key Features Implementation

### Virtual Trading
- Real-time price simulation
- Long/short positions with leverage (1x-10x)
- Portfolio tracking with P&L calculations
- Risk-free environment for skill development

### Social Integration
- Farcaster identity integration
- Leaderboard rankings
- Achievement badges
- Share trades on Farcaster

### BASE Theme
- Dark blue background (#0A1628)
- Base blue accents (#0052ff)
- Responsive mobile-first design
- Terminal-style UI elements

## Environment Variables

```env
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
NEXT_PUBLIC_BASE_RPC_URL=https://mainnet.base.org
NEXT_PUBLIC_BASE_TESTNET_RPC_URL=https://sepolia.base.org
```

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Make sure to add environment variables in your Vercel project settings.

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
