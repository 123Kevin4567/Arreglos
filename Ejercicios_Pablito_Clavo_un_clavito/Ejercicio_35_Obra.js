//------------------------------ 35 Ejercicio--------------------//
// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?


const precioLlaveHexagonal = 11500;
const precioBomba = 1168000;        
const precioCajaPernos = 87000;     


const cantidadLlavesHexagonales = 5; 
const cantidadBombas = 1;             
const cantidadCajasPernos = 3;       


const totalLlavesHexagonales = precioLlaveHexagonal * cantidadLlavesHexagonales;
const totalBombas = precioBomba * cantidadBombas;
const totalCajasPernos = precioCajaPernos * cantidadCajasPernos;


const totalCompra = totalLlavesHexagonales + totalBombas + totalCajasPernos;


console.log(`Total por los juegos de llaves hexagonales: $${totalLlavesHexagonales}`);
console.log(`Total por la bomba: $${totalBombas}`);
console.log(`Total por las cajas de pernos: $${totalCajasPernos}`);
console.log(`\nTotal de la compra: $${totalCompra}`);