//------------------------------ 69 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero y muestre por consola un
// triángulo rectángulo como el de más abajo.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function dibujarTrianguloRectangulo(altura) {
    for (let i = 1; i <= altura; i++) {
        console.log('* '.repeat(i).trim());
    }
}


readline.question('Ingrese un número entero positivo para la altura del triángulo: ', (input) => {
    let altura = parseInt(input); 

    if (altura > 0) {
        dibujarTrianguloRectangulo(altura);
    } else {
        console.log('Por favor, ingrese un número entero positivo.');
    }
    
    readline.close(); 
});

