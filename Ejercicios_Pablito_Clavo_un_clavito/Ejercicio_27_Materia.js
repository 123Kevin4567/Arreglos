//------------------------------ 27 Ejercicio--------------------//
// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final



const PESO_PARCIALES = 0.55;
const PESO_EXAMEN = 0.30;
const PESO_TRABAJO = 0.15;

let parcial1 = parseFloat(prompt("Nota del primer parcial:"));
let parcial2 = parseFloat(prompt("Nota del segundo parcial:"));
let parcial3 = parseFloat(prompt("Nota del tercer parcial:"));
let examenFinal = parseFloat(prompt("Nota del examen final:"));
let trabajoFinal = parseFloat(prompt("Nota del trabajo final:"));


let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;


let notaFinal = (promedioParciales * PESO_PARCIALES) + 
                (examenFinal * PESO_EXAMEN) + 
                (trabajoFinal * PESO_TRABAJO);

console.log("Resultados:");
console.log("Promedio de parciales:", promedioParciales.toFixed(2));
console.log("Examen final:", examenFinal.toFixed(2));
console.log("Trabajo final:", trabajoFinal.toFixed(2));
console.log("Nota final:", notaFinal.toFixed(2));


if (notaFinal >= 6) {
    console.log("¡Felicidades! Has aprobado.");
} else {
    console.log("Lo siento, no has aprobado. Sigue esforzándote.");
}