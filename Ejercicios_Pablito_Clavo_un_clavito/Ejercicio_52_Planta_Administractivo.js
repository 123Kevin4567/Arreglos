//------------------------------ 51 Ejercicio--------------------//
// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

function calcularPago(tipoEmpleado, horas) {
    let tarifa;
    if (tipoEmpleado === 'planta') {
        tarifa = 20000;
    } else if (tipoEmpleado === 'administrativo') {
        tarifa = 10000;
    } else {
        tarifa = 0;
        console.log("Tipo de empleado no válido");
    }
    return horas * tarifa;
}

function ejecutarCalculo() {
    let cantidadEmpleados = parseInt(prompt("Ingrese la cantidad de empleados: "));
    
    let nominaTotal = 0;

    for (let i = 0; i < cantidadEmpleados; i++) {
        let nombre = prompt(`Ingrese el nombre del empleado ${i + 1}: `);
        
        let tipo = prompt(`Ingrese el tipo de empleado (planta/administrativo) para ${nombre}: `);
        let horas = parseInt(prompt(`Ingrese las horas trabajadas por ${nombre}: `));
        
        let pago = calcularPago(tipo, horas);
        console.log(`${nombre} (${tipo}): $${pago}`);
        
        nominaTotal += pago;
    }
    
    console.log(`Nómina total: $${nominaTotal}`);
}


ejecutarCalculo();