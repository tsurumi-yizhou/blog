import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import type { RSSFeedItem } from "@astrojs/rss";
import type { MarkdownInstance } from "astro";

interface Frontmatter {
    pubDate: string;
    description: string;
    cover?: string;
    top?: boolean;
}

type Record = MarkdownInstance<Frontmatter>

export async function GET(context: any) {
    const data = import.meta.glob<Record>("./posts/*.md", { eager: true });
    const posts = Object.values(data).sort((a, b) => {
        return new Date(b.frontmatter.pubDate).getTime() - new Date(a.frontmatter.pubDate).getTime();
    }).slice(0, 10).map(async post => ({
        title: post.url!!.split("/").pop()!!,
        description: post.frontmatter.description,
        link: post.url!!,
        pubDate: new Date(post.frontmatter.pubDate),
        content: sanitizeHtml(await post.compiledContent())
    }) satisfies RSSFeedItem)
    return rss({
        title: "停云馆",
        description: "博学之，审问之，慎思之，明辨之，笃行之。\n" +
            "feedId:61724628704841735+userId:68480986032680960",
        site: context.site,
        customData: `<language>zh-cn</language>`,
        items: await Promise.all(posts)
    });
}
