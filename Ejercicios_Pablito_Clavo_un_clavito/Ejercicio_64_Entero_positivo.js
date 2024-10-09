//------------------------------ 64 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarImpares(numero) {
    if (numero > 0) {
        let impares = [];

        for (let i = 1; i <= numero; i += 2) {
            impares.push(i);
        }

        console.log(`Números impares desde el 1 hasta ${numero}: ${impares.join(', ')}`);
    } else {
        console.log('Por favor, escribe un número positivo válido.');
    }
}


readline.question('¿Cuál es tu número entero positivo? ', (respuesta) => {
    const numero = parseInt(respuesta);
    mostrarImpares(numero);
    readline.close(); 
});
