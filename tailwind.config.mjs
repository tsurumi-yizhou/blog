import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {},
    },
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: ["emerald", "winter", "dim"]
  },
};
