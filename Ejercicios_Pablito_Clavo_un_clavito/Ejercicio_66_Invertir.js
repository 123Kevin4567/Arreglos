//------------------------------ 66 Ejercicio--------------------//
// Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el
// número de años, y muestre por pantalla el capital obtenido en la inversión cada año que
// dura la inversión.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularInversion(cantidadInvertir, interesAnual, años) {
    let capital = cantidadInvertir;

    console.log(`Capital obtenido cada año:`);

    for (let i = 1; i <= años; i++) {
        capital += capital * (interesAnual / 100);
        console.log(`Año ${i}: $${capital.toFixed(2)}`);
    }
}


readline.question('Ingrese la cantidad a invertir: ', (cantidad) => {
    readline.question('Ingrese el interés anual (en %): ', (interes) => {
        readline.question('Ingrese el número de años: ', (anios) => {
            const cantidadInvertir = parseFloat(cantidad);
            const interesAnual = parseFloat(interes);
            const años = parseInt(anios);

            if (cantidadInvertir > 0 && interesAnual > 0 && años > 0) {
                calcularInversion(cantidadInvertir, interesAnual, años);
            } else {
                console.log('Por favor, ingrese valores válidos.');
            }
            
            readline.close(); 
        });
    });
});
