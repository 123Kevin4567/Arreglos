//------------------------------ 47 Ejercicio--------------------//
// Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el
// menor o si son iguales.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Vamos a comparar tres números.");

rl.question("Primer número: ", (a) => {
  rl.question("Segundo número: ", (b) => {
    rl.question("Tercer número: ", (c) => {
      a = Number(a);
      b = Number(b);
      c = Number(c);

      if (a === b && b === c) {

        console.log("Los tres números son iguales.");
        
      } else {
        let mayor = Math.max(a, b, c);
        let menor = Math.min(a, b, c);
        console.log(`El mayor es ${mayor} y el menor es ${menor}.`);
      }

      rl.close();
    });
  });
});