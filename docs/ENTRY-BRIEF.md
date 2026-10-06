# Writing a new entry

How the 2025 entries were made (2026-10-06), so the next one runs the same way. One agent writes one entry; the session that dispatched it reviews before committing.

## Per-entry cost

Opus, one subagent per prize, run one at a time on the 8 GB Mac: 140–200K tokens each (literature was the heaviest). Under the house rules that is a token-burn hard stop: state the estimate and ask "which model, and go?" before dispatching.

## The brief (paste into the agent; change the bracketed parts)

> You are writing one entry for "Laureates for the Pulpit", an Astro site in ~/nobel that explains recent Nobel Prizes in plain terms for pastors, with points of contact for preaching in the Wesleyan tradition.
>
> YOUR TASK: write `src/content/prizes/[YEAR]-[FIELD].md` for the [YEAR] Nobel Prize in [FIELD] ([LAUREATES]). Write only that file. Don't edit any other file, don't commit, don't deploy.
>
> FIRST READ: `CLAUDE.md`, `README.md`, `src/content.config.ts`, and the finished entries in `src/content/prizes/` (at least one of the same field if there is one). Match them: same four parts, about the same number of items in each, plain direct prose, British spelling in running text. `born` is the birth year only, as a quoted string. Literature: no `affiliation`; list the main English books in `works:` from the Nobel bio-bibliography.
>
> SOURCES
> - nobelprize.org gives HTTP 403 to WebFetch. Use the Playwright browser (`browser_navigate`, then `browser_evaluate` with `() => document.body.innerText`). PDFs under nobelprize.org/uploads can be fetched with curl. If the browser hits a bot check, stop and say so; don't try to get around it.
> - `citation` is the committee's wording verbatim from the press release. Names, affiliations, birth years and the announcement date come from the press release or the laureate pages.
> - Checks and timeline facts come from named reporting. Every URL in `sources` must be one you actually loaded. Never construct a URL. Quote a person only from text you read verbatim; if you saw it only through a summarising fetch, confirm it in the browser first.
> - Say how far along any treatment or product is (trial phase, approved or not, planned or delivered). Never imply a cure. Keep economics even-handed.
>
> WESLEY
> - The corpus is in `~/wesley-corpus/cleaned/john-wesley/` (`sermon-NNN-*.txt`, `treatise-*`, `journal-*`, `letter-*`). Find passages with grep, and read with python slicing around the hits (ugrep chokes on `.{0,300}`). Never read whole large files. Don't use the `wesley-collected-works-vol-*` dumps or `chunked/`.
> - ⛔ Don't quote the *Survey* chapter files or the wesley.nnu.edu "Compendium". It is a posthumous enlarged edition and may not be Wesley's text. The signed preface is the only safe part.
> - Quote only text you have read in the corpus. Work out section numbers from the order of the numbered paragraphs; some cleaned sermons put the I./II. outline at the top. Work out Journal dates from the weekday and the surrounding entries; bracketed year labels are sometimes wrong. Fix OCR only when certain. A gloss of Wesley's Latin is a gloss, not his words.
> - The pairing has to be real. Two good shelf items beat three weak ones. Check `src/content/prizes/` for texts already used and avoid repeating them.
>
> PREACHING
> - `likeness` borrows an image and proves nothing. `instance` is a true case of exactly what the text describes. Fiction is never an instance, and a story that only resembles the text is a likeness. A likeness body says where the image fails.
> - Scripture: prefer references. Quote only the WEB, after checking the wording on ebible.org/eng-web.
>
> TODO: anything unverified goes in `todo:` as a "CHECK …" line. If nothing is open, write `todo: []` (a bare `todo:` breaks the build). Delete any `.playwright-mcp` folder before finishing.
>
> FINISH: `npm run build` must pass. Report each Wesley quotation with file:line and section; each source URL and whether you loaded it; the `todo:` items; the likeness/instance calls with one line of reasoning each; and what you softened or dropped.

## Review before committing (the dispatching session does this)

1. Re-check every Wesley quotation mechanically: python, whitespace-normalised substring search on the corpus file. Confirm the section number from the paragraph order.
2. Read the likeness/instance calls. Relabel any instance that is only a resemblance. In 2025 this caught the Ezekiel 3:15 point in literature.
3. Confirm any quotation the agent flagged as read only through a summarising fetch, using the browser.
4. Drop anything resting on the Compendium.
5. Build, commit, then deploy with the recipe in README (production deploy = Wilson's OK).
