interface ContentReplacer {
    [key: string]: string;
}
export declare const getHtmlContent: (html: string, replacers?: ContentReplacer) => any;
export {};
