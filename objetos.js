const persona ={
    nombre: "Kevin",
    apellido: "Joestar",
    edad: 21
}

console.log(persona);

for (const propiedad  in persona) {
    console.log(`Llave ${propiedad}, valor: ${persona[propiedad]}`);
}


console.log(persona.apellido);
console.log(persona[edad]);

let palabra = "Te vamos a validar los papeles pa";

for (const caracter of palabra) {
    console.log(caracter);
}