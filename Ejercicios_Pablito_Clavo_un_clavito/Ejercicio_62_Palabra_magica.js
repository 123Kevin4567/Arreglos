//------------------------------ 62 Ejercicio--------------------//
// Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces

function mostrarPalabra() {
    const palabra = prompt('Ingrese una palabra:');

    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${palabra}`);
    }
}


mostrarPalabra();