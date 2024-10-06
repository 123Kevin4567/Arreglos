//------------------------------ 33 Ejercicio--------------------//
// Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.


function calcularEdadMadreEdadHijo(edadMadreActual, edadHijoActual) {
    return edadMadreActual - edadHijoActual;
}


const edadMadre = 45;  
const edadHijo = 20;


const edadMadreCuandoDioALuz = calcularEdadMadreEdadHijo(edadMadre, edadHijo);


console.log(`La madre tenía ${edadMadreCuandoDioALuz} años cuando dio a luz a su hijo.`);