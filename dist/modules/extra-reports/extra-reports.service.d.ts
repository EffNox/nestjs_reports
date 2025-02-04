import { PrinterService } from '../printer/printer.service';
export declare class ExtraReportsService {
    private readonly printerService;
    constructor(printerService: PrinterService);
    getHtmlReport(): PDFKit.PDFDocument;
    getCommunity(): PDFKit.PDFDocument;
    getCustomSize(): PDFKit.PDFDocument;
}
