//------------------------------ 19 Ejercicio--------------------//
// Escribir un programa que calcule el área y el volumen de un cilindro


function calcularCilindro(radio, altura) {
    const pi = Math.PI; 
    const area = 2 * pi * radio * (radio + altura); 
    const volumen = pi * Math.pow(radio, 2) * altura; 

    return { area, volumen };
}


function main() {

    const radio = parseFloat(prompt("Escribe el radio del cilindro:"));

    const altura = parseFloat(prompt("Escribe la altura del cilindro:"));


    if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {


        console.log("Escribe ingresa valores validos para el radio y la altura (números positivos).");
        return;
    }


    const resultados = calcularCilindro(radio, altura);


    console.log(`Area del cilindro: ${resultados.area.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen del cilindro: ${resultados.volumen.toFixed(2)} unidades cúbicas`);
}

main();