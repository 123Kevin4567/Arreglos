//------------------------------ 36 Ejercicio--------------------//
// En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?


const cacaoPorCada100GrHarina = 10; 
const harinaOriginal = 100;  


const cacaoDeseado = 20; 


const harinaNecesaria = (cacaoDeseado * harinaOriginal) / cacaoPorCada100GrHarina;


console.log(`La cantidad de harina necesaria para ${cacaoDeseado} gramos de cacao es: ${harinaNecesaria} gramos.`);