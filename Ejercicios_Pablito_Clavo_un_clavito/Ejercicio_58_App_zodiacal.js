//------------------------------ 58 Ejercicio--------------------//
// Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo
// zodiacal pertenece, para ello usar if_else anidados.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function obtenerSignoZodiacal(mes, dia) {
    if ((mes === 'enero' && dia <= 19) || (mes === 'diciembre' && dia >= 22)) {
        return 'Capricornio';
    } else if ((mes === 'enero' && dia >= 20) || (mes === 'febrero' && dia <= 18)) {
        return 'Acuario';
    } else if ((mes === 'febrero' && dia >= 19) || (mes === 'marzo' && dia <= 20)) {
        return 'Piscis';
    } else if ((mes === 'marzo' && dia >= 21) || (mes === 'abril' && dia <= 19)) {
        return 'Aries';
    } else if ((mes === 'abril' && dia >= 20) || (mes === 'mayo' && dia <= 20)) {
        return 'Tauro';
    } else if ((mes === 'mayo' && dia >= 21) || (mes === 'junio' && dia <= 20)) {
        return 'Géminis';
    } else if ((mes === 'junio' && dia >= 21) || (mes === 'julio' && dia <= 22)) {
        return 'Cáncer';
    } else if ((mes === 'julio' && dia >= 23) || (mes === 'agosto' && dia <= 22)) {
        return 'Leo';
    } else if ((mes === 'agosto' && dia >= 23) || (mes === 'septiembre' && dia <= 22)) {
        return 'Virgo';
    } else if ((mes === 'septiembre' && dia >= 23) || (mes === 'octubre' && dia <= 22)) {
        return 'Libra';
    } else if ((mes === 'octubre' && dia >= 23) || (mes === 'noviembre' && dia <= 21)) {
        return 'Escorpio';
    } else if ((mes === 'noviembre' && dia >= 22) || (mes === 'diciembre' && dia <= 21)) {
        return 'Sagitario';
    } else {
        return 'Fecha inválida';
    }
}


readline.question("Ingrese el mes de nacimiento (en minúsculas, por ejemplo, 'marzo'): ", (mes) => {
    readline.question("Ingrese el día de nacimiento (número): ", (dia) => {
        const diaNumerico = parseInt(dia);
        const signo = obtenerSignoZodiacal(mes, diaNumerico);
        console.log(`Su signo zodiacal es: ${signo}`);
        readline.close(); 
    });
});
