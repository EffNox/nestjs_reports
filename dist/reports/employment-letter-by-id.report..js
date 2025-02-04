"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmploymentLetterByIdReport = void 0;
const date_formatter_1 = require("../helpers/date-formatter");
const header_section_1 = require("./sections/header.section");
const styles = {
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
    },
    footer: {
        fontSize: 10,
        italics: true,
        alignment: 'center',
        margin: [0, 0, 0, 20],
    },
};
const getEmploymentLetterByIdReport = ({ employerName, employerPosition, employeeName, employeePosition, employeeStartDate, employeeHours, employeeWorkSchedule, employerCompany, }) => {
    const docDefinition = {
        styles,
        header: (0, header_section_1.getHeaderSection)({}),
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header',
            },
            {
                text: `Yo, ${employeeName}, en mi calidad de ${employeePosition} de ${employerCompany}, por medio de la presente certifico que ${employeeName} ha sido empleado en nuestra empresa desde el ${date_formatter_1.DateFormatter.getDDMMMYYY(employeeStartDate)}. \n\n
                Durante su empleo, el Sr./Sra. ${employeeName} ha desempeñado el cargo de ${employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\n
                La jornada laboral del Sr./ Sra. ${employeeName} es de ${employeeHours} horas semanales, con un horario de ${employeeWorkSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa.\n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente. \n\n`,
                style: 'body',
            },
            { text: `Atentamente`, style: 'signature' },
            { text: employeeName, style: 'signature' },
            { text: employeePosition, style: 'signature' },
            { text: employerCompany, style: 'signature' },
            { text: date_formatter_1.DateFormatter.getDDMMMYYY(new Date()), style: 'signature' },
        ],
        footer: {
            text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
            style: 'footer',
        },
    };
    return docDefinition;
};
exports.getEmploymentLetterByIdReport = getEmploymentLetterByIdReport;
//# sourceMappingURL=employment-letter-by-id.report..js.map