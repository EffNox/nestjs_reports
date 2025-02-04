import type { TDocumentDefinitions } from "pdfmake/interfaces";
interface TopCountry {
    country?: string;
    customers?: number;
}
interface Options {
    title?: string;
    subTitle?: string;
    topCountries: TopCountry[];
}
export declare const getStatisticsReport: (ops: Options) => Promise<TDocumentDefinitions>;
export {};
