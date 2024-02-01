import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "停云馆",
  description: "隐喻之地",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Categories', link: '/categories' },
      { text: 'Friends', link: '/friends' },
      { text: 'About', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsurumi-yizhou' }
    ],

    footer: {
      message: "苏ICP备2023037773",
      copyright: "Copyright © 2019-2024 童亦洲"
    },

    search: {
      provider: "local"
    },
  },
  lastUpdated: true,
  sitemap: {
    hostname: "blog.yizhou.ac.cn"
  }
})
