"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCountriesReport = void 0;
const footer_section_1 = require("./sections/footer.section");
const header_section_1 = require("./sections/header.section");
const getCountriesReport = ({ title, subTitle, data }) => {
    return ({
        pageOrientation: 'landscape',
        header: (0, header_section_1.getHeaderSection)({
            title: title ?? 'Countries Report',
            subTitle: subTitle ?? 'List of countries'
        }),
        footer: footer_section_1.getFooterSection,
        pageMargins: [40, 110, 40, 60],
        content: [
            {
                layout: 'blueHeaders',
                table: {
                    headerRows: 1,
                    widths: [25, 'auto', 30, 30, 'auto', '*'],
                    body: [
                        Object.keys(data.at(0)).map(v => v.toUpperCase().replaceAll('_', ' ')),
                        ...data
                            .map(e => Object.values(e)).map(([id, name, ...data]) => [
                            `${id}`, { text: name, bold: true }, ...data
                        ]),
                        ['', '', '', '', '', ''],
                        ['', '', '', '', 'Total',
                            {
                                text: `${data.length} países`,
                                bold: true
                            }
                        ],
                    ]
                }
            },
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
};
exports.getCountriesReport = getCountriesReport;
//# sourceMappingURL=countries.report.js.map