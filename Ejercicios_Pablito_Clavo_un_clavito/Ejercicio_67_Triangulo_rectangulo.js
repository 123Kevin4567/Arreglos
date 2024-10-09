//------------------------------ 67 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero y muestre por pantalla un
// triángulo rectángulo como el de más abajo, de altura el número introducido.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function dibujarTriangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        console.log('* '.repeat(i).trim());
    }
}


readline.question('Ingrese un número entero para la altura del triángulo: ', (input) => {
    const altura = parseInt(input);

    if (altura > 0) {
        dibujarTriangulo(altura);
    } else {
        console.log('Por favor, ingrese un número entero positivo.');
    }

    readline.close();
});
