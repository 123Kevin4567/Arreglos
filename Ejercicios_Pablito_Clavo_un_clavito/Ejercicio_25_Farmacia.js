//------------------------------ 25 Ejercicio--------------------//
// Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.


const PORCENTAJE_DESCUENTO = 10;


function calcularPrecioConDescuento(precioOriginal) {
    const descuento = (precioOriginal * PORCENTAJE_DESCUENTO) / 100;
    const precioFinal = precioOriginal - descuento;
    
    return {
        precioOriginal: precioOriginal,
        descuento: descuento,
        precioFinal: precioFinal
    };
}


function mostrarResultado(resultado) {
    console.log(`Precio original: $${resultado.precioOriginal.toFixed(2)}`);
    console.log(`Descuento (${PORCENTAJE_DESCUENTO}%): $${resultado.descuento.toFixed(2)}`);
    console.log(`Precio final: $${resultado.precioFinal.toFixed(2)}`);
}


function obtenerPrecioMedicamento() {
    
    return 100; 
}


const precioMedicamento = obtenerPrecioMedicamento();
const resultado = calcularPrecioConDescuento(precioMedicamento);
mostrarResultado(resultado);