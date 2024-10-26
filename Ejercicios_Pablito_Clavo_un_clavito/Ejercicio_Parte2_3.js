// • Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//   cortas menores de 5 caracteres).


let palabra = prompt("Ingrese una palabra");

const calcular = (palabra) => {
  return (palabra.length < 5) ? "La palabra es cortica" : "La palabra es largaaaa";
};

console.log(calcular(palabra));