import { Controller, Get, Header, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExtraReportsService } from './extra-reports.service';

@Controller('extra-reports')
export class ExtraReportsController {
  constructor(private readonly extraReportsService: ExtraReportsService) { }

  @Get('html-report')
  @Header('Content-type', 'application/pdf')
  async getHtmlReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.getHtmlReport();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('community-report')
  @Header('Content-type', 'application/pdf')
  async getCommunityReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.getCommunity();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('custom-size')
  @Header('Content-type', 'application/pdf')
  async getCustomSizeReport(@Res() res: Response) {
    const pdfDoc = this.extraReportsService.getCustomSize();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }


}
