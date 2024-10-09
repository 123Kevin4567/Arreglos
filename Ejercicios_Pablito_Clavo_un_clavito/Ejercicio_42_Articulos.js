//------------------------------ 42 Ejercicio--------------------//
// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.



const precioLibro = 10000;    
const precioCuaderno = 7550;  
const precioLapicero = 5550;   


function calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    const totalLibros = cantidadLibros * precioLibro;
    const totalCuadernos = cantidadCuadernos * precioCuaderno;
    const totalLapiceros = cantidadLapiceros * precioLapicero;
    
    const montoTotal = totalLibros + totalCuadernos + totalLapiceros;
    return montoTotal;
}


const cantidadLibros = 3;    
const cantidadCuadernos = 5;  
const cantidadLapiceros = 10;  


const montoTotalVenta = calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros);


console.log(`El monto total de la venta es: $${montoTotalVenta}`);