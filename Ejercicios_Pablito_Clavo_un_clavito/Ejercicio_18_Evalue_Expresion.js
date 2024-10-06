 //------------------------------ 18 Ejercicio--------------------//
// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}


function main() {
  
    const a = parseFloat(prompt("Introduce el valor de a:"));
    const b = parseFloat(prompt("Introduce el valor de b:"));
    const c = parseFloat(prompt("Introduce el valor de c:"));


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Ingresa numeros validos.");
        return;
    }

 
    let resultado;

    

    if (b + 2 - a === 0) {
        console.log("Error: No puedes dividir por cero explotara la compu Grille 💣.");
        return;
    } else {
        resultado = evaluarExpresion(a, b, c);
    }


    console.log(`El resultado de la expresion es: ${resultado}`);
}


main();
