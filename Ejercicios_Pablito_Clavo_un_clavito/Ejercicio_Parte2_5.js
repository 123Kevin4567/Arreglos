// Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones.




let numero = parseInt(prompt("Escribe el numero a multiplicar"));
let inicio = parseInt(prompt("Escribe donde quiere iniciar"));
let fin = parseInt(prompt("Escribe donde quiere acabar"));


(() => {
    for (let i = inicio; i <= fin; i++) {
        if (i === 5) {
            continue;
        }
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
})();









