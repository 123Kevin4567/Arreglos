
let entrada = prompt('Escribe algunos numero pero separados con comos, (ejempo 1,-2,3,4,-5 mas que todo para que de error):');


function sumarPositivos(numeros) {

   let arrayNumeros = numeros.split(',').map(num => parseFloat(num.trim()));
   
 
   if(arrayNumeros.some(isNaN)) {
       console.log('Lo siento solo puedes ingresar numeros SIN LETRAS');
       return 0;
   }


   let suma = 0;
   for(let i = 0; i < arrayNumeros.length; i++) {
       if(arrayNumeros[i] > 0) {
           suma += arrayNumeros[i];
       }
   }
   
   return suma;
}


let resultado = sumarPositivos(entrada);


console.log(`La suma de numeros positivos es: ${resultado}`);


console.log('-------------------------');
