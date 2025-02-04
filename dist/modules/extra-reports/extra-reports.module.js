"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtraReportsModule = void 0;
const common_1 = require("@nestjs/common");
const printer_module_1 = require("../printer/printer.module");
const extra_reports_controller_1 = require("./extra-reports.controller");
const extra_reports_service_1 = require("./extra-reports.service");
let ExtraReportsModule = class ExtraReportsModule {
};
exports.ExtraReportsModule = ExtraReportsModule;
exports.ExtraReportsModule = ExtraReportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [extra_reports_controller_1.ExtraReportsController],
        providers: [extra_reports_service_1.ExtraReportsService],
        imports: [printer_module_1.PrinterModule]
    })
], ExtraReportsModule);
//# sourceMappingURL=extra-reports.module.js.map