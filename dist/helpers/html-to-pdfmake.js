"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHtmlContent = void 0;
const html_to_pdfmake_1 = __importDefault(require("html-to-pdfmake"));
const jsdom_1 = require("jsdom");
const getHtmlContent = (html, replacers = {}) => {
    const { window } = new jsdom_1.JSDOM();
    Object.entries(replacers).forEach(([k, v]) => {
        const k1 = `{{${k}}}`;
        html = html.replaceAll(k1, v);
    });
    return (0, html_to_pdfmake_1.default)(html, { window });
};
exports.getHtmlContent = getHtmlContent;
//# sourceMappingURL=html-to-pdfmake.js.map