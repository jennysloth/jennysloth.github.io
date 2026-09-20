import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    language: z.string().default('中文'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string(),
    category: z.enum(['Academic', 'Technical', 'Personal']),
    published: z.coerce.date(),
    status: z.enum(['published', 'draft']).default('draft'),
    tools: z.array(z.string()).default([]),
  }),
});

export const collections = { writing, projects };
