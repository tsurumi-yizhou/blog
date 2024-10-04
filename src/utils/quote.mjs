import { visit } from "unist-util-visit";

export default function remarkQuoteImg() {
    return (tree) => {
        visit(tree, 'image', (node) => {
            node.type = 'html';
            node.value = `<figure class="flex flex-col">
                            <img src="${node.url}" alt="${node.alt}" />
                            <figcaption class="mx-auto">${node.alt}</figcaption>
                          </figure>`;
        })
    }
}
