//------------------------------ 31 Ejercicio--------------------//
// Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la
// solución, por favor utilizar funciones matemáticas para ello.:
// a. rc((x2-x1)^2 + (y2-y1)^2).


function calcularDistancia(x1, y1, x2, y2) {
  
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}


const x1 = 3;
const y1 = 4;
const x2 = 7;
const y2 = 1;


const distancia = calcularDistancia(x1, y1, x2, y2);


console.log(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`);