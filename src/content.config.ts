import fs from "fs/promises";
import { z, defineCollection } from "astro:content";
import {
  loadBody,
  loadMeta,
  loadRendered,
  loadHeadings,
} from "./utils/loadTypst";
import { glob, type LoaderContext } from "astro/loaders";
import pkg from "zotero-api-client";
const { default: api } = pkg;

const postSchema = z.object({
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
      await glob({ pattern: "*.md", base: "src/content/posts" }).load(ctx);
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

const papers = defineCollection({
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    link: z.string(),
    date: z.string(),
  }),
  loader: {
    name: "papers-loader",
    load: async (ctx: LoaderContext) => {
      const library = api(process.env.ZOTERO_API_TOKEN).library(
        "user",
        process.env.ZOTERO_USER_ID
      );
      const items = await library.items().get();
      items
        .getData()
        .filter((item: any) => item.parentItem == undefined)
        .forEach((item: any) => {
          ctx.store.set({
            id: item.key,
            data: {
              title: item.title,
              authors: (item.creators ?? [])
                .map((creator: any) => {
                  if (creator.firstName === "" || creator.lastName === "") {
                    return creator.firstName + creator.lastName;
                  }
                  const cjk = /^[\u4e00-\u9fff]+$/;
                  if (
                    cjk.test(creator.firstName) &&
                    cjk.test(creator.lastName)
                  ) {
                    return creator.lastName + creator.firstName;
                  }
                  return creator.firstName + " " + creator.lastName;
                })
                .join(", "),
              link: item.url,
              date: item.date,
            },
          });
        });
    },
  },
});

export const collections = {
  posts: posts,
  friends: friends,
  papers: papers,
};
