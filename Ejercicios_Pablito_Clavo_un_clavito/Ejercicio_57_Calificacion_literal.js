//------------------------------ 57 Ejercicio--------------------//
// Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function asignarCalificacion(puntaje) {
    if (puntaje >= 9.1 && puntaje <= 10) {
        return 'A (Excelente)';
    } else if (puntaje >= 8.1 && puntaje <= 9) {
        return 'A (Muy bien)';
    } else if (puntaje >= 7.5 && puntaje <= 8) {
        return 'A (Bien)';
    } else {
        return 'NA (No Aprobado)';
    }
}

function solicitarPuntajes() {
    readline.question("Ingresa un puntaje (o escribe 'fin' para terminar): ", (entrada) => {
        if (entrada.toLowerCase() === 'fin') {
            console.log("Proceso finalizado. ¡Gracias!");
            readline.close();
            return;
        }

        const puntaje = parseFloat(entrada);
        if (isNaN(puntaje)) {
            console.log("Por favor, ingresa un número válido.");
        } else {
            console.log(`Puntaje: ${puntaje} - Calificación: ${asignarCalificacion(puntaje)}`);
        }

        
        solicitarPuntajes();
    });
}

solicitarPuntajes();
