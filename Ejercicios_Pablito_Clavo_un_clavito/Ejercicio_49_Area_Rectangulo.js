//------------------------------ 49 Ejercicio--------------------//
// Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean
// positivos: área triangulo= lado * lado

// Función para calcular el área del rectángulo


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  console.log("Se calculara el área del rectángulo.");
  
  readline.question("¿Cuánto mide la base? ", base => {
    readline.question("¿Y la altura? ", altura => {
      base = parseFloat(base);
      altura = parseFloat(altura);
  
      if (base > 0 && altura > 0) {
        let area = base * altura;
        console.log(`El área del rectángulo es ${area.toFixed(2)}`);
      } else {
        console.log("Oye, los números deben ser positivos.");
      }
  
      readline.close();
    });
  });