"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrdersByIdReport = void 0;
const currency_formatter_1 = require("../helpers/currency-formatter");
const date_formatter_1 = require("../helpers/date-formatter");
const footer_section_1 = require("./sections/footer.section");
const LOGO = {
    image: './assets/imgs/tucan-banner.png',
    width: 100,
    height: 30,
    margin: [10, 20]
};
const styles = {
    header: {
        fontSize: 20,
        bold: true,
        margin: [0, 30, 0, 0]
    },
    subHeader: {
        fontSize: 16,
        margin: [0, 20, 0, 0],
        bold: true,
    },
};
const getOrdersByIdReport = ({ data }) => {
    const subTotal = data.order_details.reduce((acc, v) => acc + v.quantity * +v.products.price, 0);
    const total = subTotal * 0.17;
    return {
        styles,
        header: LOGO,
        pageMargins: [40, 40],
        footer: footer_section_1.getFooterSection,
        content: [
            {
                text: 'Tucan Code',
                style: 'header',
            },
            {
                columns: [
                    {
                        text: 'Jr. Alguna dirección de algún lugar, ps. 28\nLima, Perú\nBN: 12312313123123 \nSCODE: 12313123123'
                    },
                    {
                        text: [
                            { text: `Recibo No. ${data.order_id}`, bold: true },
                            `\nFecha del recibo ${date_formatter_1.DateFormatter.getDDMMMYYY(data.order_date)}\nPagar antes de: ${date_formatter_1.DateFormatter.getDDMMMYYY()}\n`,
                        ],
                        alignment: 'right'
                    },
                ]
            },
            {
                qr: 'text in QR',
                foreground: 'yellow',
                background: 'black',
                alignment: 'right',
            },
            {
                text: [
                    { text: 'Cobrar a:\n', style: 'subHeader' },
                    `Razón Social: ${data.customers.customer_name}
                     Contacto ${data.customers.contact_name}
                     Grenzacherweg 237
                     `,
                ]
            },
            {
                layout: 'headerLineOnly',
                margin: [0, 20],
                table: {
                    headerRows: 1,
                    widths: [30, '*', 'auto', 'auto', 'auto'],
                    body: [
                        ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
                        ...data.order_details.map((det) => [
                            det.order_detail_id,
                            det.products.product_name,
                            det.quantity,
                            {
                                text: currency_formatter_1.CurrencyFormatter.format(+det.products.price),
                                alignment: 'right'
                            },
                            {
                                text: currency_formatter_1.CurrencyFormatter.format(+det.products.price * det.quantity),
                                alignment: 'right',
                                bold: true
                            }
                        ]),
                    ]
                }
            },
            '\n\n',
            {
                columns: [
                    { width: '*', text: '' },
                    {
                        width: 'auto',
                        layout: 'noBorders',
                        table: {
                            body: [
                                [
                                    'Subtotal',
                                    {
                                        text: currency_formatter_1.CurrencyFormatter.format(subTotal),
                                        alignment: 'right',
                                    }
                                ],
                                [
                                    { text: 'Total', bold: true },
                                    {
                                        text: currency_formatter_1.CurrencyFormatter.format(total),
                                        alignment: 'right',
                                        bold: true
                                    }
                                ]
                            ]
                        },
                    }
                ],
            }
        ],
    };
};
exports.getOrdersByIdReport = getOrdersByIdReport;
//# sourceMappingURL=orders-by-id.report.js.map