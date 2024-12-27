import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    test: defineCollection({
      type: 'data',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
});
