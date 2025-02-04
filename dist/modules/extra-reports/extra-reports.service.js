"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraReportsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const html_to_pdfmake_1 = require("../../helpers/html-to-pdfmake");
const community_report_1 = require("../../reports/community.report");
const footer_section_1 = require("../../reports/sections/footer.section");
const header_section_1 = require("../../reports/sections/header.section");
const printer_service_1 = require("../printer/printer.service");
let ExtraReportsService = class ExtraReportsService {
    constructor(printerService) {
        this.printerService = printerService;
    }
    getHtmlReport() {
        const html = (0, fs_1.readFileSync)(`src/reports/html/basic-03.html`, 'utf8');
        const content = (0, html_to_pdfmake_1.getHtmlContent)(html, { client: 'Fernando P.', title: 'Algún título' });
        const docDefinition = {
            pageMargins: [40, 110, 40, 60],
            header: (0, header_section_1.getHeaderSection)({ title: `Html to PDFMAKE`, subTitle: `Convertir HTML a PDFMake` }),
            content: ['Hola mundo', content],
            footer: footer_section_1.getFooterSection,
        };
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Html-Report';
        return PDF;
    }
    getCommunity() {
        const docDefinition = (0, community_report_1.getCommunityReport)({ name: 'asd' });
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Billing-Report';
        return PDF;
    }
    getCustomSize() {
        const PDF = this.printerService.createPDF({
            pageSize: { width: 150, height: 300 },
            content: [
                { qr: `sadadsasdas`, fit: 100, alignment: 'center' },
                { margin: [0, 20], text: 'Reporte con tamaño', fontSize: 10, alignment: 'center' }
            ],
        });
        PDF.info.Title = 'Billing-Report';
        return PDF;
    }
};
exports.ExtraReportsService = ExtraReportsService;
exports.ExtraReportsService = ExtraReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [printer_service_1.PrinterService])
], ExtraReportsService);
//# sourceMappingURL=extra-reports.service.js.map