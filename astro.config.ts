import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkQuoteImg from "./src/utils/remarkImage.ts";

export default defineConfig({
    site: "https://blog.yizhou.ac.cn",
    output: "static",
    integrations: [mdx(), sitemap(), icon()],
    vite: {
        plugins: [tailwind()]
    },
    image: {
        domains: ["static.yizhou.ac.cn"]
    },
    markdown: {
        shikiConfig: {
            themes: {
                light: "catppuccin-latte",
                dark: "catppuccin-mocha"
            }
        },
        remarkPlugins: [remarkQuoteImg]
    },
});
