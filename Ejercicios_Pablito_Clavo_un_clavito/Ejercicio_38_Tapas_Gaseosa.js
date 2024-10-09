//------------------------------ 38 Ejercicio--------------------//
// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?



const parteMartin = 2 / 3; 
const parteJairo = 1 / 4;   


const denominadorComun = 12; 
const parteMartin12 = (parteMartin * denominadorComun) / 1; 
const parteJairo12 = (parteJairo * denominadorComun) / 1;


const parteTotalEstudiantes = (parteMartin12 + parteJairo12) / denominadorComun;

const parteLorena = 1 - parteTotalEstudiantes; 


console.log(`A Lorena le corresponde ${parteLorena.toFixed(2)} del total de tapas.`);