"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicReportsModule = void 0;
const common_1 = require("@nestjs/common");
const printer_module_1 = require("../printer/printer.module");
const basic_reports_controller_1 = require("./basic-reports.controller");
const basic_reports_service_1 = require("./basic-reports.service");
let BasicReportsModule = class BasicReportsModule {
};
exports.BasicReportsModule = BasicReportsModule;
exports.BasicReportsModule = BasicReportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [basic_reports_controller_1.BasicReportsController],
        providers: [basic_reports_service_1.BasicReportsService],
        imports: [printer_module_1.PrinterModule],
    })
], BasicReportsModule);
//# sourceMappingURL=basic-reports.module.js.map