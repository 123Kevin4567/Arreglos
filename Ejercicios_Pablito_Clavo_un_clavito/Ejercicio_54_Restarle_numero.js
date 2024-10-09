//------------------------------ 54 Ejercicio--------------------//
// Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function restaCondicional(num1, num2) {
    if (num1 > num2) {
        return num1 - num2;
    } else {
        return "La operación no es posible realizarla";
    }
}

function solicitarNumeros() {
    readline.question("Ingresa el primer número: ", (num1) => {
        readline.question("Ingresa el segundo número: ", (num2) => {
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);

            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor ingresa números válidos.");
                solicitarNumeros();
            } else {
                console.log(`Números ingresados: ${numero1} y ${numero2}`);
                const resultado = restaCondicional(numero1, numero2);
                console.log("Resultado:", resultado);
                readline.close();
            }
        });
    });
}

solicitarNumeros();
