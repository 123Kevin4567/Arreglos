//------------------------------ 68 Ejercicio--------------------//
// Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarTablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla de multiplicar del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); 
    }
}


readline.question('Presione Enter para ver las tablas de multiplicar del 1 al 10...', () => {
    mostrarTablasMultiplicar();
    readline.close(); 
});
