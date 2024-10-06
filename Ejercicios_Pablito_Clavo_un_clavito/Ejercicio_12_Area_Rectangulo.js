 //------------------------------ 12 Ejercicio--------------------//
// Escribir un programa que calcule el área de un rectángulo:

// const rectangulo = {
//     base: 5,
//     altura: 3
//   };
  
  
//   const { base, altura } = rectangulo;
  
//   const area = base * altura;
  
//   console.log(`El area del rectangulo es: ${area}`);



// const base = parseFloat(prompt("Ingresa la base del rectángulo:"));
// const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

// const area = base * altura;

// console.log(`El área del rectángulo es: ${area}`);


function pedirNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje);
    
  } while (isNaN(valor) || valor.trim() === ""); 
  return parseFloat(valor); 
}

const base = pedirNumero("Escriba la base del rectángulo:");
const altura = pedirNumero("Escriba la altura del rectángulo:");

const area = base * altura;

console.log(`El área del rectángulo es: ${area}`);

