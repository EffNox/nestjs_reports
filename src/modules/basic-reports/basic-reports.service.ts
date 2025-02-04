import { Injectable, NotFoundException, type OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { getCountriesReport } from '../../reports/countries.report';
import { getEmploymentLetterByIdReport } from '../../reports/employment-letter-by-id.report.';
import { getEmploymentLetterReport } from '../../reports/employment-letter.report';
import { getHelloWordReport } from '../../reports/hello-word.report';
import { PrinterService } from '../printer/printer.service';

@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {
    constructor(private readonly printerService: PrinterService) { super(); }

    onModuleInit = this.$connect;

    hello() {
        const docDefinition = getHelloWordReport({ name: 'Fernando P.' });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';

        return PDF;
    }

    employmentLetter() {
        const docDefinition = getEmploymentLetterReport();

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';

        return PDF;
    }

    async employmentLetterById(id: number) {

        const employee = await this.employees.findUnique({ where: { id } })

        if (!employee) throw new NotFoundException(`Empleado con id ${id} no existe`);

        const docDefinition = getEmploymentLetterByIdReport({
            employerName: 'F. P.',
            employerPosition: 'Gerente de Gerentes',
            employeeName: employee.name,
            employeePosition: employee.position,
            employeeHours: employee.hours_per_day,
            employeeStartDate: employee.start_date,
            employeeWorkSchedule: employee.work_schedule,
            employerCompany: 'F. P. Inc.'
        });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';

        return PDF;
    }

    async getCountriesReport() {
        const data = await this.countries.findMany({
            where: {
                local_name: { not: null }
            }
        });

        const docDefinition = getCountriesReport({ data });

        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';

        return PDF;
    }

}
