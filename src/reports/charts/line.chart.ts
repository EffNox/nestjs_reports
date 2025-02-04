import * as Utils from "../../helpers/chart-utils";

export const getLineChart = async (): Promise<string> => {

    const data = {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'],
        datasets: [
            {
                label: 'Movimientos de inventario',
                data: Utils.numbers({ count: 6, min: -100, max: 100 }),
                borderColor: Utils.CHART_COLORS.at(0),
                backgroundColor: Utils.transparentize(Utils.CHART_COLORS.at(0), 0.5),
                pointStyle: 'circle',
                pointRadius: 10,
                pointHoverRadius: 15
            }
        ]
    };

    const config = { type: 'line', data };

    return Utils.chartJsToImage(config);
}
