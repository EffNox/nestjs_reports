import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import type { BufferOptions, CustomTableLayout, TDocumentDefinitions } from 'pdfmake/interfaces';

const FONTS = {
    Roboto: {
        normal: './assets/fonts/Roboto-Regular.ttf',
        bold: './assets/fonts/Roboto-Medium.ttf',
        italics: './assets/fonts/Roboto-Italic.ttf',
        bolditalics: './assets/fonts/Roboto-MediumItalic.ttf'
    }
};

const customTableLayouts: Record<string, CustomTableLayout> = {
    blueHeaders: {
        hLineWidth: (i, node) => {
            if (i === 0 || i === node.table.body.length - 1) return 0;
            return (i === node.table.headerRows) ? 2 : 1;
        },
        vLineWidth: (i) => 0,
        hLineColor: (i) => i === 1 ? 'black' : '#bbb',
        paddingLeft: (i) => i === 0 ? 0 : 8,
        paddingRight: (i, node) => (i === node.table.widths.length - 1) ? 0 : 8,
        // fillColor: (i, node) => i === 0 ? '#13b8eb' : i % 2 === 0 ? '#f3f3f3' : '',
        fillColor: (i, node) => {
            if (i === 0 || i === node.table.body.length - 1) return '#13b8eb';
            return i % 2 === 0 ? '#f3f3f3' : ''
        },
    },
    borderBlue: {
        hLineColor: () => '#5f96d4',
        vLineColor: () => '#5f96d4',
    },
}

@Injectable()
export class PrinterService {
    private printer = new PdfPrinter(FONTS);

    createPDF(
        docDefinition: TDocumentDefinitions,
        options: BufferOptions = {
            tableLayouts: customTableLayouts,
        }
    ): PDFKit.PDFDocument {
        return this.printer.createPdfKitDocument(docDefinition, options);
    }

}
