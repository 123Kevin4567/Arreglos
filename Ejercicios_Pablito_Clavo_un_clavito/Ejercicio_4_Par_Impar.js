//-------------------- 4 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es par
// o impar

function esParOImpar(numero) {
    return numero % 2 === 0; 
}


function main() {
    const numero = parseInt(prompt("Introduce un numero entero:"));


    if (isNaN(numero)) {
        console.log("Por favor, ingresa un numero entero válido.");
        return;
    }


    if (esParOImpar(numero)) {
        console.log(`${numero} es un numero par.`);
    } else {
        console.log(`${numero} es un numero impar.`);
    }
}


main();