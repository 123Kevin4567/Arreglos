//------------------------------ 16 Ejercicio--------------------//
// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.


function pedirNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje); 
  } while (isNaN(valor) || valor.trim() === ""); 
  return parseFloat(valor); 
}

const movimiento = {
  distancia: pedirNumero("Escribe la distancia recorrida en kilómetros:"),
  tiempo: pedirNumero("Escribe el tiempo empleado en minutos:")
};

const { distancia, tiempo } = movimiento;

const distanciaEnMetros = distancia * 1000;  
const tiempoEnSegundos = tiempo * 60;        

const velocidad = distanciaEnMetros / tiempoEnSegundos;  


console.log(`Distancia recorrida: ${distancia} km`);
console.log(`Tiempo empleado: ${tiempo} minutos`);
console.log(`Velocidad del proyectil: ${velocidad.toFixed(2)} m/s`);
