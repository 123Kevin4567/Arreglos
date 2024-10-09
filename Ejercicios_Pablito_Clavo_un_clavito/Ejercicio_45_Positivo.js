//------------------------------ 45 Ejercicio--------------------//
// Función para verificar si un número es positivo y menor que 100

function verificarNumero(numero) {
    return numero > 0 && numero < 100;
}

const numero = 45;

if (verificarNumero(numero)) {
    console.log(`El número ${numero} está entre 0 y 100.`);
} else {
    console.log(`El número ${numero} está fuera del rango 0-100.`);
}