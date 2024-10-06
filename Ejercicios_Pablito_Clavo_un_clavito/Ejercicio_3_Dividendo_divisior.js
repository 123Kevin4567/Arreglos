//------------------3 Ejercicio-------------//
// Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado


function dividirNumeros(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("Error: No puedes didivir entre cero explotara el pc 💣.");
    }
    return dividendo / divisor;
}


function main() {
    const numero1 = parseFloat(prompt("Escribe el primer valor (dividendo)"));
    const numero2 = parseFloat(prompt("Escribe el segundo valor (divisor)"));

    try {
        const resultado = dividirNumeros(numero1, numero2);
        console.log(`El resultado de la división es: ${resultado}`);
    } catch (error) {
        console.log(error.mesage); 
    }
}


main();