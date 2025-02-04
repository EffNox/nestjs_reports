"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _DateFormatter_formatter;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
class DateFormatter {
    static getDDMMMYYY(date) {
        return __classPrivateFieldGet(this, _a, "f", _DateFormatter_formatter).format(date ?? new Date());
    }
}
exports.DateFormatter = DateFormatter;
_a = DateFormatter;
_DateFormatter_formatter = { value: new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    }) };
//# sourceMappingURL=date-formatter.js.map