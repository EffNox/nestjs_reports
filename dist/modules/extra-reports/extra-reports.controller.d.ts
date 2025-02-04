import { Response } from 'express';
import { ExtraReportsService } from './extra-reports.service';
export declare class ExtraReportsController {
    private readonly extraReportsService;
    constructor(extraReportsService: ExtraReportsService);
    getHtmlReport(res: Response): Promise<void>;
    getCommunityReport(res: Response): Promise<void>;
    getCustomSizeReport(res: Response): Promise<void>;
}
