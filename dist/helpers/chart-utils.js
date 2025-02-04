"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMED_COLORS = exports.CHART_COLORS = exports.chartJsToImage = void 0;
exports.srand = srand;
exports.rand = rand;
exports.transparentize = transparentize;
exports.numbers = numbers;
exports.months = months;
const color_1 = __importDefault(require("@kurkle/color"));
const axios_1 = __importDefault(require("axios"));
const chartJsToImage = async (chartConf, ops = {}) => {
    const params = new URLSearchParams();
    Object.entries(ops).map(([k, v]) => params.append(k, v.toString()));
    const encodedUri = encodeURIComponent(JSON.stringify(chartConf));
    const chartUrl = `https://quickchart.io/chart?c=${encodedUri}`;
    const rs = await axios_1.default.get(chartUrl, { responseType: 'arraybuffer', params });
    return `data:image/png;base64,${Buffer.from(rs.data, 'binary').toString('base64')}`;
};
exports.chartJsToImage = chartJsToImage;
let _seed = Date.now();
function srand(seed) {
    _seed = seed;
}
function rand(min = 0, max = 0) {
    _seed = (_seed * 9301 + 49297) % 233280;
    return min + (_seed / 233280) * (max - min);
}
exports.CHART_COLORS = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#727478',
    '#9756cf',
];
exports.NAMED_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
};
function transparentize(value, opacity) {
    const alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return (0, color_1.default)(value).alpha(alpha).rgbString();
}
function numbers(config = {}) {
    const cfg = config || {};
    const min = cfg.min ?? 0;
    const max = cfg.max ?? 100;
    const from = cfg.from ?? [];
    const count = cfg.count ?? 8;
    const decimals = cfg.decimals ?? 8;
    const continuity = cfg.continuity ?? 1;
    const dfactor = Math.pow(10, decimals) || 0;
    const data = [];
    let i, value;
    for (i = 0; i < count; ++i) {
        value = (from[i] || 0) + rand(min, max);
        if (rand() <= continuity) {
            data.push(Math.round(dfactor * value) / dfactor);
        }
        else {
            data.push(null);
        }
    }
    return data;
}
const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];
function months(config = {}) {
    const cfg = config ?? {};
    const count = cfg.count ?? 12;
    const section = cfg.section;
    const values = [];
    let i, value;
    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }
    return values;
}
//# sourceMappingURL=chart-utils.js.map