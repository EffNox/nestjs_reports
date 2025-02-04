import * as Utils from "../../helpers/chart-utils";

interface DonutEntry {
    label: string,
    value: string,
}

interface DonutOps {
    entries: DonutEntry[],
}

export const getDonutChart = async (ops: DonutOps): Promise<string> => {
    const data = {
        labels: ops.entries.map(e => e.label),
        datasets: [
            {
                label: 'Dataset 1',
                data: ops.entries.map(e => e.value),
                backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    };

    const config = {
        type: 'doughnut',
        data,
        options: {
            // title: {
            //     display: true,
            //     text: 'Chart.js Doughnut Chart'
            // },
            legend: {
                position: 'left',
            },
            plugins: {
                datalabels: {
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 14,
                    }
                }

            }
        },
    };
    return Utils.chartJsToImage(config);
}
