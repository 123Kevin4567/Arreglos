//------------------------------ 46 Ejercicio--------------------//
// Función para encontrar el mayor de tres números


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mayorDeTres(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function pedirNumeros() {
    rl.question('Ingresa el primer número: ', (num1) => {
    rl.question('Ingresa el segundo número: ', (num2) => {
    rl.question('Ingresa el tercer número: ', (num3) => {

const mayor = mayorDeTres(Number(num1), Number(num2), Number(num3));
console.log(`El mayor de los tres números (${num1}, ${num2}, ${num3}) es: ${mayor}`);
 rl.close();
            });
        });
    });
}

pedirNumeros();