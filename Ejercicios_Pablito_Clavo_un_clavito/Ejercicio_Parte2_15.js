// Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function convertirNumeroATexto(numero) {
    let numerosEnTexto = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];
    

    if (numero >= 0 && numero <= 5) {
        return numerosEnTexto[numero];
    } else {
        return 'Lo siento el numero esta fuera de rango (0-5)';
    }
}

let entrada = prompt('Escribe un numero del 0 al 5');
let numero = parseInt(entrada);

if (!isNaN(numero)) {
    console.log(`Numero en texto es: ${convertirNumeroATexto(numero)}`);
} else {
    console.log('Escribe solo numeros validos SIN LETRAS');
}

