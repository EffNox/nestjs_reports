import type { TDocumentDefinitions } from "pdfmake/interfaces";
interface ReportOptions {
    name: string;
}
export declare const getHelloWordReport: ({ name }: ReportOptions) => TDocumentDefinitions;
export {};
