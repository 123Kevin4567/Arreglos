// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

// Nota:No se si era asi me eche una perdida al principio con el resultado en binario asi que perdone las molestias.

let num1 = parseFloat(prompt('Escriba el primer numeror:'));
let num2 = parseFloat(prompt('Escriba el segundo numero:'));


function sumaBinaria(a, b) {

   if(isNaN(a) || isNaN(b)) {
       console.log('Solo puedes ingresar numeros validos');
       return '0';
   }
   

   let suma = a + b;
   

   let binario = '';
   

   if(suma === 0) return '0';
   

   while(suma > 0) {
       binario = (suma % 2) + binario;
       suma = Math.floor(suma / 2);
   }
   
   return binario;
}


let resultadoBinario = sumaBinaria(num1, num2);
console.log(`La suma de ${num1} + ${num2} en binario es: ${resultadoBinario}`);


console.log('-------------------------');
