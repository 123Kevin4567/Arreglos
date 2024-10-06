//------------------2 Ejercicio-------------
// Escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

function verificarContrasena() {
    const contrasenaGuardada = "miContrasena123"; 
    const regexAlfanumerico = /^[a-zA-Z0-9]+$/; 

    let contrasenaUsuario = prompt("Ingresa la contraseña:");

    let carro = {};


    if (regexAlfanumerico.test(contrasenaUsuario)) {
        if (contrasenaUsuario.toLowerCase() === contrasenaGuardada.toLowerCase()) {
            carro.mensaje = "La contraseña es correcta :D.";
        } else {
            carro.mensaje = "La contraseña es incorrecta intente de.";
        }
    } else {
        carro.mensaje = "Por favor solo ingresa valores alfanumericos.";
    }

    console.log(carro);
}