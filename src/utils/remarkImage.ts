import { visit } from "unist-util-visit";

export default function remarkQuoteImg() {
    return (tree: any) => {
        visit(tree, 'image', (node) => {
            node.type = 'html';
            node.value = `
                    <figure class="flex flex-col">
                        <a href="${node.url}" data-fancybox data-caption="${node.alt}">
                            <img src="${node.url}?imageView2/2/w/800/h/600/ignore-error/1" alt="${node.alt}"/>
                        </a>
                        <figcaption class="mx-auto">${node.alt}</figcaption>
                    </figure>
                           `;
        })
    }
}
