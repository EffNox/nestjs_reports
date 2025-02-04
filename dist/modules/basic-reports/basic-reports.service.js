"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicReportsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const countries_report_1 = require("../../reports/countries.report");
const employment_letter_by_id_report_1 = require("../../reports/employment-letter-by-id.report.");
const employment_letter_report_1 = require("../../reports/employment-letter.report");
const hello_word_report_1 = require("../../reports/hello-word.report");
const printer_service_1 = require("../printer/printer.service");
let BasicReportsService = class BasicReportsService extends client_1.PrismaClient {
    constructor(printerService) {
        super();
        this.printerService = printerService;
        this.onModuleInit = this.$connect;
    }
    hello() {
        const docDefinition = (0, hello_word_report_1.getHelloWordReport)({ name: 'Fernando P.' });
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';
        return PDF;
    }
    employmentLetter() {
        const docDefinition = (0, employment_letter_report_1.getEmploymentLetterReport)();
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';
        return PDF;
    }
    async employmentLetterById(id) {
        const employee = await this.employees.findUnique({ where: { id } });
        if (!employee)
            throw new common_1.NotFoundException(`Empleado con id ${id} no existe`);
        const docDefinition = (0, employment_letter_by_id_report_1.getEmploymentLetterByIdReport)({
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
        const docDefinition = (0, countries_report_1.getCountriesReport)({ data });
        const PDF = this.printerService.createPDF(docDefinition);
        PDF.info.Title = 'Hola Mundo';
        return PDF;
    }
};
exports.BasicReportsService = BasicReportsService;
exports.BasicReportsService = BasicReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [printer_service_1.PrinterService])
], BasicReportsService);
//# sourceMappingURL=basic-reports.service.js.map