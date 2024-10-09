//------------------------------ 55 Ejercicio--------------------//
// En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const descuentos = {
    'A': 0.10,
    'B': 0.15,
    'C': 0.20
};

function calcularDescuento(tipoMembresia, precioCompra) {
    tipoMembresia = tipoMembresia.toUpperCase();
    
    if (descuentos.hasOwnProperty(tipoMembresia)) {
        const porcentajeDescuento = descuentos[tipoMembresia];
        const descuento = precioCompra * porcentajeDescuento;
        const precioFinal = precioCompra - descuento;

        return {
            descuento: descuento,
            precioFinal: precioFinal
        };
    } else {
        return {
            descuento: 0,
            precioFinal: precioCompra
        };
    }
}

function procesarCompra(nombre, tipoMembresia, precioCompra) {
    console.log(`🍦 Procesando compra para ${nombre} (Membresía tipo ${tipoMembresia})`);
    console.log(`Precio original: $${precioCompra.toFixed(2)}`);

    const resultado = calcularDescuento(tipoMembresia, precioCompra);

    console.log(`Descuento aplicado: $${resultado.descuento.toFixed(2)}`);
    console.log(`Precio final: $${resultado.precioFinal.toFixed(2)}`);
    console.log('-------------------');
}

function solicitarDatosCliente() {
    readline.question("Ingresa el nombre del cliente: ", (nombre) => {
        readline.question("Ingresa el tipo de membresía (A, B, C): ", (tipoMembresia) => {
            const precioHelado = 10000;
            procesarCompra(nombre, tipoMembresia, precioHelado);
            readline.question("¿Quieres procesar otra compra? (sí/no): ", (respuesta) => {
                if (respuesta.toLowerCase() === 'sí') {
                    solicitarDatosCliente();
                } else {
                    console.log("Gracias por tu compra, ¡nos vemos cuando tengas calor 🍦");
                    readline.close();
                }
            });
        });
    });
}

solicitarDatosCliente();
