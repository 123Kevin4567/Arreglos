//------------------------------ 74 Ejercicio--------------------//
// Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.


function ecoDeUsuario(entrada) {
    console.log('Escribe "salir" para terminar el programa.');

    while (entrada !== null && entrada.toLowerCase() !== 'salir') {
        entrada = prompt('Introduce algo:');
        
        if (entrada !== null && entrada.toLowerCase() !== 'salir') {
            console.log(entrada);
        }
    }

    console.log('Programa terminado.');
}


ecoDeUsuario(null);

