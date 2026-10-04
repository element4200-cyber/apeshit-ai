# APESHIT AI

An interactive monkey token scanner, hosted independently on **GitHub Pages**.

## Current website

[Open APESHIT AI](https://element4200-cyber.github.io/apeshit-ai/)

The deployed app lives in [`pages/`](pages/). It is a standalone React/Vite static website with no OpenAI login, hosting, API key, or account dependency. The GitHub Pages workflow builds and publishes that folder.

## Features

- Watch the monkey type a Solana contract address or pump.fun URL on his keyboard.
- Market information appears on his monitor and in the scan side window.
- Seven positive and seven negative reactions, banana snacks, beer breaks, vines, and screen splats that vanish quickly.
- Live DEX Screener market data, refreshed every minute.
- Scan history saved in each visitor’s browser. Pages has no shared database; visitors cannot see one another’s submissions.

Verdicts are rule-based market signals for entertainment, not trading advice or security audits. Movers are a ranked sample of indexed Pump markets, not the complete pump.fun leaderboard.

## Development

```sh
cd pages
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Run `pnpm build` to generate the static `pages/dist` website. Push changes under `pages/` to `main` to publish them through GitHub Actions.

The older server application remains in repository history and other folders for reference; it is not included in the GitHub Pages deployment.
