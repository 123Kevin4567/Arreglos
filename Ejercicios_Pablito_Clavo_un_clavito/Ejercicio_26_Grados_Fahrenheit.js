//------------------------------ 26 Ejercicio--------------------//
// Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit.


function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}


function mostrarResultado(celsius, fahrenheit) {
    console.log(`Temperatura de entrada: ${celsius}°C`);
    console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);
}


function obtenerTemperaturaCelsius() {

    return 25; 
}

const temperaturaCelsius = obtenerTemperaturaCelsius();
const temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
mostrarResultado(temperaturaCelsius, temperaturaFahrenheit);
