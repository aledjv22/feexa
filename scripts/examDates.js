/**
 * Fechas de inicio de los períodos de exámenes.
 * @type {Date[]}
 */
export const startDates = [
    new Date("2024-12-02"),
    new Date("2024-12-16"),
    new Date("2025-02-10"),
    new Date("2025-02-24"),
    new Date("2025-06-30"),
    new Date("2025-07-21"),
    new Date("2025-08-04"),
];

/**
 * Objeto que contiene las fechas de exámenes por año y materia.
 * Cada materia tiene un día específico en el que se realiza el examen.
 * @type {Object.<number, Object.<string, {day: number}>>}
 */
export const ExamdatesByYear = {
    1: {
        "INTRODUCCIÓN A LOS ALGORITMOS": { day: 1 },
        "ANÁLISIS MATEMÁTICO I": { day: 3 },
        "MATEMÁTICA DISCRETA I": { day: 4 },
        "ÁLGEBRA ": { day: 1 },
        "ALGORITMOS Y ESTRUCTURAS DE DATOS I": { day: 2 },
        "ANÁLISIS MATEMÁTICO II": { day: 4 },
    },
    2: {
        "ANÁLISIS NUMÉRICO ": { day: 2 },
        "ORGANIZACIÓN DEL COMPUTADOR": { day: 5 },
        "PROBABILIDAD Y ESTADÍSTICA": { day: 1 },
        "INTRODUCCIÓN A LA LÓGICA Y LA COMPUTACIÓN ": { day: 3 },
        "ALGORITMOS Y ESTRUCTURAS DE DATOS II": { day: 3 },
        "SISTEMAS OPERATIVOS": { day: 5 },
    },
    3: {
        "MATEMÁTICA DISCRETA II": { day: 1 },
        "PARADIGMAS DE PROGRAMACIÓN": { day: 3 },
        "REDES Y SISTEMAS DISTRIBUÍDOS": { day: 4 },
        "BASES DE DATOS": { day: 1 },
        "INGENIERÍA DEL SOFTWARE I": { day: 3 },
        "ARQUITECTURA DE COMPUTADORAS": { day: 5 },
    },
    4: {
        "FÍSICA": { day: 2 },
        "LÓGICA": { day: 4 },
        "MODELOS Y SIMULACIÓN": { day: 1 },
        "LENGUAJES FORMALES Y COMPUTABILIDAD": { day: 4 },
    },
    5: {
        "LENGUAJES Y COMPILADORES": { day: 2 },
        "INGENIERÍA DEL SOFTWARE II": { day: 4 },
    }, 
    6: {
        "EXAMEN DE SUFICIENCIA DE IDIOMA INGLÉS": { day: 5 },
        "OTRAS OPTATIVAS": { day: 5 },
    }
};

/**
 * Obtiene las materias correspondientes a un año específico.
 *
 * @param {number} year - El año de la carrera.
 * @returns {Object.<string, {day: number}>} Un objeto con las materias y sus días de examen.
 */
export const getSubjectsByYear = (year) => {
    return ExamdatesByYear[year] || {};
};

/**
 * Obtiene el día del examen para una materia específica en un año específico.
 *
 * @param {number} year - El año de la carrera.
 * @param {string} subject - La materia para la cual se desea obtener el día del examen.
 * @returns {number|undefined} El día del examen o undefined si no se encuentra la materia.
 */
export const getExamDay = (year, subject) => {
    return ExamdatesByYear[year]?.[subject]?.day;
};
