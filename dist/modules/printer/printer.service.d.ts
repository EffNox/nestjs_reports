import type { BufferOptions, TDocumentDefinitions } from 'pdfmake/interfaces';
export declare class PrinterService {
    private printer;
    createPDF(docDefinition: TDocumentDefinitions, options?: BufferOptions): PDFKit.PDFDocument;
}
