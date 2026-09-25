import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every collection is locale-partitioned (src/content/<collection>/{mk,en}/) so IT and EL
// drop in later without a schema refactor — see WO-3 in the rebuild plan.

const services = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/services' }),
  schema: () =>
    z.object({
      title: z.string(),
      order: z.number(),
      summary: z.string(),
      icon: z.string(),
      subservices: z.array(z.string()),
      priceFrom: z.number().optional(),
      priceTo: z.number().optional(),
      currency: z.string().default('EUR'),
      visits: z.number().optional(),
      duration: z.string().optional(),
      faq: z
        .array(
          z.object({
            q: z.string(),
            a: z.string(),
          })
        )
        .optional(),
      draft: z.boolean().default(false),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/team' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      credentials: z.array(z.string()),
      education: z.array(
        z.object({
          institution: z.string(),
          year: z.string(),
          title: z.string(),
        })
      ),
      focus: z.array(z.string()),
      languages: z.array(z.string()),
      photo: image(),
      order: z.number(),
      draft: z.boolean().default(false),
    }),
});

const cases = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/cases' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      service: z.string(),
      summary: z.string(),
      before: image(),
      after: image(),
      treatment: z.string(),
      duration: z.string().optional(),
      // Deliberate: a case without recorded patient consent must fail the build rather than
      // publish. Do not soften this to a default — see WO-3 in the rebuild plan.
      consent: z.boolean().refine((v) => v === true, {
        message: 'A case cannot be published without recorded patient consent (consent must be true).',
      }),
      draft: z.boolean().default(false),
    }),
});

const articles = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      cover: image().optional(),
      excerpt: z.string(),
      tags: z.array(z.string()).default([]),
      author: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

const promotions = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/promotions' }),
  schema: () =>
    z.object({
      title: z.string(),
      validFrom: z.coerce.date(),
      validUntil: z.coerce.date(),
      banner: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const education = defineCollection({
  loader: glob({ pattern: '{mk,en}/**/*.{md,mdx}', base: './src/content/education' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      institution: z.string(),
      year: z.number(),
      type: z.enum(['course', 'certification', 'conference', 'taught']),
      certificate: image().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = {
  services,
  team,
  cases,
  articles,
  promotions,
  education,
};
