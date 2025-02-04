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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraReportsController = void 0;
const common_1 = require("@nestjs/common");
const extra_reports_service_1 = require("./extra-reports.service");
let ExtraReportsController = class ExtraReportsController {
    constructor(extraReportsService) {
        this.extraReportsService = extraReportsService;
    }
    async getHtmlReport(res) {
        const pdfDoc = this.extraReportsService.getHtmlReport();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async getCommunityReport(res) {
        const pdfDoc = this.extraReportsService.getCommunity();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async getCustomSizeReport(res) {
        const pdfDoc = this.extraReportsService.getCustomSize();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
};
exports.ExtraReportsController = ExtraReportsController;
__decorate([
    (0, common_1.Get)('html-report'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExtraReportsController.prototype, "getHtmlReport", null);
__decorate([
    (0, common_1.Get)('community-report'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExtraReportsController.prototype, "getCommunityReport", null);
__decorate([
    (0, common_1.Get)('custom-size'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExtraReportsController.prototype, "getCustomSizeReport", null);
exports.ExtraReportsController = ExtraReportsController = __decorate([
    (0, common_1.Controller)('extra-reports'),
    __metadata("design:paramtypes", [extra_reports_service_1.ExtraReportsService])
], ExtraReportsController);
//# sourceMappingURL=extra-reports.controller.js.map