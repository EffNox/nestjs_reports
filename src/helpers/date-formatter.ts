export class DateFormatter {
    static #formatter = new Intl.DateTimeFormat('es-ES', {
        year: 'numeric',
        month: 'long',
        day: '2-digit',
    })

    static getDDMMMYYY(date?: Date): string {
        return this.#formatter.format(date ?? new Date());
    }
}
