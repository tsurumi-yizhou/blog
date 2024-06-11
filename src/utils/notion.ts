import { config } from "dotenv";
import { Client } from "@notionhq/client";

async function getClient() {
  config();
  return await new Client({
    auth: process.env.API_SECRET
  })
}

export async function getBooks() {
  var has_more = true;
  var cursor: string | undefined = undefined;
  var results = undefined;
  const notion = await getClient();
  while (has_more) {
    const database = await notion.databases.query({
      database_id: process.env.DATABASE as string,
      start_cursor: cursor,
    });

    if (results == undefined) {
      results = database.results;
      console.log(database.results.length);
    } else {
      results = results.concat(database.results);
      console.log(database.results.length);
    }

    cursor = database.next_cursor??undefined;
    has_more = database.has_more;
  }
  return results;
}
