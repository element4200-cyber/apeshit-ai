# APESHIT AI — GitHub Pages

This standalone React app runs entirely on GitHub Pages. It uses no OpenAI hosting, login, API, or account connection.

- The monkey types contracts on his keyboard and displays the results on both screens.
- Seven positive and seven negative reactions, banana and beer breaks, interactive vines, and short-lived screen splats.
- Live market data is fetched directly from the public DEX Screener API.
- Scan history is stored in each visitor’s browser. GitHub Pages has no shared database, so other visitors’ submissions are not included.
- Market verdicts use transparent rules. They are entertainment, not a token security audit or trading advice.

## Run

Requires Node.js 22.13 or newer.

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Build

```sh
pnpm build
```

The `dist` folder is a complete static site. The base path is `/apeshit-ai/` for this GitHub project site. No secrets are required. The repository’s Pages workflow deploys this folder.
