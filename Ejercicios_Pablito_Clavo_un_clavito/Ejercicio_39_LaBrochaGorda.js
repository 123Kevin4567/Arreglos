//------------------------------ 39 Ejercicio--------------------//
// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const costoPorMetroCuadrado = 20; 

function calcularPresupuesto(metrosCuadrados) {
    const presupuestoTotal = metrosCuadrados * costoPorMetroCuadrado;
    return presupuestoTotal;
}

function solicitarMetrosCuadrados() {
    readline.question("¿Cuántos metros cuadrados deseas pintar? ", (entrada) => {
        const metrosCuadradosAPintar = parseFloat(entrada);

        if (isNaN(metrosCuadradosAPintar) || metrosCuadradosAPintar <= 0) {
            console.log("Por favor, ingresa un número válido.");
            solicitarMetrosCuadrados(); 
        } else {
            const presupuesto = calcularPresupuesto(metrosCuadradosAPintar);
            console.log(`El presupuesto total para pintar ${metrosCuadradosAPintar} m² es: $${presupuesto}`);
            readline.close();
        }
    });
}


solicitarMetrosCuadrados();
