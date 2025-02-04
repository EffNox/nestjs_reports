import type { countries as Country } from "@prisma/client";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { getFooterSection } from "./sections/footer.section";
import { getHeaderSection } from "./sections/header.section";

interface Options {
    title?: string
    subTitle?: string
    data: Country[]
}

export const getCountriesReport = ({ title, subTitle, data }: Options): TDocumentDefinitions => {
    return ({
        pageOrientation: 'landscape',
        header: getHeaderSection({
            title: title ?? 'Countries Report',
            subTitle: subTitle ?? 'List of countries'
        }),
        footer: getFooterSection,
        pageMargins: [40, 110, 40, 60],
        content: [
            {
                layout: 'blueHeaders', //lightHorizontalLines, headerLineOnly, noBorders
                table: {
                    headerRows: 1,
                    widths: [25, 'auto', 30, 30, 'auto', '*'],

                    body: [
                        Object.keys(data.at(0)).map(v => v.toUpperCase().replaceAll('_', ' ')),
                        ...data
                            .map(e =>
                                Object.values(e)).map(([id, name, ...data]) =>
                                    [
                                        `${id}`, { text: name, bold: true }, ...data
                                    ]
                                ),
                        ['', '', '', '', '', ''],
                        ['', '', '', '', 'Total',
                            {
                                text: `${data.length} países`,
                                bold: true
                            }
                        ],
                        // .map(e => [
                        //     `${e.id}`,
                        //     { text: e.name, bold: true },
                        //     e.iso2,
                        //     e.iso3,
                        //     e.local_name,
                        //     e.continent,
                        // ])
                        // ['First', 'Second', 'Third', 'The last one'],
                        // ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                    ]
                }
            },


            // 

            {
                text: 'Totales',
                style: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 40, 0, 0]
                },

            },

            {
                layout: 'noBorders',
                table: {
                    headerRows: 1,
                    widths: [70, 'auto', 70, 70, 'auto', '*'],
                    body: [
                        [
                            {},
                            {
                                text: 'Total de países',
                                bold: true,
                                colSpan: 2,
                            },
                            {},
                            {
                                text: `${data.length} países`,
                                bold: true,
                            },
                            {},
                            {},
                        ]
                    ]
                },

            },


        ],
    });

}
