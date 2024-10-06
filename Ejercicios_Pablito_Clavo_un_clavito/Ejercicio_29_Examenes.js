//------------------------------ 29 Ejercicio--------------------//
// Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.


function calcularPromedio(calificaciones) {
    let suma = 0;

   
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

   
    const promedio = suma / calificaciones.length;

    return promedio;
}


const calificacionesEstudiante = [4.5, 3.8, 4.0, 5.0];


const promedio = calcularPromedio(calificacionesEstudiante);

console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);