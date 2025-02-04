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
exports.getBasicChartSvgReport = void 0;
const fs_1 = require("fs");
const Utils = __importStar(require("../helpers/chart-utils"));
const svgContent = (0, fs_1.readFileSync)('assets/imgs/5.1 ford.svg', 'utf-8');
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
    };
    return Utils.chartJsToImage(chartConf, { height: 300, });
};
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
};
const getBasicChartSvgReport = async () => {
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
    };
};
exports.getBasicChartSvgReport = getBasicChartSvgReport;
//# sourceMappingURL=basic-chart-svg.report.js.map