// const numeros = [1, 2, 3];
// const nuevosNumeros = [...numeros, 4, 5];

// console.log(nuevosNumeros); 


// const maximo = Math.max(...numeros);
// console.log(maximo); 



// function sumar(a,b, ...c){

//     let resultado =a +b;

//     c.forEach(function(n){
//         resultado +=n;
//     });
    
//     return resultado;
// }

// console.log(sumar(9,5,23,49,99));



// function sumar(a, b, ...c) {
//     let resultado = a + b;

    
//     for (let sumar of c) {
//         resultado += sumar;
//     }

//     return resultado;
// }

// console.log(sumar(9, 5, 23, 49, 99)); 



// const a = [1,2,3,4];
// const b = [5,6,7,8];


// const c = [...a, ...b];

// console.log(c);

const a = [1,2,3,4];
const b = [5,6,7,8];

console.log(...a,...b)