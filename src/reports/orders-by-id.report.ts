import type { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { CurrencyFormatter } from "../helpers/currency-formatter";
import { DateFormatter } from "../helpers/date-formatter";
import { getFooterSection } from "./sections/footer.section";

const LOGO: Content = {
    image: './assets/imgs/tucan-banner.png',
    width: 100,
    height: 30,
    margin: [10, 20]
}

const styles: StyleDictionary = {
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
}

interface Values {
    title?: string,
    subTitle?: string,
    data: CompleteOrder,
}


export interface CompleteOrder {
    order_id: number;
    customer_id: number;
    order_date: Date;
    customers: Customers;
    order_details: OrderDetail[];
}

export interface Customers {
    customer_id: number;
    customer_name: string;
    contact_name: string;
    address: string;
    city: string;
    postal_code: string;
    country: string;
}

export interface OrderDetail {
    order_detail_id: number;
    order_id: number;
    product_id: number;
    quantity: number;
    products: Products;
}

export interface Products {
    product_id: number;
    product_name: string;
    category_id: number;
    unit: string;
    price: string;
}



export const getOrdersByIdReport = ({ data }: Values): TDocumentDefinitions => {
    // console.log(`➥  `, Object.keys(data.order_details.at(0)));

    const subTotal = data.order_details.reduce((acc, v) => acc + v.quantity * +v.products.price, 0)
    const total = subTotal * 0.17;

    return {
        styles,
        header: LOGO,
        pageMargins: [40, 40],
        footer: getFooterSection,
        content: [
            // Cabecera
            {
                text: 'Tucan Code',
                style: 'header',
            },
            // Dirección y número de recibo
            {
                columns: [
                    {
                        text: 'Jr. Alguna dirección de algún lugar, ps. 28\nLima, Perú\nBN: 12312313123123 \nSCODE: 12313123123'
                    },
                    {
                        text: [
                            { text: `Recibo No. ${data.order_id}`, bold: true },
                            `\nFecha del recibo ${DateFormatter.getDDMMMYYY(data.order_date)}\nPagar antes de: ${DateFormatter.getDDMMMYYY()}\n`,
                        ],
                        alignment: 'right'
                    },
                ]
            },

            // QR
            {
                qr: 'text in QR',
                foreground: 'yellow',
                background: 'black',
                alignment: 'right',
                // fit: 50
            },
            // Dirección del cliente
            {
                text: [
                    { text: 'Cobrar a:\n', style: 'subHeader' },
                    `Razón Social: ${data.customers.customer_name}
                     Contacto ${data.customers.contact_name}
                     Grenzacherweg 237
                     `,
                ]
            },

            // Table del detalle de la orden
            {
                layout: 'headerLineOnly',
                margin: [0, 20],
                table: {
                    headerRows: 1,
                    widths: [30, '*', 'auto', 'auto', 'auto'],
                    body: [
                        ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],
                        // Object.keys(data.order_details.at(0)),
                        ...data.order_details.map((det) => [
                            det.order_detail_id,
                            det.products.product_name,
                            det.quantity,
                            {
                                text: CurrencyFormatter.format(+det.products.price),
                                alignment: 'right'
                            },
                            {
                                text: CurrencyFormatter.format(+det.products.price * det.quantity),
                                alignment: 'right',
                                bold: true
                            }
                        ]),
                    ]
                }
            },

            '\n\n',

            // Totales
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
                                        text: CurrencyFormatter.format(subTotal),
                                        alignment: 'right',
                                    }
                                ],
                                [
                                    { text: 'Total', bold: true },
                                    {
                                        text: CurrencyFormatter.format(total),
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
    }
}
