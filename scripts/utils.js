/**
 * Formatea una fecha en el formato DD/MM/YYYY.
 *
 * @param {Date} date - La fecha a formatear.
 * @returns {string} La fecha formateada como una cadena en el formato DD/MM/YYYY.
 */
export const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};