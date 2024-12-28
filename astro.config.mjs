import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkQuoteImg from "./src/utils/remarkImage.mjs";

export default defineConfig({
  site: "https://blog.yizhou.ac.cn",
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      langs: [],
      wrap: true,
    },
    remarkPlugins: [remarkQuoteImg],
  },
  integrations: [mdx({}), sitemap({}), tailwind({}), icon()],
});
