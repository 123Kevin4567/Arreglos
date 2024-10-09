//------------------------------ 60 Ejercicio--------------------//
// Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularPago(cursos) {
    let costoPorCurso;


    if (cursos <= 6) {
        costoPorCurso = 2000000; 
    } else {
        costoPorCurso = 1200000; 
    }

    return cursos * costoPorCurso;
}


readline.question('¿Cuántos cursos lleva el alumno? ', (entrada) => {
    const cursos = parseInt(entrada); 

    if (cursos > 0) {
        
        console.log(`Total a pagar por ${cursos} curso(s): $${calcularPago(cursos)}`);
    } else {
        
        console.log('Por favor, ingresa un número válido de cursos.');
    }
    readline.close();
});
