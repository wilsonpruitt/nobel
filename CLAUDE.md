# Laureates for the Pulpit (nobel.wrootpress.com)

Plain-language explainers of recent Nobel Prizes for pastors, with a Wesleyan frame. See README.md for layout and how to add an entry.

## Conventions

- One entry per prize in `src/content/prizes/<year>-<field>.md`; schema in `src/content.config.ts`. Prizes covered: physics, chemistry, medicine, economics, literature. Peace is out of scope.
- Every entry has the same four parts in the same order: In plain terms (Markdown body), Say it accurately (`checks`), For preaching (`preaching`), On the Wesleyan shelf (`shelf`).
- A preaching point is a `likeness` or an `instance`. Do not blur them: a likeness borrows an image and proves nothing; an instance is a real case of what the text describes.
- Science claims come from the Nobel press release and named reporting, listed in `sources`. Wesley is cited from the primary text, by title and scripture text or date. Quote Wesley only from a text that has been read; otherwise paraphrase and add a `todo:` CHECK item.
- Scripture is quoted from the World English Bible and marked WEB. Prefer a reference to a quotation.
- No editorial notes in rendered text. Open items go in the entry's `todo:` list.
- Copy is plain and direct. British spelling in running text, matching the Nobel citations.
- Design follows the Wroot house look: parchment, ink, gold; EB Garamond and Inter. Tokens are in `src/styles/global.css`.
