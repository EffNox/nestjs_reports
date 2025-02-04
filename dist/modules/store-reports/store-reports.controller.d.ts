import type { Response } from 'express';
import { StoreReportsService } from './store-reports.service';
export declare class StoreReportsController {
    private readonly storeReportsService;
    constructor(storeReportsService: StoreReportsService);
    getOrderByIdReport(res: Response, id: string): Promise<void>;
    getSvgs(res: Response): Promise<void>;
    statistics(res: Response): Promise<void>;
}
