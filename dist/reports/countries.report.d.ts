import type { countries as Country } from "@prisma/client";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
interface Options {
    title?: string;
    subTitle?: string;
    data: Country[];
}
export declare const getCountriesReport: ({ title, subTitle, data }: Options) => TDocumentDefinitions;
export {};
