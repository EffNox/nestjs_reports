import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
export declare class StoreReportsService extends PrismaClient {
    private readonly printerService;
    constructor(printerService: PrinterService);
    getOrderByIdReport(order_id: number): Promise<PDFKit.PDFDocument>;
    getSvgChart(): Promise<PDFKit.PDFDocument>;
    getStatistics(): Promise<PDFKit.PDFDocument>;
}
