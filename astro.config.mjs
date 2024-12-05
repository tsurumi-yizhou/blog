import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkQuoteImg from "./src/utils/remarkImage.mjs";
import { remarkReadingTime } from "./src/utils/remarkReadingTime.mjs";

export default defineConfig({
  site: "https://blog.yizhou.ac.cn",
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      langs: [],
      wrap: true,
    },
    remarkPlugins: [remarkMath, remarkQuoteImg, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [mdx({}), sitemap({}), tailwind({}), icon()],
});
