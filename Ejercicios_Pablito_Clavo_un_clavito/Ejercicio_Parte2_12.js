// Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.


let palabra = prompt('Escribe aluna palabra para eliminiar sus vocales');

function quitarVocales(texto) {
   if(!texto || typeof texto !== 'string') {
       return 'Lo sineto ingresa una palabra valida';
   }
   
   let sinVocales = texto.replace(/[aeiouáéíóúAEIOUÁÉÍÓÚ]/g, '');
   return sinVocales;
}


let resultado = quitarVocales(palabra);
console.log(`Palabra original: ${palabra}`);
console.log(`Sin vocales: ${resultado}`);


console.log('-------------------------');
