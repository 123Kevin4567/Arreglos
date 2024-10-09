//------------------------------ 72 Ejercicio--------------------//
// Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.

function mostrarLetrasAlReves(palabra) {
    if (palabra) {
        const letrasReves = palabra.split('').reverse().join('');
        console.log(`La palabra al revés es: ${letrasReves}`);
    } else {
        console.log('Escribe una palabra válida :/');
    }
}


const palabra = prompt('Escribe una palbra y mira la magia ;v :'); 
mostrarLetrasAlReves(palabra);



    