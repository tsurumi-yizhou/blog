import { getCollection } from "astro:content";

export interface Post {
  id: string;
  title: string;
  pubDate: Date;
  description: string;
  category: string;
  link: string;
  cover: string | undefined;
  top: string | undefined;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection("posts");
  return posts
    .map((post: any) => {
      return {
        id: post.id,
        title: post.data.title,
        pubDate: new Date(post.data.pubDate),
        category: post.data.category,
        description: post.data.description,
        link: `/posts/${post.id}`,
        cover: post.data.cover,
        top: post.data.top,
      };
    })
    .sort((a: Post, b: Post) => b.pubDate.getTime() - a.pubDate.getTime());
}
