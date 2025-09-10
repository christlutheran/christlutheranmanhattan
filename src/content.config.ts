import { defineCollection, z } from 'astro:content';

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    order: z.number().default(1),
  }),
});

const sermons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Accept YAML date; Astro parses to Date. If not, consider z.string().transform(d=>new Date(d))
    date: z.date(),
    // Make frontmatter slug optional; the entry slug still exists as entry.slug
    slug: z.string().optional(),
    pastor: z.string().optional(),
    preacher: z.string().optional(),
    theme: z.string().optional(),
    scripture: z.string().optional(),
  }),
});

export const collections = { pages, sermons };
