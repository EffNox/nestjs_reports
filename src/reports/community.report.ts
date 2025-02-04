import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: string
}

export const getCommunityReport = ({ name }: ReportOptions): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        defaultStyle: { fontSize: 10 },
        content: [
            {
                columns: [
                    { image: 'assets/imgs/tucan-code-logo.png', width: 50 },
                    { alignment: 'center', text: 'Forest Admin Community Report\nCamino montaña km 145\nTeléfono: 123123123' },
                    {
                        alignment: 'right',
                        width: 140,
                        layout: 'borderBlue',
                        table: {
                            body: [
                                [
                                    {
                                        layout: 'noBorders',
                                        table: {
                                            body: [
                                                ['Nro.', '123-123'],
                                                ['Fecha', '2025-01-21'],
                                                ['Versión', '202501'],
                                            ]
                                        }
                                    }
                                ]
                            ]
                        }
                    },
                ]
            },
            {
                margin: [0, 5],
                canvas: [
                    {
                        type: 'line',
                        x1: 0,
                        y1: 5,
                        x2: 515,
                        y2: 5,
                        lineWidth: 2,
                        lineColor: '#3A4546'
                    }
                ]
            },
            {
                table: {
                    widths: ['auto', '*', 'auto', '*'],
                    body: [
                        [
                            {
                                text: 'Datos del cliente',
                                fillColor: '#5775e1',
                                color: 'white',
                                colSpan: 4,
                                border: [false, true, false, false]
                            },
                            { text: '' },
                            { text: '' },
                            { text: '' },
                        ],
                        [
                            {
                                text: 'Razón social',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: 'Nombre de la empresa',
                                fillColor: 'white',
                                color: 'black',
                            },
                            {
                                text: 'Dirección',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: 'Jr. asdasd',
                                fillColor: 'white',
                                color: 'black',
                            },
                        ],
                        [
                            {
                                text: 'RUC',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: '20342342423',
                                fillColor: 'white',
                                color: 'black',
                            },
                            {
                                text: 'Teléfono',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: '012938',
                                fillColor: 'white',
                                color: 'black',
                            },
                        ],
                        [
                            {
                                text: 'Giro',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },
                            {
                                text: '',
                                fillColor: 'white',
                                color: 'black',
                            },
                            {
                                text: 'Condición de pago',
                                fillColor: '#343a40',
                                color: 'white',
                            },
                            {
                                text: '',
                                fillColor: 'white',
                                color: 'black',
                            },
                        ],
                    ],
                }
            }
        ],
    };
    return docDefinition;
}
