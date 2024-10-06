//------------------------------ 11 Ejercicio--------------------//
// Escribir un programa que sume, resta, multiplique y divida dos números


const numeros = {
  num1: 13,
  num2: 0 
};

const { num1, num2 } = numeros;

const operaciones = {
  suma: num1 + num2,
  resta: num1 - num2,
  multiplicacion: num1 * num2,
  division: num2 !== 0 ? num1 / num2 : 'No puedes dividir por cero explotara la pc Darwin 💣'
};

const { suma, resta, multiplicacion, division } = operaciones;

console.log(`Suma: ${suma}`);
console.log(`Resta: ${resta}`);
console.log(`Multiplicación: ${multiplicacion}`);
console.log(`División: ${division}`);
