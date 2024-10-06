
//------------------------------ 30 Ejercicio--------------------//
// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito


function comprobarFortalezaContrasena(contrasena) {

    if (contrasena.length < 8 || contrasena.length > 12) {
        return 'La contraseña debe tener entre 8 y 12 caracteres.';
    }


    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneDigito = false;


    for (let char of contrasena) {
        if (char >= 'A' && char <= 'Z') tieneMayuscula = true;
        else if (char >= 'a' && char <= 'z') tieneMinuscula = true;
        else if (char >= '0' && char <= '9') tieneDigito = true;
    }


    if (!tieneMayuscula) {
        return 'La contraseña debe contener al menos una letra mayúscula.';
    }
    if (!tieneMinuscula) {
        return 'La contraseña debe contener al menos una letra minúscula.';
    }
    if (!tieneDigito) {
        return 'La contraseña debe contener al menos un dígito.';
    }

    return 'La contraseña es fuerte.';
}


let contrasenas = [
    'Abc12345', 
    'abcdef',    
    'ABC12345',  
    'Abcdef12',  
    'abcdefghijklmno'  
];

contrasenas.forEach((contrasena, index) => {
    console.log(`Contraseña ${index + 1}: ${contrasena}`);
    console.log(comprobarFortalezaContrasena(contrasena));
    console.log('---');
});