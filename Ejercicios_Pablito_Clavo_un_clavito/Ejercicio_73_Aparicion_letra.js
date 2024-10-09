//------------------------------ 73 Ejercicio--------------------//
// Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre
// por pantalla el número de veces que aparece la letra en la frase.

function contarLetras(frase, letra) {
    if (letra.length !== 1) {
        console.log('Hello amigo, escribe solo una letra porfa.');
        return;
    }

    let contador = 0;

    const fraseMinuscula = frase.toLowerCase();
    const letraMinuscula = letra.toLowerCase();

    for (let i = 0; i < fraseMinuscula.length; i++) {
        if (fraseMinuscula[i] === letraMinuscula) {
            contador++;
        }
    }

    console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);
}


const frase = prompt('Escribe alguna frase:');
const letra = prompt('Ahora ingresa una letra:');
contarLetras(frase, letra);

