//------------------------------ 41 Ejercicio--------------------//
// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.



function invertirFrase(frase) {
    return frase.split('').reverse().join('');
}


const frase = "Soy un programador de software"; 


const fraseInvertida = invertirFrase(frase);


console.log(`La frase invertida es: "${fraseInvertida}"`);