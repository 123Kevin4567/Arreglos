//------------------------------ 14 Ejercicio--------------------//
// Escribir un programa que calcule el área de un triángulo

function pedirNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje); 
  } while (isNaN(valor) || valor.trim() === "");
  return parseFloat(valor); 
}

const triangulo = {
  base: pedirNumero("Escribe la base del triángulo:"),
  altura: pedirNumero("Escribe la altura del triángulo:")
};

const { base, altura } = triangulo; 

const area = (base * altura) / 2;

console.log(`La base del triángulo es: ${base}`);
console.log(`La altura del triángulo es: ${altura}`);
console.log(`El área del triángulo es: ${area}`);
