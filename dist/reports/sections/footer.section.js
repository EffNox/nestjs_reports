"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFooterSection = void 0;
const getFooterSection = (currentPage, pageCount) => ({
    text: `Pág. ${currentPage} de ${pageCount}`,
    bold: true,
    alignment: 'right',
    margin: [20, 20]
});
exports.getFooterSection = getFooterSection;
//# sourceMappingURL=footer.section.js.map