import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: string
}

export const getHelloWordReport = ({ name }: ReportOptions): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        watermark: { text: 'test watermark', color: 'blue', opacity: 0.1, bold: true, italics: false, /* angle: 70  */ },
        content: [`Hola ${name}`],

        // userPassword: '123',
        // ownerPassword: '123456',
        // permissions: {
        //     printing: 'highResolution',
        //     modifying: false,
        //     copying: false,
        //     annotating: true,
        //     fillingForms: true,
        //     contentAccessibility: false,
        //     documentAssembly: true
        // },
    };
    return docDefinition;
}
