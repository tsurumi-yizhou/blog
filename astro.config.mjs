import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkQuoteImg from "./src/utils/remarkImage.mjs";

export default defineConfig({
  site: "https://blog.yizhou.ac.cn",
  prefetch: true,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
    remarkPlugins: [remarkQuoteImg],
  },
  vite: {
    plugins: [tailwind()]
  },
  integrations: [mdx({}), sitemap({}), icon()],
});
