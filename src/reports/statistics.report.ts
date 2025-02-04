import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { getBarChart } from "./charts/bar.chart";
import { getDonutChart } from "./charts/donut.chart";
import { getLineChart } from "./charts/line.chart";
import { getHeaderSection } from "./sections/header.section";

interface TopCountry {
    country?: string,
    customers?: number,
}

interface Options {
    title?: string,
    subTitle?: string,
    topCountries: TopCountry[],
}



export const getStatisticsReport = async (ops: Options): Promise<TDocumentDefinitions> => {
    const [donutChart, lineChart, barChart, barChart2] = await Promise.all([
        await getDonutChart({
            entries: ops.topCountries.map(e => ({ label: e.country, value: e.customers })) as any
        }),
        await getLineChart(),
        await getBarChart(),
        await getBarChart(),
    ]);

    return {
        pageMargins: [40, 100, 40, 60],
        header: getHeaderSection({
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
} 
