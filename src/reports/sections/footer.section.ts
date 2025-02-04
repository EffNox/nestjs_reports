import type { Content } from "pdfmake/interfaces";

export const getFooterSection = (currentPage, pageCount): Content => ({
    text: `Pág. ${currentPage} de ${pageCount}`,
    bold: true,
    alignment: 'right',
    margin: [20, 20]
})
