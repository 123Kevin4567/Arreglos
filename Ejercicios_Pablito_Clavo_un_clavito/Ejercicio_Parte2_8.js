// Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es válido y false si no es válido


let pin = prompt('Escribe el pin (debe tener 4 o 6 caracteres):');

function validarPin(pin) {

    if(pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    

    for(let i = 0; i < pin.length; i++) {
        if(pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    
    return true;
}


let validandole = validarPin(pin);


if(validandole) {
    console.log('EL pin es valido ✅');
} else {
    console.log('El pin no es valido ❌');
    console.log('El pin debe tener entre 4 o 6 caracteres');
}

console.log('-------------------------');
