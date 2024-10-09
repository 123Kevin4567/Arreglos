
//------------------------------ 48 Ejercicio--------------------//
// Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica
// desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio



const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaCirculo(radio) {
  return Math.PI * radio * radio;
}

console.log("Calculadora de áreas");
console.log("1. Triángulo");
console.log("2. Círculo");

rl.question("Elige una opción (1 o 2): ", (opcion) => {
  if (opcion === '1') {
    rl.question("Base del triángulo: ", (base) => {
      rl.question("Altura del triángulo: ", (altura) => {
        let area = areaTriangulo(Number(base), Number(altura));
        console.log(`El área del triángulo es: ${area.toFixed(2)}`);
        rl.close();
      });
    });
  } else if (opcion === '2') {
    rl.question("Radio del círculo: ", (radio) => {
      let area = areaCirculo(Number(radio));
      console.log(`El área del círculo es: ${area.toFixed(2)}`);
      rl.close();
    });
  } else {
    console.log("Opción no válida");
    rl.close();
  }
});