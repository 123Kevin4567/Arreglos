//------------------------------ 43 Ejercicio--------------------//
// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

//BAse:


const texto = 'El profe dijo: "No olviden poner sus nombres en la tarea". Luego agregó: "Y por favor, no copien de internet"';


const regex = /"([^"]*)"/g;


let coincidencia;
while ((coincidencia = regex.exec(texto)) !== null) {
    console.log('Frase encontrada:', coincidencia[1]);
}