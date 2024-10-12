

// let palabra = prompt("Ingrese la palabra");

// const silabas = (palabra) => {
//   let conteo = 0;
//   let vocalees = 'aeiouáéíóú';
  
//   for (let letras of palabra.toLowerCase()) {
//     if (vocalees.includes(letras)) {
//       conteo++;}}


//       return conteo;
// }

// let resultado = silabas(palabra); console.log(`La palabra "${palabra}" tiene aproximadamente ${resultado} sílaba(s).`);


// let palabra = prompt("Ingrese la palabra");

// const silabas =(palabra) => {
//     const contar =/[aeiouáéíóú]/;
//     const cantidad = palabra.match(contar);
//     console.log(cantidad.lenght);
    
// }

// silabas(palabras);

// let palabra = prompt("Ingrese la palabra");

// const silabas = (palabra) => {
//     const contar = /[aeiouáéíóú]/gi;

//     const cantidad = (palabra.match(contar) || []).length;

//     return cantidad > 3;
    
// }

// const resultado = silabas(palabra);

// console.log(resultado);

let palabra = prompt("Ingrese la palabra");

const silabas = (palabra) => {

    const contar = /([aeiouáéíóú])(?:[aeiouyáéíóú]?)(?![aeiouáéíóú])/gi;
    // const contar = /[aeiouáéíóú]/gi;

    const cantidad = (palabra.match(contar));
    console.log(cantidad);
    
    
}

silabas(palabra);
