import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function count(text) {
    let count = 0;
    for (const ch of text) {
        if (ch.match(/[\u4e00-\u9fa5]/)) {
            count++;
        } else if (ch.match(/[\u9FA6-\u9fcb]/)) {
            count++;
        }
    }
    const temp = text
        .replace(/[^\w-]/g, " ")
        .split(/\s+/)
        .filter((w) => {
            return ["", "-", "_"].indexOf(w.trim()) === -1;
        });
    count += temp.length;
    return count;
}

export function remarkReadingTime() {
    return function (tree, { data }) {
        const textOnPage = toString(tree);
        const readingTime = getReadingTime(textOnPage);
        data.astro.frontmatter.minutesRead = readingTime.text;
        data.astro.frontmatter.characters = count(textOnPage)
    };
}