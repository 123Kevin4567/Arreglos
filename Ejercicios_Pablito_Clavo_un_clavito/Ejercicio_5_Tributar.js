//-------------------- 5 Ejercicio--------------------//
// Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o no


function debeTributar(edad, ingresos) {
    return edad > 16 && ingresos >= 1000;
}


function main() {
    const edad = parseInt(prompt("Escribe tu edad:"));
    const ingresos = parseFloat(prompt("Esvcribe tus ingresos mensuales:"));


    if (isNaN(edad) || isNaN(ingresos)) {
        console.log("Por favor escribe valores validos para la edad e ingresos.");
        return;
    }


    if (debeTributar(edad, ingresos)) {
        console.log("Debes tributar.");
    } else {
        console.log("No debes tributar.");
    }
}


main();