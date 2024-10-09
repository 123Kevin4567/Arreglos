//------------------------------ 26 Ejercicio--------------------//
// Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function mostrarResultado(celsius, fahrenheit) {
    console.log(`Has ingresado una temperatura de: ${celsius}°C.`);
    console.log(`Eso equivale a: ${fahrenheit.toFixed(2)}°F.`);
}

function obtenerTemperaturaCelsius() {
    readline.question('Por favor, ingresa la temperatura en grados Celsius: ', (respuesta) => {
        const celsius = parseFloat(respuesta);
        if (isNaN(celsius)) {
            console.log("Eso no parece ser un número válido. Intenta nuevamente.");
            obtenerTemperaturaCelsius();
        } else {
            const fahrenheit = celsiusAFahrenheit(celsius);
            mostrarResultado(celsius, fahrenheit);
            readline.close();
        }
    });
}


obtenerTemperaturaCelsius();

