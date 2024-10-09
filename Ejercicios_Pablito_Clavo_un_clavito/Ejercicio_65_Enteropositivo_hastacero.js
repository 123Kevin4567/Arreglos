//------------------------------ 65 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function cuentaAtras(numero) {
    let cuenta = [];

    for (let i = numero; i >= 0; i--) {
        cuenta.push(i);
    }

    console.log(`Cuenta atrás desde ${numero} hasta 0: ${cuenta.join(', ')}`);
}


readline.question('Ingrese un número entero positivo: ', (respuesta) => {
    const numero = parseInt(respuesta);

    if (numero > 0) {
        cuentaAtras(numero);
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
    
    readline.close();
});
