import type { TDocumentDefinitions } from "pdfmake/interfaces";
interface ReportOptions {
    name: string;
}
export declare const getCommunityReport: ({ name }: ReportOptions) => TDocumentDefinitions;
export {};
