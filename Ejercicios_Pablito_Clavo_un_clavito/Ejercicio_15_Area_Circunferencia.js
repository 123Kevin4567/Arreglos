//------------------------------ 15 Ejercicio--------------------//
// Escribir un programa que calcule la longitud y el área de una circunferencia

function pedirNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje); 
  } while (isNaN(valor) || valor.trim() === ""); 
  return parseFloat(valor);
}

const circulo = {
  radio: pedirNumero("Escribe el radio de la circunferencia):")
};

const { radio } = circulo; 

const PI = Math.PI;

const longitud = 2 * PI * radio; 
const area = PI * radio ** 2; 


console.log(`El radio de la circunferencia es: ${radio}`);
console.log(`La longitud de la circunferencia es: ${longitud.toFixed(2)}`);
console.log(`El área del círculo es: ${area.toFixed(2)}`);

