"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreReportsModule = void 0;
const common_1 = require("@nestjs/common");
const printer_module_1 = require("../printer/printer.module");
const store_reports_controller_1 = require("./store-reports.controller");
const store_reports_service_1 = require("./store-reports.service");
let StoreReportsModule = class StoreReportsModule {
};
exports.StoreReportsModule = StoreReportsModule;
exports.StoreReportsModule = StoreReportsModule = __decorate([
    (0, common_1.Module)({
        controllers: [store_reports_controller_1.StoreReportsController],
        providers: [store_reports_service_1.StoreReportsService],
        imports: [printer_module_1.PrinterModule],
    })
], StoreReportsModule);
//# sourceMappingURL=store-reports.module.js.map