// let edad =30;
// let tiempo=7;

// if (edad > 17 || tiempo>10){
//     console.log(`Es mayor de edad tiene ${edad}`);
//     console.log(`Mayores de edad salen despues de las 10pm, son las ${tiempo}`);
//     console.log("Perdone mi loco siga programando");
// } 
// else

// if(edad<17 || tiempo<=10) {
//     console.log(`Es menor de edad tiene ${edad}`)
//     console.log(`Los menores de edad salen antes de las 10pm, son las ${tiempo}`);
//     console.log("Dale pibe vamo a jugar un folnais")
// }

// // console.log("Jojos te hace menos homosexual o mas homosexual?")


let horas=4;
let minutos=20;

if(horas>0 && horas<=5){
    console.log(`Aun estamos dormidos son las ${horas} am con ${minutos} minutos`);
    
}
else if(horas>=6 && horas<=11){
    console.log(`Buenos dias son las ${horas} am con ${minutos} minutos`);
}
else if(horas>=12 && horas<=18){
    console.log(`Buenas tardes son las ${horas} pm con ${minutos} minutos`);
}
else if(horas>=19 && horas<=23){
    console.log(`Buenas noches son las ${horas} pm con ${minutos} minutos`);
}

else console.log(`Saliste de la matriz :D`)


let dia=26;

switch (dia) {
    case 1:
        console.log(`Lunes`);
        break;

        case 2:
        console.log(`Martes`);
        break;

        case 3:
        console.log(`Miercoles`);
        break;

        case 4:
        console.log(`Jueves`);
        break;

        case 5:
        console.log(`Viernes`);
        break;

        case 6:
        console.log(`Sabado`);
        break;

        case 7:
        console.log(`Domingo`);
        break;

        default:
        console.log(`No es un día válido`);
        
        break;
}