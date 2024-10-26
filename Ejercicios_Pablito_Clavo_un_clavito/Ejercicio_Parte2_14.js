// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si
// este número es par o impar.



function generarNumeroAleatorio() {
    let numero = Math.floor(Math.random() * 10) + 1;
    return numero;
}


function esParOImpar(numero) {
    if (numero % 2 === 0) {
        return 'par';
    } else {
        return 'impar';
    }
}


let entrada = prompt('Escribe un numero del uno al 10, o dejalo vacio haber que pasa :D');


let numero = entrada ? parseInt(entrada) : generarNumeroAleatorio();

if (isNaN(numero) || numero < 1 || numero > 10) {
    console.log('Recuerda porfavor solo numeros netre el 1 al 10');
} else {
    console.log(`El numero es: ${numero}`);
    console.log(`El numero ${numero} es  ${esParOImpar(numero)}`);
}
