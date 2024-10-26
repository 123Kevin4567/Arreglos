// Crea una función que tome un número como argumento y devuelva la cadena si el
// número es par o impar.


let numero =parseInt(prompt("Ingrese el numero"));

// const esPar = a =>{
//    return a % 2 === 0 ? "Es par" : "Es impar";
// }


const esPar = a => (a % 2 === 0) ? "Es par" : "Es impar";

let a = esPar(numero)

console.log(a);
