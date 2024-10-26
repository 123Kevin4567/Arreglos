// Crea una función que tome un conjunto de números y devuelva el inverso aditivo de cada
// uno. Todo los positivos se devuelve negativo y todos los negativos se devuelve positivo.



let entrada = prompt('Escribe los numeros que quieres invertir,(para menos conflictos escribelos por comas 1,4,6,-8)');


function invertirNumeros(numeros) {

   let arrayNumeros = numeros.split(',').map(num => parseFloat(num.trim()));
   

   if(arrayNumeros.some(isNaN)) {
       console.log('Escribe solo numeros validos porfa');
       return [];
   }
   

   let invertidos = arrayNumeros.map(num => num * -1);
   return invertidos;
}




let resultado = invertirNumeros(entrada);


console.log('Los numeros originales', entrada);
console.log('Los numeros invertidos', resultado.join(', '));


console.log('-------------------------');


