"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrinterService = void 0;
const common_1 = require("@nestjs/common");
const pdfmake_1 = __importDefault(require("pdfmake"));
const FONTS = {
    Roboto: {
        normal: './assets/fonts/Roboto-Regular.ttf',
        bold: './assets/fonts/Roboto-Medium.ttf',
        italics: './assets/fonts/Roboto-Italic.ttf',
        bolditalics: './assets/fonts/Roboto-MediumItalic.ttf'
    }
};
const customTableLayouts = {
    blueHeaders: {
        hLineWidth: (i, node) => {
            if (i === 0 || i === node.table.body.length - 1)
                return 0;
            return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: (i) => 0,
        hLineColor: (i) => i === 1 ? 'black' : '#bbb',
        paddingLeft: (i) => i === 0 ? 0 : 8,
        paddingRight: (i, node) => (i === node.table.widths.length - 1) ? 0 : 8,
        fillColor: (i, node) => {
            if (i === 0 || i === node.table.body.length - 1)
                return '#13b8eb';
            return i % 2 === 0 ? '#f3f3f3' : '';
        },
    },
    borderBlue: {
        hLineColor: () => '#5f96d4',
        vLineColor: () => '#5f96d4',
    },
};
let PrinterService = class PrinterService {
    constructor() {
        this.printer = new pdfmake_1.default(FONTS);
    }
    createPDF(docDefinition, options = {
        tableLayouts: customTableLayouts,
    }) {
        return this.printer.createPdfKitDocument(docDefinition, options);
    }
};
exports.PrinterService = PrinterService;
exports.PrinterService = PrinterService = __decorate([
    (0, common_1.Injectable)()
], PrinterService);
//# sourceMappingURL=printer.service.js.map