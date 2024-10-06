//-------------------- 6 Ejercicio--------------------//
// los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde.


function determinarGrupo(nombre, sexo) {
    const inicial = nombre.charAt(0).toUpperCase();
    const esMujer = sexo.toLowerCase() === 'mujer';
    
    if ((esMujer && inicial < 'M') || (!esMujer && inicial > 'N')) {
        return 'Grupo A';
    } else {
        return 'Grupo B';
    }
}

const nombre = prompt("Introduce tu nombre:");
const sexo = prompt("Introduce tu sexo (hombre/mujer):");

if (nombre && (sexo.toLowerCase() === 'hombre' || sexo.toLowerCase() === 'mujer')) {
    console.log(`Perteneces al: ${determinarGrupo(nombre, sexo)}`);
} else {
    console.log("Por favor ingresa un nombre y un sexo válidos.");
}