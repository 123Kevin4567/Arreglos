//------------------------------ 21 Ejercicio--------------------//
// Escribir un programa que calcule el volumen de un elipsoide


function calcularVolumenElipsoide(a, b, c) {
    const pi = Math.PI; 
    const volumen = (4/3) * pi * a * b * c; 
    return volumen;
}

function main() {
    
    const a = parseFloat(prompt("Escribe el semieje a del elipsoide:"));
    const b = parseFloat(prompt("Escribe el semieje b del elipsoide:"));
    const c = parseFloat(prompt("Escribe el semieje c del elipsoide:"));

    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Escribe valores válidos y positivos para los semiejes.");
        return;
    }


    const volumen = calcularVolumenElipsoide(a, b, c);


    console.log(`El volumen del elipsoide es: ${volumen.toFixed(2)} unidades cúbicas`);
}


main();