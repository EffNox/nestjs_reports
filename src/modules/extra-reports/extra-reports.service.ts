import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getHtmlContent } from '../../helpers/html-to-pdfmake';
import { getCommunityReport } from '../../reports/community.report';
import { getFooterSection } from '../../reports/sections/footer.section';
import { getHeaderSection } from '../../reports/sections/header.section';
import { PrinterService } from '../printer/printer.service';

@Injectable()
export class ExtraReportsService {
    constructor(private readonly printerService: PrinterService) { }

    getHtmlReport() {
        const html = readFileSync(`src/reports/html/basic-03.html`, 'utf8')

        const content = getHtmlContent(html, { client: 'Fernando P.', title: 'Algún título' });

        const docDefinition: TDocumentDefinitions = {
            pageMargins: [40, 110, 40, 60],
            header: getHeaderSection({ title: `Html to PDFMAKE`, subTitle: `Convertir HTML a PDFMake` }),
            content: ['Hola mundo', content],
            footer: getFooterSection,
        }

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Html-Report';

        return PDF;
    }

    getCommunity() {
        const docDefinition = getCommunityReport({ name: 'asd' });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Billing-Report';

        return PDF;
    }

    getCustomSize() {
        const PDF = this.printerService.createPDF({
            // pageSize: 'RA1',
            pageSize: { width: 150, height: 300 },
            content: [
                { qr: `sadadsasdas`, fit: 100, alignment: 'center' },
                { margin: [0, 20], text: 'Reporte con tamaño', fontSize: 10, alignment: 'center' }
            ],
        });

        PDF.info.Title = 'Billing-Report';

        return PDF;
    }

}
