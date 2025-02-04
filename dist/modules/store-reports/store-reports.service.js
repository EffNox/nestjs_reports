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
exports.StoreReportsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const basic_chart_svg_report_1 = require("../../reports/basic-chart-svg.report");
const orders_by_id_report_1 = require("../../reports/orders-by-id.report");
const statistics_report_1 = require("../../reports/statistics.report");
const printer_service_1 = require("../printer/printer.service");
let StoreReportsService = class StoreReportsService extends client_1.PrismaClient {
    constructor(printerService) {
        super();
        this.printerService = printerService;
    }
    async getOrderByIdReport(order_id) {
        const order = await this.orders.findUnique({
            where: { order_id },
            include: {
                customers: true,
                order_details: { include: { products: true, } }
            }
        });
        if (!order)
            throw new common_1.NotFoundException(`Orden con id ${order_id} no existe`);
        const docDefinition = (0, orders_by_id_report_1.getOrdersByIdReport)({ data: order });
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = `Order id ${order_id}`;
        return PDF;
    }
    async getSvgChart() {
        const docDefinition = await (0, basic_chart_svg_report_1.getBasicChartSvgReport)();
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = `Svg Chart`;
        return PDF;
    }
    async getStatistics() {
        const topCountriesDb = await this.customers.groupBy({
            by: ['country'],
            _count: true,
            orderBy: {
                _count: { country: 'desc' },
            },
            take: 10,
        });
        const topCountries = topCountriesDb.map(({ country, _count: customers }) => ({ country, customers }));
        const docDefinition = await (0, statistics_report_1.getStatisticsReport)({ topCountries });
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = `Svg Chart`;
        return PDF;
    }
};
exports.StoreReportsService = StoreReportsService;
exports.StoreReportsService = StoreReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [printer_service_1.PrinterService])
], StoreReportsService);
//# sourceMappingURL=store-reports.service.js.map