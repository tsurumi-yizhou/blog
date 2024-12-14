import rss from "@astrojs/rss";
import { getPosts } from "../utils/getPosts";
import { getEntry } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "停云馆",
    description:
      "博学之，审问之，慎思之，明辨之，笃行之。\nfeedId:61724628704841735+userId:68480986032680960",
    site: context.site,
    items: await Promise.all(
      posts
        .map(async (post) => ({
          title: post.title,
          pubDate: post.pubDate,
          description: post.description,
          link: post.link,
          content: sanitizeHtml(
            parser.render((await getEntry("posts", post.id)).body),
            {
              allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
            }
          ),
        }))
        .slice(0, 10)
    ),
    customData: `<language>zh-cn</language>`,
  });
}
