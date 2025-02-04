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
exports.BasicReportsController = void 0;
const common_1 = require("@nestjs/common");
const basic_reports_service_1 = require("./basic-reports.service");
let BasicReportsController = class BasicReportsController {
    constructor(basicReportsService) {
        this.basicReportsService = basicReportsService;
    }
    async hello(res) {
        const pdfDoc = this.basicReportsService.hello();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async employmentLetter(res) {
        const pdfDoc = this.basicReportsService.employmentLetter();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async employmentLetterById(res, id) {
        const pdfDoc = await this.basicReportsService.employmentLetterById(+id);
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
    async countries(res) {
        const pdfDoc = await this.basicReportsService.getCountriesReport();
        pdfDoc.pipe(res);
        pdfDoc.end();
    }
};
exports.BasicReportsController = BasicReportsController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasicReportsController.prototype, "hello", null);
__decorate([
    (0, common_1.Get)('employment-letter'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasicReportsController.prototype, "employmentLetter", null);
__decorate([
    (0, common_1.Get)('employment-letter/:id'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BasicReportsController.prototype, "employmentLetterById", null);
__decorate([
    (0, common_1.Get)('countries'),
    (0, common_1.Header)('Content-type', 'application/pdf'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BasicReportsController.prototype, "countries", null);
exports.BasicReportsController = BasicReportsController = __decorate([
    (0, common_1.Controller)('basic-reports'),
    __metadata("design:paramtypes", [basic_reports_service_1.BasicReportsService])
], BasicReportsController);
//# sourceMappingURL=basic-reports.controller.js.map