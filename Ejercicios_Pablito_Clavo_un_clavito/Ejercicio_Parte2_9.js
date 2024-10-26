// Genera un patrón de asteriscos en forma de pirámide.


let filas = parseInt(prompt('Cunatas filas quieres para la piramide de guisa'));


function crearPiramide(numeroFilas) {

    if (isNaN(numeroFilas) || numeroFilas <= 0) {
        console.log('Lo siento solo podes escribir un numero mayor a 0');
        return;
    }

  
    for (let i = 1; i <= numeroFilas; i++) {
        let espacios = ' '.repeat(numeroFilas - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}


crearPiramide(filas);


console.log('-------------------------');
console.log('Ejemplo porque yo me perdi un poco al pirncipio:');
console.log('Hacerlo con 3 filas');
console.log('  *');
console.log(' ***');
console.log('*****');