import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "停云馆",
        description: "博学之，审问之，慎思之，明辨之，笃行之。\nfeedId:61724628704841735+userId:68480986032680960",
        site: context.site,
        items: (await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')))
            .sort((a, b) => {
                return b.pubDate - a.pubDate
            }),
        customData: `<language>zh-cn</language>`,
    })
}
