import { z, defineCollection } from "astro:content";

const bookCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    cover: z.string(),
    publisher: z.string(),
    status: z.string(),
  }),
});

export const collections = {
  books: bookCollection,
};
