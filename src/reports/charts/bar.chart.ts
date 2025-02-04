import * as Utils from "../../helpers/chart-utils";

export const getBarChart = async (): Promise<string> => {

    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    const labels = Utils.months({ count: 7 });
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Fully Rounded',
                data: Utils.numbers(NUMBER_CFG),
                borderColor: Utils.CHART_COLORS.at(0),
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.at(0), 0.5),
                borderWidth: 2,
                borderRadius: Number.MAX_VALUE,
                borderSkipped: false,
            },
            {
                label: 'Small Radius',
                data: Utils.numbers(NUMBER_CFG),
                borderColor: Utils.CHART_COLORS.at(4),
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.at(4), 0.5),
                borderWidth: 2,
                borderRadius: 5,
                borderSkipped: false,
            }
        ]
    };

    const config = {
        type: 'bar',
        data,
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        },
        options: {
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        },
    };

    return Utils.chartJsToImage(config);
}
