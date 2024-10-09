//------------------------------ 53 Ejercicio--------------------//
// Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSubtotal(productos) {
    return productos.reduce((total, producto) => total + producto.precio, 0);
}

function calcularIVA(subtotal, iva) {
    return subtotal * iva;
}

function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}

function mostrarResumen(productos, subtotal, iva, total) {
    console.log("\nResumen de la compra:");
    productos.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto.nombre}: $${producto.precio}`);
    });
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`IVA (19%): $${iva.toFixed(2)}`);
    console.log(`Total: $${total.toFixed(2)}`);
}

function agregarProductos(callback) {
    const productos = [];
    const iva = 0.19;
    let count = 0;

    function preguntarProducto() {
        if (count < 5) {
            readline.question(`Ingresa el nombre del producto ${count + 1}: `, nombre => {
                readline.question(`Ingresa el precio del producto ${nombre}: `, precio => {
                    let precioNumerico = parseFloat(precio);
                    if (!isNaN(precioNumerico) && precioNumerico > 0) {
                        productos.push({ nombre, precio: precioNumerico });
                        count++;
                        preguntarProducto();
                    } else {
                        console.log("El precio ingresado no es válido. Intenta de nuevo.");
                        preguntarProducto();
                    }
                });
            });
        } else {
            callback(productos, iva);
        }
    }

    preguntarProducto();
}

agregarProductos((productos, iva) => {
    const subtotal = calcularSubtotal(productos);
    const montoIVA = calcularIVA(subtotal, iva);
    const total = calcularTotal(subtotal, montoIVA);

    mostrarResumen(productos, subtotal, montoIVA, total);
    readline.close();
});

