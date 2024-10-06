//------------------------------ 32 Ejercicio--------------------//
// Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada
// producto y el total de la compra



const productos = [
    { nombre: "Pantaloneta", precio: 100 },
    { nombre: "Sharksandalia", precio: 200 },
    { nombre: "Lacoste", precio: 300 },
    { nombre: "Gorrilla", precio: 400 },
    { nombre: "Rolexx", precio: 500 }
];


function aplicarDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}


function calcularPreciosFinales(productos) {
    return productos.map((producto, index) => {
        let descuento = 0;
        if (index < 2) descuento = 5;
        else if (index > 2) descuento = 2;
        
        const precioFinal = descuento > 0 ? aplicarDescuento(producto.precio, descuento) : producto.precio;
        return { ...producto, precioFinal, descuento };
    });
}


const productosConDescuento = calcularPreciosFinales(productos);


const totalCompra = productosConDescuento.reduce((total, producto) => total + producto.precioFinal, 0);


console.log("¡Bienvenido a Swiftie shop!\n");
productosConDescuento.forEach((producto, index) => {
    console.log(`${producto.nombre}:`);
    console.log(`  Precio inicial: $${producto.precio.toFixed(2)}`);
    if (producto.descuento > 0) {
        console.log(`  ¡Oferta especial! ${producto.descuento}% de descuento`);
    }
    console.log(`  Precio final: $${producto.precioFinal.toFixed(2)}\n`);
});

console.log(`Total a pagar: $${totalCompra.toFixed(2)}`);
console.log("¡Gracias por tu compra!");
