//------------------------------ 44 Ejercicio--------------------//
// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda

const valorDolar = 4000; 
const valorEuro = 4500;  


function convertirMoneda(pesos) {
    const dolares = pesos / valorDolar; 
    const euros = pesos / valorEuro; 
    return { dolares, euros };
}


const pesos = 20000; 


const { dolares, euros } = convertirMoneda(pesos);


console.log(`La cantidad de ${pesos} pesos es equivalente a:`);
console.log(`Dólares: $${dolares.toFixed(2)}`);
console.log(`Euros: €${euros.toFixed(2)}`);