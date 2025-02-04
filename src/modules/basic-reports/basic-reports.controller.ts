import { Controller, Get, Header, Param, Res } from '@nestjs/common';
import type { Response } from 'express';
import { BasicReportsService } from './basic-reports.service';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }

  @Get()
  @Header('Content-type', 'application/pdf')
  async hello(@Res() res: Response) {
    const pdfDoc = this.basicReportsService.hello();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('employment-letter')
  @Header('Content-type', 'application/pdf')
  async employmentLetter(@Res() res: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('employment-letter/:id')
  @Header('Content-type', 'application/pdf')
  async employmentLetterById(@Res() res: Response, @Param('id') id) {
    const pdfDoc = await this.basicReportsService.employmentLetterById(+id);
    pdfDoc.pipe(res);
    pdfDoc.end();
  }

  @Get('countries')
  @Header('Content-type', 'application/pdf')
  async countries(@Res() res: Response) {
    const pdfDoc = await this.basicReportsService.getCountriesReport();
    pdfDoc.pipe(res);
    pdfDoc.end();
  }
}
