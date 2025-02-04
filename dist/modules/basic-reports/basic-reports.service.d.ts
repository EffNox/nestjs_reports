import { type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from '../printer/printer.service';
export declare class BasicReportsService extends PrismaClient implements OnModuleInit {
    private readonly printerService;
    constructor(printerService: PrinterService);
    onModuleInit: () => import("@prisma/client/runtime/library").JsPromise<void>;
    hello(): PDFKit.PDFDocument;
    employmentLetter(): PDFKit.PDFDocument;
    employmentLetterById(id: number): Promise<PDFKit.PDFDocument>;
    getCountriesReport(): Promise<PDFKit.PDFDocument>;
}
