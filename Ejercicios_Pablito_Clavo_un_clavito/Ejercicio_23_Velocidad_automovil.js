//------------------------------ 23 Ejercicio--------------------//
// Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo


function kmhAMs(velocidadKmh) {

    const factorConversion = 1000 / 3600;
    return velocidadKmh * factorConversion;
}


function mostrarResultado(velocidadKmh, velocidadMs) {
    console.log(`Velocidad de entrada: ${velocidadKmh} km/h`);
    console.log(`Velocidad convertida: ${velocidadMs.toFixed(2)} m/s`);
}


const velocidadKmh = 72;
const velocidadMs = kmhAMs(velocidadKmh);
mostrarResultado(velocidadKmh, velocidadMs);
