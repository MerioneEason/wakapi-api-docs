# Wakapi API Reference (Sourcey)

A navigable API reference for [Wakapi](https://github.com/muety/wakapi) (MIT), generated with [Sourcey](https://sourcey.com) 3.9.5 from the OpenAPI spec shipped in the Wakapi repository (`static/docs/swagger.yaml`), pinned to commit [`c561bbc174d139d2d3f8ee222ca61671cdc3caf1`](https://github.com/muety/wakapi/commit/c561bbc174d139d2d3f8ee222ca61671cdc3caf1) (2026-11-08).

- **Live site:** https://merioneeason.github.io/wakapi-api-docs/
- **Coverage:** 22/22 operations, 33 schemas, 817 field rows, plus a 3-page guide (getting started, authentication, sending heartbeats).
- **Evidence:** `evidence.json` (machine-readable packet: repo, commit, license, adapter, command, page list, runx receipt id).
- **Report:** `report.md` — what was built and the maintainer-facing gaps found in the spec (wrong license metadata, missing host, almost no examples, five overlapping heartbeat routes).
- **Receipt:** `receipt-sha256-*.json` — sealed runx receipts for the governed build (`runx skill wakapi-sourcey-docs`, runx-cli 0.11.1, verified valid).

## Reproduce the build

```bash
cd site-src
npm install
npx sourcey build -c ./sourcey.config.ts -o ../site
```

## For the Wakapi maintainer — adopt this

This site was built to be hosted on `wakapi.dev`. To adopt it: copy `site-src/` into the Wakapi repo (or a docs repo), run the build above in CI, and publish the output. The config already points `repo` at `github.com/muety/wakapi`; change `siteUrl`/`baseUrl` to your host. No content changes are needed — the guide pages were written from your own spec.
