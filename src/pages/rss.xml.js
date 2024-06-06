import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "停云馆",
        description: "博学之，审问之，慎思之，明辨之，笃行之。",
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./posts/*.{md,mdx}'),
        ),
        customData: `<language>zh-cn</language>`,
    })
}