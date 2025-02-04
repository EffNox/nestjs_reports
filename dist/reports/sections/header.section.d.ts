import type { Content } from "pdfmake/interfaces";
interface Options {
    title?: string;
    subTitle?: string;
    showLogo?: boolean;
    showDate?: boolean;
}
export declare const getHeaderSection: ({ title, subTitle, showLogo, showDate }: Options) => Content;
export {};
