import type { Response } from 'express';
import { BasicReportsService } from './basic-reports.service';
export declare class BasicReportsController {
    private readonly basicReportsService;
    constructor(basicReportsService: BasicReportsService);
    hello(res: Response): Promise<void>;
    employmentLetter(res: Response): Promise<void>;
    employmentLetterById(res: Response, id: any): Promise<void>;
    countries(res: Response): Promise<void>;
}
