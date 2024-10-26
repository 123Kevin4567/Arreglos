// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.


let palabra = prompt('Escribe una palabra para invertirla:');

function invertirPalabra(texto) {
    let palabraInvertida = '';
    
    for(let i = texto.length - 1; i >= 0; i--) {
        palabraInvertida += texto[i];
    }
    
    return palabraInvertida;
}


let resultado = invertirPalabra(palabra);
console.log(`La palabra "${palabra}" invertida es: "${resultado}"`);

console.log('-------------------------');