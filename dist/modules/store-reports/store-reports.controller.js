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
exports.StoreReportsController = void 0;
const common_1 = require("@nestjs/common");
const store_reports_service_1 = require("./store-reports.service");
let StoreReportsController = class StoreReportsController {
    constructor(storeReportsService) {
        this.storeReportsService = storeReportsService;
    }
    async getOrderByIdReport(res, id) {
        const pdfDoc = await this.storeReportsService.getOrderByIdReport(+id);
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async getSvgs(res) {
        const pdfDoc = await this.storeReportsService.getSvgChart();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async statistics(res) {
        const pdfDoc = await this.storeReportsService.getStatistics();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
};
exports.StoreReportsController = StoreReportsController;
__decorate([
    (0, common_1.Get)('order/:id'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], StoreReportsController.prototype, "getOrderByIdReport", null);
__decorate([
    (0, common_1.Get)('svgs-charts'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreReportsController.prototype, "getSvgs", null);
__decorate([
    (0, common_1.Get)('statistics'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreReportsController.prototype, "statistics", null);
exports.StoreReportsController = StoreReportsController = __decorate([
    (0, common_1.Controller)('store-reports'),
    __metadata("design:paramtypes", [store_reports_service_1.StoreReportsService])
], StoreReportsController);
//# sourceMappingURL=store-reports.controller.js.map