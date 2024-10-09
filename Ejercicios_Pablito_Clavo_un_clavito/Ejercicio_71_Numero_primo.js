//------------------------------ 71 Ejercicio--------------------//
// Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.


function esNumeroPrimo(numero) {
    if (isNaN(numero)) {
        console.log('Escribe un valor valido.');
        return;
    }

    if (numero < 2) {
        console.log(`${numero} ese no es un numero primo.`);
        return;
    }

    let esPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; 
            break;
        }
    }

    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un numero primo.`);
    }
}


const numero = parseInt(prompt('Escribe un numero entero:'));
esNumeroPrimo(numero);

