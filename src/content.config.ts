import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    industry: z.string(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.string()),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string()
    })).optional(),
    publishedDate: z.date(),
    featured: z.boolean().default(false)
  })
});

const whitePapers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/white-papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    downloadUrl: z.string().optional(),
    publishedDate: z.date(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  caseStudies,
  whitepapers: whitePapers
};
