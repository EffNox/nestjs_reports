"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaderSection = void 0;
const date_formatter_1 = require("../../helpers/date-formatter");
const LOGO = {
    image: './assets/imgs/tucan-code-logo.png',
    width: 100,
};
const getHeaderSection = ({ title, subTitle, showLogo = true, showDate = true }) => {
    const headerLogo = showLogo ? LOGO : null;
    const headerDate = showDate ? {
        text: date_formatter_1.DateFormatter.getDDMMMYYY(new Date()),
        alignment: 'right',
        margin: [20, 45],
        width: 100,
        fontSize: 10
    } : null;
    const headerTitle = title ? {
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
exports.getHeaderSection = getHeaderSection;
//# sourceMappingURL=header.section.js.map