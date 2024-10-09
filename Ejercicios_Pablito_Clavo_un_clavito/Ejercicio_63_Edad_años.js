//------------------------------ 63 Ejercicio--------------------//
// Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarAniosCumplidos(edad) {
    if (edad > 0) {
        for (let i = 1; i <= edad; i++) {
            console.log(`Año ${i}`);
        }
    } else {
        console.log('Por favor, ingrese una edad válida.');
    }
}


readline.question('Ingrese su edad: ', (respuesta) => {
    const edad = parseInt(respuesta);
    mostrarAniosCumplidos(edad);
    readline.close(); 
});
