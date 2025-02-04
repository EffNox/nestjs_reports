export class CurrencyFormatter {
    static format = (v: number): string =>
        new Intl.NumberFormat('es-PE', {
            style: 'currency',
            currency: 'PEN',
        }).format(v);
}
