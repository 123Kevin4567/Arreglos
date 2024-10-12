

let palabra = prompt("Ingrese una palabra");

const calcular = (palabra) => {
  return (palabra.length < 5) ? "La palabra es cortica" : "La palabra es largaaaa";
};

console.log(calcular(palabra));