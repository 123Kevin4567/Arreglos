//------------------------------ 70 Ejercicio--------------------//
// Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarContrasena() {
    const contrasenaCorrecta = 'contraseña';
    let contrasenaIngresada = '';

    const solicitarContrasena = () => {
        readline.question('Por favor, introduzca la contraseña: ', (input) => {
            contrasenaIngresada = input;

            if (contrasenaIngresada === contrasenaCorrecta) {
                console.log('Contraseña correcta. Acceso concedido.');
                readline.close(); 
            } else {
                console.log('Contraseña incorrecta. Inténtelo de nuevo.');
                solicitarContrasena(); 
            }
        });
    };

    solicitarContrasena(); 
}


verificarContrasena();
