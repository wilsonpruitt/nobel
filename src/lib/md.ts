import { marked } from 'marked';

/** Render a front-matter string that may contain inline Markdown. */
export function inline(text: string): string {
  return marked.parseInline(text, { async: false }) as string;
}

export const FIELD_LABEL: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  medicine: 'Medicine',
  economics: 'Economics',
  literature: 'Literature',
};

export const FIELD_ORDER = ['physics', 'chemistry', 'medicine', 'economics', 'literature'];

export function longDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
