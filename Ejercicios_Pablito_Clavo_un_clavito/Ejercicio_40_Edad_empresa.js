//------------------------------ 40 Ejercicio--------------------//
// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema


const añoActual = new Date().getFullYear();


function calcularEdad(añoNacimiento) {
    const edad = añoActual - añoNacimiento;
    return edad;
}


const añoNacimiento = 1990; 


const edad = calcularEdad(añoNacimiento);


console.log(`La edad de la persona que nació en ${añoNacimiento} es: ${edad} años.`);