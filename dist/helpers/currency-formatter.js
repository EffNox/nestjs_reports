"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyFormatter = void 0;
class CurrencyFormatter {
}
exports.CurrencyFormatter = CurrencyFormatter;
CurrencyFormatter.format = (v) => new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
}).format(v);
//# sourceMappingURL=currency-formatter.js.map