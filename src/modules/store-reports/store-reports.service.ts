import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { getBasicChartSvgReport } from '../../reports/basic-chart-svg.report';
import { getOrdersByIdReport } from '../../reports/orders-by-id.report';
import { getStatisticsReport } from '../../reports/statistics.report';
import { PrinterService } from '../printer/printer.service';

@Injectable()
export class StoreReportsService extends PrismaClient {
    constructor(private readonly printerService: PrinterService) { super(); }

    async getOrderByIdReport(order_id: number) {
        const order = await this.orders.findUnique({
            where: { order_id },
            include: {
                customers: true,
                order_details: { include: { products: true, } }
            }
        });
        // console.log(`➥  order:`, JSON.stringify(order, null, 2));

        if (!order) throw new NotFoundException(`Orden con id ${order_id} no existe`);

        const docDefinition = getOrdersByIdReport({ data: order as any });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = `Order id ${order_id}`;

        return PDF;
    }

    async getSvgChart() {
        const docDefinition = await getBasicChartSvgReport();

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

        const docDefinition = await getStatisticsReport({ topCountries });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = `Svg Chart`;

        return PDF;
    }
}
