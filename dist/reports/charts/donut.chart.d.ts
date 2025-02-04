interface DonutEntry {
    label: string;
    value: string;
}
interface DonutOps {
    entries: DonutEntry[];
}
export declare const getDonutChart: (ops: DonutOps) => Promise<string>;
export {};
