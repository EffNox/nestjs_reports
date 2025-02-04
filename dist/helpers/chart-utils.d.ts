interface ChartOptions {
    height?: number;
    width?: number;
}
interface ChartOptions {
    height?: number;
    width?: number;
}
export interface NumbersConfig {
    min?: number;
    max?: number;
    count?: number;
    from?: number;
    decimals?: number;
    continuity?: number;
}
export declare const chartJsToImage: (chartConf: unknown, ops?: ChartOptions) => Promise<string>;
export declare function srand(seed: any): void;
export declare function rand(min?: number, max?: number): number;
export declare const CHART_COLORS: string[];
export declare const NAMED_COLORS: {
    red: string;
    orange: string;
    yellow: string;
    green: string;
    blue: string;
    purple: string;
    grey: string;
};
export declare function transparentize(value: string, opacity: number): string;
export declare function numbers(config?: NumbersConfig): any[];
interface MonthsConfig {
    count?: number;
    section?: number;
}
export declare function months(config?: MonthsConfig): any[];
export {};
