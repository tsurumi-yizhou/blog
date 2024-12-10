import fs from "fs/promises";
import { z, defineCollection } from "astro:content";
import {
  loadBody,
  loadMeta,
  loadRendered,
  loadHeadings,
} from "./utils/loadTypst";
import { glob, type LoaderContext } from "astro/loaders";

const postSchema = z.object({
  title: z.string(),
  pubDate: z.string().or(z.date()),
  description: z.string(),
  category: z.string(),
  cover: z.string().optional(),
  top: z.boolean().optional(),
});

const posts = defineCollection({
  schema: postSchema,
  loader: {
    name: "posts-loader",
    load: async (ctx: LoaderContext) => {
      await glob({
        pattern: ["*.md", "*.mdx"],
        base: "src/content/posts",
      }).load(ctx);
      const files = await fs.readdir("src/content/posts");
      for (const file of files) {
        if (file.endsWith(".typ")) {
          const frontmatter = await loadMeta(file);
          const body = await loadBody(file);
          const html = await loadRendered(file);
          const headings = loadHeadings(body);
          ctx.store.set({
            id: file.replace(".typ", ""),
            data: frontmatter,
            body: body,
            rendered: {
              html: html,
              metadata: {
                headings: headings,
              },
            },
          });
        }
      }
    },
  },
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
