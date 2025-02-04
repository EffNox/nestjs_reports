import type { TDocumentDefinitions } from "pdfmake/interfaces";
interface ReportValues {
    employerName: string;
    employerPosition: string;
    employeeName: string;
    employeePosition: string;
    employeeStartDate: Date;
    employeeHours: number;
    employeeWorkSchedule: string;
    employerCompany: string;
}
export declare const getEmploymentLetterByIdReport: ({ employerName, employerPosition, employeeName, employeePosition, employeeStartDate, employeeHours, employeeWorkSchedule, employerCompany, }: ReportValues) => TDocumentDefinitions;
export {};
