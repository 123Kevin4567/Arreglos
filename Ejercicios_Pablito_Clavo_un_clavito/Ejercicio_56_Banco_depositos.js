//------------------------------ 56 Ejercicio--------------------//
// Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularInteres(saldo) {
    let tasaInteres = saldo < 100000 ? 0.03 : 0.04;
    return saldo * tasaInteres;
}

function procesarCuenta(nombreCliente, saldoInicial) {
    const interes = calcularInteres(saldoInicial);
    const saldoFinal = saldoInicial + interes;

    console.log(`Cliente: ${nombreCliente}`);
    console.log(`Saldo inicial: $${saldoInicial.toFixed(2)}`);
    console.log(`Interés pagado: $${interes.toFixed(2)}`);
    console.log(`Saldo final: $${saldoFinal.toFixed(2)}`);
}

readline.question("Ingresa el nombre del cliente: ", (nombreCliente) => {
    readline.question("Ingresa el saldo inicial: ", (saldoInicial) => {
        const saldo = parseFloat(saldoInicial);

        if (isNaN(saldo) || saldo < 0) {
            console.log("Por favor, ingresa un saldo válido.");
        } else {
            procesarCuenta(nombreCliente, saldo);
        }

        readline.close();
    });
});
