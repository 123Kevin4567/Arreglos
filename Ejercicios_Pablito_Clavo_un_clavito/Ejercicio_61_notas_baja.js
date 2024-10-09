//------------------------------ 61 Ejercicio--------------------//
// Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


function procesarNotas(notas) {
    let notaAlta = Math.max(...notas);
    let notaBaja = Math.min(...notas);
    let countMaxima = 0, countA = 0, countB = 0, countC = 0, countD = 0;


    for (let nota of notas) {
        if (nota === 100) {
            countMaxima++;
        } else if (nota >= 90) {
            countA++;
        } else if (nota >= 80) {
            countB++;
        } else if (nota >= 70) {
            countC++;
        } else if (nota >= 60) {
            countD++;
        }
    }


    console.log(`Nota más alta: ${notaAlta}`);
    console.log(`Nota más baja: ${notaBaja}`);
    console.log(`Alumnos con la nota máxima (100): ${countMaxima}`);
    console.log(`Alumnos con calificación 'a' (90-99): ${countA}`);
    console.log(`Alumnos con calificación 'b' (80-89): ${countB}`);
    console.log(`Alumnos con calificación 'c' (70-79): ${countC}`);
    console.log(`Alumnos con calificación 'd' (60-69): ${countD}`);
}


let notas = [];
readline.question("¿Cuántas notas vas a ingresar? ", (cantidad) => {
    cantidad = parseInt(cantidad);

    let contador = 0; 

    const pedirNota = () => {
        if (contador < cantidad) {
            readline.question(`Ingresa la nota del alumno ${contador + 1} (1-100): `, (notaInput) => {
                let nota = parseInt(notaInput);

                if (nota >= 1 && nota <= 100) {
                    notas.push(nota);
                    contador++;
                    pedirNota();
                } else {
                    console.log('Nota inválida, ingresa un número entre 1 y 100.');
                    pedirNota(); 
                }
            });
        } else {
            procesarNotas(notas); 
            readline.close();
        }
    };

    pedirNota(); 
});
