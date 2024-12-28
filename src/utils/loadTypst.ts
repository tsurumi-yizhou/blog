import fs from "fs/promises";
import { execSync } from "child_process";
import path from "path";

export async function loadMeta(filename: string) {
  const command = `typst query src/content/posts/${filename} "<frontmatter>" --field value --one`;
  const metadata = execSync(command, { encoding: "utf-8" });
  return JSON.parse(metadata);
}

export async function loadBody(filename: string) {
  return await fs.readFile(`src/content/posts/${filename}`, {
    encoding: "utf-8",
  });
}

export async function loadRendered(filename: string) {
  const command = `pandoc src/content/posts/${filename} -f typst -t html`;
  return execSync(command, { encoding: "utf-8" });
}

export function loadHeadings(body: string) {
  const headings = [];
  for (const line of body.split("\n")) {
    const regex = /^(=+)\s*(.+)/gm;
    const match = regex.exec(line);
    try {
      const depth = match!![0].length;
      const title = match!![2].trim();
      headings.push({ depth: depth, slug: title, text: title });
    } catch (e) {
      continue;
    }
  }
  return headings;
}
