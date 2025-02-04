import { Module } from '@nestjs/common';
import { BasicReportsModule } from './modules/basic-reports/basic-reports.module';
import { ExtraReportsModule } from './modules/extra-reports/extra-reports.module';
import { StoreReportsModule } from './modules/store-reports/store-reports.module';

@Module({
  imports: [BasicReportsModule, StoreReportsModule, ExtraReportsModule],
})
export class AppModule { }
