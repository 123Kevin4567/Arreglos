//------------------------------ 20 Ejercicio--------------------//
// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante

function calcularRaices(a, b, c) {
    const discriminante = b ** 2 - 4 * a * c;
    
    if (discriminante > 0) {

        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return { tipo: "dos", raices: [raiz1, raiz2] };
    } 
    else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return { tipo: "una", raices: [raiz] };
    } else {
        return { tipo: "ninguna", raices: [] };
    }
}

const a = parseFloat(prompt("Escribe el coeficiente a:"));
const b = parseFloat(prompt("Escribe el coeficiente b:"));
const c = parseFloat(prompt("Escribe el coeficiente c:"));

if (a === 0) {
    console.log("El coeficiente 'a' no puede ser cero en una ecuación cuadrática.");
} else {
    const resultado = calcularRaices(a, b, c);
    
    switch(resultado.tipo) {
        case "dos":
            console.log(`Las raíces reales son: ${resultado.raices[0].toFixed(2)} y ${resultado.raices[1].toFixed(2)}`);
            break;
        case "una":
            console.log(`La raíz real doble es: ${resultado.raices[0].toFixed(2)}`);
            break;
        default:
            console.log("No hay raíces reales.");
    }
}