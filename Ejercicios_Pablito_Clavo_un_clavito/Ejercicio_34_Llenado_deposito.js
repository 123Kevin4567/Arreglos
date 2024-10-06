//------------------------------ 34 Ejercicio--------------------//
// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.


const PI = 3.1416;


function calcularVolumenDeposito(radio, altura) {
    
    const volumen = PI * Math.pow(radio, 2) * altura * 1000; 
    return volumen;
}


function calcularTiempoLlenado(volumen, caudal) {
 
    const tiempoEnSegundos = volumen / caudal;
  
    const tiempoEnMinutos = tiempoEnSegundos / 60;
    return tiempoEnMinutos;
}


const radioDeposito = 2;  
const alturaDeposito = 5;
const caudal = 10;       


const volumenDeposito = calcularVolumenDeposito(radioDeposito, alturaDeposito);


const tiempoLlenado = calcularTiempoLlenado(volumenDeposito, caudal);


console.log(`Volumen del depósito: ${volumenDeposito.toFixed(2)} litros`);
console.log(`Tiempo estimado para llenar el depósito: ${tiempoLlenado.toFixed(2)} minutos`);