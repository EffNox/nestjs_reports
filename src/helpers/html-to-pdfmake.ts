import htmlToPdfmake from "html-to-pdfmake";
import { JSDOM } from "jsdom";

interface ContentReplacer {
    [key: string]: string,
}

export const getHtmlContent = (html: string, replacers: ContentReplacer = {}) => {
    const { window } = new JSDOM();

    Object.entries(replacers).forEach(([k, v]) => {
        const k1 = `{{${k}}}`;
        html = html.replaceAll(k1, v);
    });

    return htmlToPdfmake(html, { window });
}
