import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const FIELDS = ['physics', 'chemistry', 'medicine', 'economics', 'literature', 'peace'] as const;

// One file per written entry, named `<year>-<field>.md`.
// The Markdown body is the "In plain terms" prose. Everything else is
// structured front matter so the four parts render the same way every time.
// Strings in `timeline`, `checks`, `preaching` and `shelf` accept inline Markdown.
const prizes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prizes' }),
  schema: z.object({
    year: z.number().int(),
    field: z.enum(FIELDS),
    prizeName: z.string(), // as the committee names it, e.g. "Physiology or Medicine"
    announced: z.coerce.date(),
    headline: z.string(),
    citation: z.string(), // the committee's wording, verbatim, without quotation marks
    summary: z.string(), // one line for the index
    laureates: z.array(
      z.object({
        name: z.string(),
        born: z.string().optional(),
        affiliation: z.string().optional(), // writers usually have none
      }),
    ),
    // Books in English, for literature entries. `year` is the original
    // publication, `english` the year of the English edition.
    works: z
      .array(
        z.object({
          title: z.string(),
          original: z.string().optional(),
          year: z.number().int().optional(),
          translator: z.string().optional(),
          english: z.number().int().optional(),
        }),
      )
      .default([]),
    timeline: z.array(z.object({ when: z.string(), what: z.string() })).default([]),
    checks: z.array(z.object({ tempting: z.string(), accurate: z.string() })).default([]),
    preaching: z
      .array(
        z.object({
          title: z.string(),
          // likeness: borrows an image and proves nothing by it.
          // instance: a true story that is itself a case of what the text describes.
          kind: z.enum(['likeness', 'instance']),
          refs: z.array(z.string()),
          body: z.string(),
        }),
      )
      .default([]),
    shelf: z
      .array(
        z.object({
          title: z.string(),
          note: z.string().optional(), // date, or "sermon on <text>"
          url: z.string().url().optional(),
          body: z.string(),
        }),
      )
      .default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    // Open editorial items. Never rendered.
    todo: z.array(z.string()).default([]),
  }),
});

export const collections = { prizes };
