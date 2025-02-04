import type { Content } from "pdfmake/interfaces";
import { DateFormatter } from "../../helpers/date-formatter";

interface Options {
    title?: string;
    subTitle?: string;
    showLogo?: boolean;
    showDate?: boolean;
}

const LOGO: Content = {
    image: './assets/imgs/tucan-code-logo.png',
    width: 100,
};

export const getHeaderSection = ({ title, subTitle, showLogo = true, showDate = true }: Options): Content => {
    const headerLogo: Content = showLogo ? LOGO : null;

    const headerDate: Content = showDate ? {
        text: DateFormatter.getDDMMMYYY(new Date()),
        alignment: 'right',
        margin: [20, 45],
        width: 100,
        fontSize: 10
    } : null;

    const headerTitle: Content = title ? {
        stack: [
            {
                text: `${title}`,
                alignment: 'center',
                margin: [0, 15, 0, 0],
                style: {
                    fontSize: 32,
                    bold: true,
                }
            },
            {
                text: `${subTitle}`,
                alignment: 'center',
                style: {
                    fontSize: 24,
                }
            },
        ],
    } : null;

    return {
        columns: [
            headerLogo,
            headerTitle,
            headerDate,
        ]
    };
};
