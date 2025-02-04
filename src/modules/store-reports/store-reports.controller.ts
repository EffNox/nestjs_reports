import { Controller, Get, Header, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { StoreReportsService } from './store-reports.service';

@Controller('store-reports')
export class StoreReportsController {
  constructor(private readonly storeReportsService: StoreReportsService) { }

  @Get('order/:id')
  @Header('Content-type', 'application/pdf')
  async getOrderByIdReport(@Res() res: Response, @Param('id') id: string) {
    const pdfDoc = await this.storeReportsService.getOrderByIdReport(+id);
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('svgs-charts')
  @Header('Content-type', 'application/pdf')
  async getSvgs(@Res() res: Response) {
    const pdfDoc = await this.storeReportsService.getSvgChart();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('statistics')
  @Header('Content-type', 'application/pdf')
  async statistics(@Res() res: Response) {
    const pdfDoc = await this.storeReportsService.getStatistics();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }


}
