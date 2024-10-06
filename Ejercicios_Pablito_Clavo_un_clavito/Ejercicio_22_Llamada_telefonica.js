//------------------------------ 22 Ejercicio--------------------//
// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

const COSTO_POR_MINUTO = 355;
const IVA = 0.20;


function calcularCostoLlamada(minutos) {
    const costoBase = minutos * COSTO_POR_MINUTO;
    const impuesto = costoBase * IVA;
    const costoTotal = costoBase + impuesto;
    
    return {
        duracion: minutos,
        costoBase: costoBase,
        impuesto: impuesto,
        total: costoTotal
    };
}


function mostrarResultado(resultado) {
    console.log(`Duración de la llamada: ${resultado.duracion} minutos`);
    console.log(`Costo base: $${resultado.costoBase} pesos`);
    console.log(`IVA (20%): $${resultado.impuesto} pesos`);
    console.log(`Costo total: $${resultado.total} pesos`);
}


const duracionLlamada = 10;
const resultado = calcularCostoLlamada(duracionLlamada);
mostrarResultado(resultado);