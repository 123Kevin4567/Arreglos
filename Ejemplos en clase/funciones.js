const dias = [];

console.log(typeof dias);

dias.push('Lunes');                          //0
dias.push('Martes');                         //1
dias.push('Miercoles');                      //2
dias.push('Jueves');                         //3
// dias.push(true);
// dias.push(38);
dias.push(['Kevin', 'David']);               //4
dias.push('viernes')                         //5
dias.push('Sabado')                          //6
// console.log('Antes de eliminar', dias);


console.log('Nombre completo:', dias[4][0], dias[4][1]); 


dias.splice(4, 2); 

// console.log('Después de eliminar "Martes":', dias);

for (let i = 0; i < dias.length; i++) {
    // console.log('Este es i', i);
    console.log(dias[i]);
}

