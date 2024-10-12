let numero =parseInt(prompt("Ingrese el numero"));

// const esPar = a =>{
//    return a % 2 === 0 ? "Es par" : "Es impar";
// }


const esPar = a => (a % 2 === 0) ? "Es par" : "Es impar";

let a = esPar(numero)

console.log(a);
