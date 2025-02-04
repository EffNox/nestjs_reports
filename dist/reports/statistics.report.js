"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatisticsReport = void 0;
const bar_chart_1 = require("./charts/bar.chart");
const donut_chart_1 = require("./charts/donut.chart");
const line_chart_1 = require("./charts/line.chart");
const header_section_1 = require("./sections/header.section");
const getStatisticsReport = async (ops) => {
    const [donutChart, lineChart, barChart, barChart2] = await Promise.all([
        await (0, donut_chart_1.getDonutChart)({
            entries: ops.topCountries.map(e => ({ label: e.country, value: e.customers }))
        }),
        await (0, line_chart_1.getLineChart)(),
        await (0, bar_chart_1.getBarChart)(),
        await (0, bar_chart_1.getBarChart)(),
    ]);
    return {
        pageMargins: [40, 100, 40, 60],
        header: (0, header_section_1.getHeaderSection)({
            title: 'Estadísticas de clientes',
            subTitle: 'Top 10 países con más clientes'
        }),
        content: [
            {
                columns: [
                    {
                        stack: [
                            {
                                text: 'Mejores 10 países con más clientes', alignment: 'center', margin: [0, 0, 0, 10]
                            },
                            { image: donutChart, width: 320 },
                        ]
                    },
                    {
                        layout: 'lightHorizontalLines',
                        width: 'auto',
                        table: {
                            headerRows: 1,
                            widths: [70, 'auto'],
                            body: [
                                ['País', 'Clientes'],
                                ...ops.topCountries.map(c => [c.country, c.customers]),
                            ]
                        }
                    }
                ],
            },
            {
                image: lineChart, height: 200, width: 500, margin: [0, 20]
            },
            {
                columnGap: 10,
                columns: [
                    { image: barChart, width: 250 },
                    { image: barChart2, width: 250 },
                ]
            }
        ]
    };
};
exports.getStatisticsReport = getStatisticsReport;
//# sourceMappingURL=statistics.report.js.map