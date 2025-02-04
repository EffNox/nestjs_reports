"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBarChart = void 0;
const Utils = __importStar(require("../../helpers/chart-utils"));
const getBarChart = async () => {
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
};
exports.getBarChart = getBarChart;
//# sourceMappingURL=bar.chart.js.map