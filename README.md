# APESHIT AI

An interactive jungle token scanner featuring a cartoon monkey at his computer.

- Watch the monkey type a Solana contract address or pump.fun token URL.
- See synchronized market data on his monitor and the scan side window.
- Seven positive and seven negative verdict reactions, banana snacks and occasional beer breaks.
- Temporary screen splats disappear after 1.5 seconds.
- Live Pump token market sample refreshes every minute.
- Shared submission history stored in Cloudflare D1.

## Run locally

Requires Node.js 22.13+ and pnpm 11.

```sh
pnpm install
pnpm build
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_clear_lester.sql
pnpm dev
```

Open http://127.0.0.1:5173/.

## Data and verdicts

Market data comes from DEX Screener. The movers list is a ranked sample of indexed Pump markets, not the complete official pump.fun leaderboard. Verdicts use transparent rules for liquidity, volume, price changes and buy/sell activity. Unknown or missing data stays unknown. This is an entertainment tool, not trading advice or a security audit.

## Hosting

The production build produces a Cloudflare-compatible Worker with a D1 binding named `DB`. `.openai/hosting.json` contains the logical binding configuration. A Sites deployment provisions the real database and applies the checked-in Drizzle migration. Runtime state, credentials and local databases are excluded from this repository.

## Artwork

Monkey artwork was prepared from the supplied character reference using image generation. The sprites include keyboard typing frames, verdict reactions, banana eating and beer drinking.
