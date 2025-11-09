# Leveraged Legends

Master leveraged trading in a social, simulated sandbox on Base.

## Features

- 🎯 **Social Trading Terminal** - Simulated leveraged trading with real-time data
- 🏆 **Reputation & Leaderboards** - Compete with friends and build onchain reputation
- 💬 **Collaborative Strategy Forums** - Share insights and learn from top traders
- ⚡ **Gasless Virtual Trading** - Seamless experience without gas fees
- 🎖️ **Onchain Identity & Achievements** - Persistent trader identity with verifiable badges

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Base Mini App Integration

This app is designed to run as a Farcaster Mini App with:
- Farcaster user context integration
- OnchainKit for Base blockchain interactions
- Gasless transactions via Paymaster
- Social sharing and notifications

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
