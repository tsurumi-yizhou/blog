import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import remarkToc from 'remark-toc';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  site: "https://blog.yizhou.ac.cn",
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      langs: [],
      wrap: true
    },
    remarkPlugins: [remarkToc]
  },
  integrations: [mdx({}), sitemap({}), tailwind({}), icon(), vue()]
});