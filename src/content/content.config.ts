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
    date: z.date(),
    slug: z.string(),
    preacher: z.string(),
    theme: z.string().optional(),
    scripture: z.string().optional(),
  }),
});

export const collections = {
  pages,
  sermons,
};
