import { startDates, getSubjectsByYear, getExamDay } from './examDates.js';
import { formatDate } from './utils.js';

/**
 * Carga las materias correspondientes al año seleccionado en el elemento select.
 */
const loadSubjects = () => {
    const selectedYear = document.getElementById("year").value;
    const subjectsYear = getSubjectsByYear(selectedYear);
    const subjectSelect = document.getElementById("subject");
    
    subjectSelect.innerHTML = "";

    for (let subject in subjectsYear) {
        const option = document.createElement("option");
        option.value = subject;
        option.text = subject;
        subjectSelect.appendChild(option);
    }
};

/**
 * Agrega un encabezado de período de exámenes al resultado.
 *
 * @param {HTMLElement} result - El elemento donde se mostrará el resultado.
 * @param {string} period - El período de exámenes.
 */
const addExamPeriodHeader = (result, period) => {
    result.innerHTML += `<h3 style="margin-top: 20px;">Exámenes ${period}</h3>`;
};

/**
 * Agrega una fecha de examen al resultado.
 *
 * @param {HTMLElement} result - El elemento donde se mostrará el resultado.
 * @param {number} dateCounter - El contador de la fecha del examen.
 * @param {Date} examDate - La fecha del examen.
 */
const addExamDate = (result, dateCounter, examDate) => {
    result.innerHTML += `<p><strong>Llamado ${dateCounter}:</strong> ${formatDate(examDate)}</p>`;
};

/**
 * Calcula y muestra las fechas de los exámenes para la materia y año seleccionados.
 */
const calculateDatesExam = () => {
    const selectedYear = document.getElementById("year").value;
    const subjectsSelect = document.getElementById("subject").value;
    const result = document.getElementById("result");
    result.innerHTML = ""; 

    const dayExamen = getExamDay(selectedYear, subjectsSelect);

    if (dayExamen !== undefined) {
        let dateCounter = 1; 
        startDates.forEach((fechaInicio, index) => {
            if (index === 0) {
                addExamPeriodHeader(result, "noviembre/diciembre");
                dateCounter = 1;
            } else if (index === 2) {
                addExamPeriodHeader(result, "enero/febrero");
                dateCounter = 1;
            } else if (index === 4) {
                addExamPeriodHeader(result, "julio/agosto");
                dateCounter = 1;
            }

            const examDate = new Date(fechaInicio);
            examDate.setDate(fechaInicio.getDate() + dayExamen);

            addExamDate(result, dateCounter, examDate);
            dateCounter++; 
        });
    } else {
        result.innerText = "Por favor, selecciona una materia válida.";
    }
    result.style.display = "block";
};

/**
 * Carga las materias al seleccionar un año.
 */
window.onload = loadSubjects;
document.getElementById("year").addEventListener("change", loadSubjects);
document.getElementById("examenForm").addEventListener("submit", (e) => {
    e.preventDefault();
    calculateDatesExam();
});