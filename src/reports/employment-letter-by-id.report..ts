import type { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { DateFormatter } from "../helpers/date-formatter";
import { getHeaderSection } from "./sections/header.section";

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

const styles: StyleDictionary = {
    header: {
        fontSize: 22,
        bold: true,
        alignment: 'center',
        margin: [0, 60, 0, 20],
    },
    body: {
        alignment: 'justify',
        margin: [0, 0, 0, 70],
    },
    signature: {
        fontSize: 14,
        bold: true,
        // alignment: 'left',
    },
    footer: {
        fontSize: 10,
        italics: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
    },
};

export const getEmploymentLetterByIdReport = ({
    employerName,
    employerPosition,
    employeeName,
    employeePosition,
    employeeStartDate,
    employeeHours,
    employeeWorkSchedule,
    employerCompany,
}: ReportValues): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        styles,
        header: getHeaderSection({}),
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header',
            },
            {
                text: `Yo, ${employeeName}, en mi calidad de ${employeePosition} de ${employerCompany}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${DateFormatter.getDDMMMYYY(employeeStartDate)}. \n\n
                Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n
                La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa.\n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente. \n\n`,
                style: 'body',
            },
            { text: `Atentamente`, style: 'signature' },
            { text: employeeName, style: 'signature' },
            { text: employeePosition, style: 'signature' },
            { text: employerCompany, style: 'signature' },
            { text: DateFormatter.getDDMMMYYY(new Date()), style: 'signature' },
        ],
        footer: {
            text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
            style: 'footer',
        },
    }
    return docDefinition;
}
