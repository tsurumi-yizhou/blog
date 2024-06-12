
import { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export interface Book {
  title: string;
  cover: string | undefined;
  author: string | undefined;
  publisher: string | undefined;
  status: string;
  link: string;
}

export async function getBooks() {
  var has_more = true;
  var cursor: string | undefined = undefined;
  var results: PageObjectResponse[] | undefined = undefined;

  const notion = new Client({
    auth: process.env.API_SECRET
  });
  
  while (has_more) {

    const database = await notion.databases.query({
      database_id: process.env.DATABASE as string,
      start_cursor: cursor,
    });

    if (results == undefined) {
      results = database.results as PageObjectResponse[];
      console.log(database.results.length);
    } else {
      results = results.concat(database.results as PageObjectResponse[]);
      console.log(database.results.length);
    }

    cursor = database.next_cursor??undefined;
    has_more = database.has_more;
  }

  return results?.map(result => {
    const title = result.properties.Name.title[0].plain_text;
    const cover = result.cover?.external.url;
    const author = result.properties?.author?.rich_text[0]?.plain_text;
    const publisher = result.properties?.publisher?.rich_text[0]?.plain_text;
    var status = "none";
    if (result.properties.Status.status.name === "Done") {
      status = "legere"
    } else if (result.properties.Status.status.name === "In progress") {
      status = "lectio"
    } else {
      status = "vis"
    }
    return {
      title: title,
      cover: cover,
      author: author,
      publisher: publisher,
      status: status,
      link: `/books/${title}`
    } satisfies Book;
  });
}
