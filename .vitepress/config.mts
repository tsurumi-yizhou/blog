import {createContentLoader, defineConfig, SiteConfig} from 'vitepress'
import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'

const hostname = "https://blog.yizhou.ac.cn"

// @ts-ignore
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
    hostname: hostname
  },
  buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: '停云馆',
      description: '文化传承与学术隐喻',
      id: hostname,
      link: hostname,
      language: 'zh_CN',
      image: 'https://blog.yizhou.ac.cn/img/avatar.jpg',
      favicon: `${hostname}/favicon.ico`,
      copyright:
          'Copyright (c) 2023-2024, 句芒'
    })

    // You might need to adjust this if your Markdown files
    // are located in a subfolder
    const posts = await createContentLoader('posts/*.md', {
      excerpt: true,
      render: true
    }).load()

    posts.sort(
        (a, b) =>
            +new Date(b.frontmatter.date as string) -
            +new Date(a.frontmatter.date as string)
    )

    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        date: frontmatter.date
      })
    }

    writeFileSync(path.join(config.outDir, 'rss2.xml'), feed.rss2())
  }
})
