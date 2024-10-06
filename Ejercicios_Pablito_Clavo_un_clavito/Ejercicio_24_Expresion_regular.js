//------------------------------ 24 Ejercicio--------------------//
// Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo -2.3e-1, -3e2, 23, 3.2).


const regex = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;


function probarNumero(numero) {
    if (regex.test(numero)) {
        console.log(`"${numero}" es un numero en punto flotante válido.`);
    } else {
        console.log(`"${numero}" no es un numero en punto flotante válido.`);
    }
}


const numeros = [
    "2.3e-1",
    "-3e2",
    "23",
    "3.2",
    "-0.5",
    "+1.23",
    "4.56e+3",
    ".789",
    "-.5e-2",
    "abc",
    "1,000",
    "2.3.4"
];

numeros.forEach(probarNumero);