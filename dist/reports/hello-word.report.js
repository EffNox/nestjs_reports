"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHelloWordReport = void 0;
const getHelloWordReport = ({ name }) => {
    const docDefinition = {
        watermark: { text: 'test watermark', color: 'blue', opacity: 0.1, bold: true, italics: false, },
        content: [`Hola ${name}`],
    };
    return docDefinition;
};
exports.getHelloWordReport = getHelloWordReport;
//# sourceMappingURL=hello-word.report.js.map