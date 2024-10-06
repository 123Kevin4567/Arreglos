//------------------------------ 17 Ejercicio--------------------//
// Escribir un programa que calcule el volumen de una esfera

function pedirNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje); 
  } while (isNaN(valor) || valor.trim() === "");
  return parseFloat(valor);
}

const esfera = {
  radio: pedirNumero("Escribe el radio de la esfera:") 
};

const { radio } = esfera; 

const PI = Math.PI;


const volumen = (4 / 3) * PI * Math.pow(radio, 3);


console.log(`El radio de la esfera es: ${radio} unidades`);
console.log(`El volumen de la esfera es: ${volumen.toFixed(2)} unidades cúbicas`);
