
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









