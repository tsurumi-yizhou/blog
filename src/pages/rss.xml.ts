import rss from "@astrojs/rss";

export async function GET(context: any) {
    return rss({
        title: "停云馆",
        description: "博学之，审问之，慎思之，明辨之，笃行之。\n" +
            "feedId:61724628704841735+userId:68480986032680960",
        site: context.site,
        items: [],
        customData: `<language>zh-cn</language>`,
    });
}
