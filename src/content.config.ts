import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    cta: z.string(),
    order: z.number(),
  }),
});

export const collections = { insights };
