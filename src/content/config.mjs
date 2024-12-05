import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    category: z.string(),
    cover: z.string().optional(),
    top: z.boolean().optional(),
  }),
});

const friends = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    link: z.string(),
    avatar: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: posts,
  friends: friends,
};
