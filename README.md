# Laureates for the Pulpit

Recent Nobel Prizes explained in plain terms for pastors, with points of contact for preaching in the Wesleyan tradition. Intended home: https://nobel.wrootpress.com

Astro, Tailwind (Vite plugin), static output. Live at https://nobel.wrootpress.com: Vercel project `nobel` (team `wilson-pruitts-projects`), deployed from the CLI. The project is not connected to git, so a commit or push does not deploy.

```sh
npx vercel build --prod
npx vercel deploy --prebuilt --prod --scope wilson-pruitts-projects
```

A fresh checkout needs `npx vercel link --yes --project nobel --scope wilson-pruitts-projects` and `npx vercel pull --yes --environment production` once first. DNS is a Cloudflare CNAME to `cname.vercel-dns.com`, proxy off.

```sh
npm install
npm run dev      # localhost:4321
npm run build    # dist/
```

## Where things live

| Path | What it is |
| :-- | :-- |
| `src/content/prizes/<year>-<field>.md` | One written entry per prize. Served at `/<year>/<field>/`. |
| `src/content.config.ts` | The schema every entry must satisfy. |
| `src/data/ledger.json` | The ten-year index: one row per prize that has no written entry yet. |
| `src/pages/index.astro` | Home page: entries, the key, and the ledger. |
| `src/pages/[year]/[field].astro` | The entry template. |
| `src/styles/global.css` | Theme tokens and component styles. |

## Adding an entry

1. Copy an existing file in `src/content/prizes/` to `<year>-<field>.md`. Fields are `physics`, `chemistry`, `medicine`, `economics`, `literature`.
2. The Markdown body is the "In plain terms" prose. The other three parts (`checks`, `preaching`, `shelf`) are lists in the front matter, and their strings accept inline Markdown.
3. Mark each preaching point `likeness` (an image borrowed from the science, which proves nothing) or `instance` (a true story that is itself a case of what the text describes).
4. Put open editorial items in `todo:`. They are never rendered.
5. For literature, leave out `affiliation` (writers usually have none) and list the main books in English under `works:` with original title, year, translator and year of the English edition. The list renders as "In English" under the plain-terms prose.

The ledger row for that year and field is replaced by the written entry automatically. For a newly announced prize there is no ledger row to remove.

## Editorial state

- The one-line summaries in `ledger.json` are working notes. They have not been checked line by line against the Nobel citations.
- Each entry's `todo:` list names the Wesley quotations and paraphrases that still need checking against the printed text.
- Scripture quotations are from the World English Bible.
