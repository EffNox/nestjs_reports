import { readFileSync } from "fs";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import * as Utils from '../helpers/chart-utils';


const svgContent = readFileSync('assets/imgs/5.1 ford.svg', 'utf-8');

const generateChartImage = async () => {
    const chartConf = {
        type: 'bar',
        data: {
            labels: [2012, 2013, 2014, 2015, 2016],
            datasets: [{
                label: 'Users',
                data: [120, 60, 50, 180, 120]
            }]
        }
    }

    return Utils.chartJsToImage(chartConf, { height: 300, });
}


const generateDonut = async () => {
    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    };


    const config = {
        type: 'doughnut',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            plugins: {
                legend: {
                    position: 'top',
                },

            }
        },
    };

    return Utils.chartJsToImage(config);
}


export const getBasicChartSvgReport = async (): Promise<TDocumentDefinitions> => {
    // const chart = await generateChartImage();
    // const chartDonut = await generateDonut();

    const [chart, chartDonut] = await Promise.all([generateChartImage(), generateDonut()]);

    return {
        content: [
            {
                svg: svgContent,
                width: 150,
                fit: [100, 100]
            },
            { image: chart, width: 500, },
            { image: chartDonut, width: 500, },
        ],
    }
}
