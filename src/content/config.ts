import { z, defineCollection } from "astro:content";

const booksCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string(),
    })
});

export const collections = {
    books: booksCollection,
};