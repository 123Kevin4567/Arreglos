//------------------1 Ejercicio-------------//

function verificarEdad() {
    let edad = prompt("Ingresa tu edad:");

    if (edad > 0 && !isNaN(edad)) {
        if (edad >= 18) {
            alert("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
        }
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}



//------------------2 Ejercicio-------------//

function verificarContrasena() {
    const contrasenaGuardada = "miContrasena123"; 
    const regexAlfanumerico = /^[a-zA-Z0-9]+$/; 

    let contrasenaUsuario = prompt("Ingresa la contraseña:");

    let carro = {};


    if (regexAlfanumerico.test(contrasenaUsuario)) {
        if (contrasenaUsuario.toLowerCase() === contrasenaGuardada.toLowerCase()) {
            carro.mensaje = "La contraseña es correcta.";
        } else {
            carro.mensaje = "La contraseña es incorrecta.";
        }
    } else {
        carro.mensaje = "Por favor, ingresa solo caracteres alfanuméricos.";
    }

    console.log(carro);
}


//------------------3 Ejercicio-------------//


function dividirNumeros(dividendo, divisor) {
    if (divisor === 0) {
        throw new Error("Error: No se puede dividir entre cero.");
    }
    return dividendo / divisor;
}


function main() {
    const numero1 = parseFloat(prompt("Introduce el primer número (dividendo):"));
    const numero2 = parseFloat(prompt("Introduce el segundo número (divisor):"));

    try {
        const resultado = dividirNumeros(numero1, numero2);
        console.log(`El resultado de la división es: ${resultado}`);
    } catch (error) {
        console.log(error.message); 
    }
}


main();



//-------------------- 4 Ejercicio--------------------//

function esParOImpar(numero) {
    return numero % 2 === 0; 
}


function main() {
    const numero = parseInt(prompt("Introduce un número entero:"));


    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número entero válido.");
        return;
    }


    if (esParOImpar(numero)) {
        console.log(`${numero} es un número par.`);
    } else {
        console.log(`${numero} es un número impar.`);
    }
}


main();

//-------------------- 5 Ejercicio--------------------//


function debeTributar(edad, ingresos) {
    return edad > 16 && ingresos >= 1000;
}


function main() {
    const edad = parseInt(prompt("Introduce tu edad:"));
    const ingresos = parseFloat(prompt("Introduce tus ingresos mensuales:"));


    if (isNaN(edad) || isNaN(ingresos)) {
        console.log("Por favor, ingresa valores válidos para la edad e ingresos.");
        return;
    }


    if (debeTributar(edad, ingresos)) {
        console.log("Debes tributar.");
    } else {
        console.log("No debes tributar.");
    }
}


main();


//-------------------- 6 Ejercicio--------------------//


function determinarGrupo(nombre, sexo) {
    const nombreInicial = nombre.charAt(0).toUpperCase(); 

    if (sexo.toLowerCase() === 'mujer' && nombreInicial < 'M') {
        return 'Grupo A'; 
    } else if (sexo.toLowerCase() === 'hombre' && nombreInicial > 'N') {
        return 'Grupo A'; 
    } else {
        return 'Grupo B'; 
    }
}


function main() {
    const nombre = prompt("Introduce tu nombre:");
    const sexo = prompt("Introduce tu sexo (hombre/mujer):");


    if (!nombre || (sexo.toLowerCase() !== 'hombre' && sexo.toLowerCase() !== 'mujer')) {
        console.log("Por favor, ingresa un nombre y un sexo válidos.");
        return;
    }


    const grupo = determinarGrupo(nombre, sexo);
    console.log(`Pertenes al: ${grupo}`);
}

main();

//-------------------- 7 Ejercicio--------------------//


function determinarTipoImpositivo(renta) {
    if (renta >= 10000 && renta < 20000) {
        return "5%";
    } else if (renta >= 20000 && renta < 35000) {
        return "10%";
    } else if (renta >= 35000 && renta < 60000) {
        return "20%";
    } else if (renta > 60000) {
        return "45%";
    } else {
        return "No aplica para tramos impositivos."; 
    }
}


function main() {
    const renta = parseFloat(prompt("Introduce tu renta anual:"));


    if (isNaN(renta) || renta < 0) {
        console.log("Por favor, ingresa una renta válida.");
        return;
    }

    const tipoImpositivo = determinarTipoImpositivo(renta);
    console.log(`El tipo impositivo que te corresponde es: ${tipoImpositivo}`);
}


main();


//-------------------- 8 Ejercicio--------------------//


function evaluarDesempeño(puntuacion) {
    const cantidadPorPuntuacion = 2400; 
    let nivel;
    let cantidad;


    if (puntuacion === 0.0) {
        nivel = "Inaceptable";
        cantidad = 0;
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
        cantidad = cantidadPorPuntuacion * puntuacion;
    } else if (puntuacion >= 0.6) {
        nivel = "Meritorio";
        cantidad = cantidadPorPuntuacion * puntuacion;
    } else {
        nivel = "Puntuación no válida"; 
        cantidad = 0;
    }

    return { nivel, cantidad };
}


function main() {
    const puntuacion = parseFloat(prompt("Introduce tu puntuación de evaluación (0.0, 0.4, 0.6 o más):"));

    if (isNaN(puntuacion) || puntuacion < 0) {
        console.log("Por favor, ingresa una puntuación válida.");
        return;
    }


    const { nivel, cantidad } = evaluarDesempeño(puntuacion);


    if (nivel === "Puntuación no válida") {
        console.log(nivel);
    } else {
        console.log(`Tu nivel de rendimiento es: ${nivel}`);
        console.log(`La cantidad de dinero que recibirás es: ${cantidad.toFixed(2)}€`);
    }
}


main();


//-------------------- 9 Ejercicio--------------------//


function calcularPrecioEntrada(edad) {
    if (edad < 4) {
        return 0; 
    } else if (edad >= 4 && edad <= 18) {
        return 5; 
    } else {
        return 10; 
    }
}


function main() {
    const edad = parseInt(prompt("Introduce la edad del cliente:"));


    if (isNaN(edad) || edad < 0) {
        console.log("Por favor, ingresa una edad válida.");
        return;
    }


    const precio = calcularPrecioEntrada(edad);


    if (precio === 0) {
        console.log("El cliente puede entrar gratis.");
    } else {
        console.log(`El precio de la entrada es: ${precio}€`);
    }
}


main();


//----------------------------- 10 Ejercicio ------------------//


function elegirIngrediente(vegetariana) {
    let ingredientes;
    
    if (vegetariana) {
        ingredientes = ["Pimiento", "Tofu"];
    } else {
        ingredientes = ["Pepperoni", "Jamón", "Salmón"];
    }

    console.log("Ingredientes disponibles:");
    for (let i = 0; i < ingredientes.length; i++) {
        console.log(`${i + 1}. ${ingredientes[i]}`);
    }

    const eleccion = parseInt(prompt("Elige un ingrediente (introduce el número correspondiente):"));


    if (isNaN(eleccion) || eleccion < 1 || eleccion > ingredientes.length) {
        console.log("Elección no válida. No se ha añadido ningún ingrediente.");
        return null; 
    }

    return ingredientes[eleccion - 1]; 
}


function main() {
    const tipoPizza = prompt("¿Quieres una pizza vegetariana? (sí/no):").toLowerCase();

    let vegetariana;
    if (tipoPizza === "sí") {
        vegetariana = true;
    } else if (tipoPizza === "no") {
        vegetariana = false;
    } else {
        console.log("Opción no válida. Por favor, responde con 'sí' o 'no'.");
        return; 
    }

    const ingredienteElegido = elegirIngrediente(vegetariana);


    if (ingredienteElegido) {
        const tipoPizzaTexto = vegetariana ? "vegetariana" : "no vegetariana";
        console.log(`Has elegido una pizza ${tipoPizzaTexto} con los siguientes ingredientes: Mozzarella, Tomate, ${ingredienteElegido}.`);
    }
}


main();


//------------------------------ 11 Ejercicio--------------------//

const numeros = {
    num1: 10,
    num2: 5
  };
  
  const { num1, num2 } = numeros;
  
  const operaciones = {
    suma: num1 + num2,
    resta: num1 - num2,
    multiplicacion: num1 * num2,
    division: num1 / num2
  };
  
  const { suma, resta, multiplicacion, division } = operaciones;
  
  console.log(`Suma: ${suma}`);
  console.log(`Resta: ${resta}`);
  console.log(`Multiplicación: ${multiplicacion}`);
  console.log(`División: ${division}`);

  //------------------------------ 12 Ejercicio--------------------//

  const rectangulo = {
    base: 5,
    altura: 3
  };
  
  const { base, altura } = rectangulo;
  
  const area = base * altura;
  
  console.log(`El área del rectángulo es: ${area}`);

    //------------------------------ 13 Ejercicio--------------------//

    const numeros = {
        num1: 10,
        num2: 15,
        num3: 20,
        num4: 25
      };
      
      const { num1, num2, num3, num4 } = numeros;
      
      const suma = num1 + num2 + num3 + num4;
      const media = suma / 4;
      
      console.log(`Los números son: ${num1}, ${num2}, ${num3}, ${num4}`);
      console.log(`La media es: ${media}`);

//------------------------------ 14 Ejercicio--------------------//

const triangulo = {
    base: 6,
    altura: 4
  };
  
  const { base, altura } = triangulo;
  
  const area = (base * altura) / 2;
  
  console.log(`La base del triángulo es: ${base}`);
  console.log(`La altura del triángulo es: ${altura}`);
  console.log(`El área del triángulo es: ${area}`);

  //------------------------------ 15 Ejercicio--------------------//

  const circulo = {
    radio: 5
  };
  
  const { radio } = circulo;
  
  const PI = Math.PI;
  
  const longitud = 2 * PI * radio;
  const area = PI * radio ** 2;
  
  console.log(`El radio de la circunferencia es: ${radio}`);
  console.log(`La longitud de la circunferencia es: ${longitud.toFixed(2)}`);
  console.log(`El área del círculo es: ${area.toFixed(2)}`);


 //------------------------------ 16 Ejercicio--------------------//

 const movimiento = {
    distancia: 2,
    tiempo: 5  
  };
  
  const { distancia, tiempo } = movimiento;
  
 
  const distanciaEnMetros = distancia * 1000;  
  const tiempoEnSegundos = tiempo * 60;      
  

  const velocidad = distanciaEnMetros / tiempoEnSegundos;
  
  console.log(`Distancia recorrida: ${distancia} km`);
  console.log(`Tiempo empleado: ${tiempo} minutos`);
  console.log(`Velocidad del proyectil: ${velocidad.toFixed(2)} m/s`);


 //------------------------------ 17 Ejercicio--------------------//

 const esfera = {
    radio: 5 
  };
  
  const { radio } = esfera;
  
  const PI = Math.PI;
  

  const volumen = (4 / 3) * PI * Math.pow(radio, 3);
  
  console.log(`El radio de la esfera es: ${radio} unidades`);
  console.log(`El volumen de la esfera es: ${volumen.toFixed(2)} unidades cúbicas`);


 //------------------------------ 18 Ejercicio--------------------//

function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}


function main() {
  
    const a = parseFloat(prompt("Introduce el valor de a:"));
    const b = parseFloat(prompt("Introduce el valor de b:"));
    const c = parseFloat(prompt("Introduce el valor de c:"));


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Por favor, ingresa números válidos.");
        return;
    }

 
    let resultado;


    if (b + 2 - a === 0) {
        console.log("Error: División por cero no permitida.");
        return;
    } else {
        resultado = evaluarExpresion(a, b, c);
    }


    console.log(`El resultado de la expresión es: ${resultado}`);
}


main();

//------------------------------ 19 Ejercicio--------------------//


function calcularCilindro(radio, altura) {
    const pi = Math.PI; // Valor de π
    const area = 2 * pi * radio * (radio + altura); 
    const volumen = pi * Math.pow(radio, 2) * altura; 

    return { area, volumen };
}


function main() {

    const radio = parseFloat(prompt("Introduce el radio del cilindro:"));
    const altura = parseFloat(prompt("Introduce la altura del cilindro:"));


    if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {
        console.log("Por favor, ingresa valores válidos para el radio y la altura (números positivos).");
        return;
    }


    const resultados = calcularCilindro(radio, altura);


    console.log(`Área del cilindro: ${resultados.area.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen del cilindro: ${resultados.volumen.toFixed(2)} unidades cúbicas`);
}

main();

//------------------------------ 20 Ejercicio--------------------//

function calcularRaices(a, b, c) {
    const discriminante = b ** 2 - 4 * a * c; 

    if (discriminante > 0) {
      
        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return { tipo: "dos", raices: [raiz1, raiz2] };
    } else if (discriminante === 0) {
       
        const raiz = -b / (2 * a);
        return { tipo: "una", raices: [raiz] };
    } else {
        
        return { tipo: "ninguna", raices: [] };
    }
}


function main() {
    
    const a = parseFloat(prompt("Introduce el coeficiente a:"));
    const b = parseFloat(prompt("Introduce el coeficiente b:"));
    const c = parseFloat(prompt("Introduce el coeficiente c:"));

 
    if (a === 0) {
        console.log("El coeficiente 'a' no puede ser cero en una ecuación cuadrática.");
        return;
    }

    
    const resultado = calcularRaices(a, b, c);

    
    if (resultado.tipo === "dos") {
        console.log(`Las raíces reales son: ${resultado.raices[0].toFixed(2)} y ${resultado.raices[1].toFixed(2)}`);
    } else if (resultado.tipo === "una") {
        console.log(`La raíz real doble es: ${resultado.raices[0].toFixed(2)}`);
    } else {
        console.log("No hay raíces reales.");
    }
}

main();

//------------------------------ 21 Ejercicio--------------------//


function calcularVolumenElipsoide(a, b, c) {
    const pi = Math.PI; 
    const volumen = (4/3) * pi * a * b * c; 
    return volumen;
}

function main() {
    
    const a = parseFloat(prompt("Introduce el semieje a del elipsoide:"));
    const b = parseFloat(prompt("Introduce el semieje b del elipsoide:"));
    const c = parseFloat(prompt("Introduce el semieje c del elipsoide:"));

    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Por favor, ingresa valores válidos y positivos para los semiejes.");
        return;
    }


    const volumen = calcularVolumenElipsoide(a, b, c);


    console.log(`El volumen del elipsoide es: ${volumen.toFixed(2)} unidades cúbicas`);
}


main();

//------------------------------ 22 Ejercicio--------------------//

// Constantes
const COSTO_POR_MINUTO = 355;
const IVA = 0.20;

// Función para calcular el costo de la llamada
function calcularCostoLlamada(minutos) {
    const costoBase = minutos * COSTO_POR_MINUTO;
    const impuesto = costoBase * IVA;
    const costoTotal = costoBase + impuesto;
    
    return {
        duracion: minutos,
        costoBase: costoBase,
        impuesto: impuesto,
        total: costoTotal
    };
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    console.log(`Duración de la llamada: ${resultado.duracion} minutos`);
    console.log(`Costo base: $${resultado.costoBase} pesos`);
    console.log(`IVA (20%): $${resultado.impuesto} pesos`);
    console.log(`Costo total: $${resultado.total} pesos`);
}

// Programa principal
const duracionLlamada = 10; // Ejemplo: llamada de 10 minutos
const resultado = calcularCostoLlamada(duracionLlamada);
mostrarResultado(resultado);


//------------------------------ 23 Ejercicio--------------------//

// Función para convertir km/h a m/s
function kmhAMs(velocidadKmh) {
    // 1 km/h es igual a 1000/3600 m/s (aproximadamente 0.2778 m/s)
    const factorConversion = 1000 / 3600;
    return velocidadKmh * factorConversion;
}

// Función para mostrar el resultado
function mostrarResultado(velocidadKmh, velocidadMs) {
    console.log(`Velocidad de entrada: ${velocidadKmh} km/h`);
    console.log(`Velocidad convertida: ${velocidadMs.toFixed(2)} m/s`);
}

// Programa principal
const velocidadKmh = 72; // Ejemplo: 72 km/h
const velocidadMs = kmhAMs(velocidadKmh);
mostrarResultado(velocidadKmh, velocidadMs);


//------------------------------ 24 Ejercicio--------------------//

// Expresión regular para reconocer números en punto flotante
const regex = /^[-+]?(?:\d+\.?\d*|\.\d+)(?:[eE][-+]?\d+)?$/;

// Función para probar la expresión regular
function probarNumero(numero) {
    if (regex.test(numero)) {
        console.log(`"${numero}" es un número en punto flotante válido.`);
    } else {
        console.log(`"${numero}" no es un número en punto flotante válido.`);
    }
}

// Pruebas
const numeros = [
    "2.3e-1",
    "-3e2",
    "23",
    "3.2",
    "-0.5",
    "+1.23",
    "4.56e+3",
    ".789",
    "-.5e-2",
    "abc",
    "1,000",
    "2.3.4"
];

numeros.forEach(probarNumero);

//------------------------------ 25 Ejercicio--------------------//

// Constantes
const PORCENTAJE_DESCUENTO = 10;

// Función para calcular el descuento y el precio final
function calcularPrecioConDescuento(precioOriginal) {
    const descuento = (precioOriginal * PORCENTAJE_DESCUENTO) / 100;
    const precioFinal = precioOriginal - descuento;
    
    return {
        precioOriginal: precioOriginal,
        descuento: descuento,
        precioFinal: precioFinal
    };
}

// Función para mostrar el resultado
function mostrarResultado(resultado) {
    console.log(`Precio original: $${resultado.precioOriginal.toFixed(2)}`);
    console.log(`Descuento (${PORCENTAJE_DESCUENTO}%): $${resultado.descuento.toFixed(2)}`);
    console.log(`Precio final: $${resultado.precioFinal.toFixed(2)}`);
}

// Función para simular la entrada del usuario
function obtenerPrecioMedicamento() {
    // En un entorno real, esto podría ser un input del usuario
    return 100; // Por ejemplo, un medicamento que cuesta $100
}

// Programa principal
const precioMedicamento = obtenerPrecioMedicamento();
const resultado = calcularPrecioConDescuento(precioMedicamento);
mostrarResultado(resultado);

//------------------------------ 26 Ejercicio--------------------//

// Función para convertir de Centígrados a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para mostrar el resultado
function mostrarResultado(celsius, fahrenheit) {
    console.log(`Temperatura de entrada: ${celsius}°C`);
    console.log(`Temperatura convertida: ${fahrenheit.toFixed(2)}°F`);
}

// Función para simular la entrada del usuario
function obtenerTemperaturaCelsius() {
    // En un entorno real, esto podría ser un input del usuario
    return 25; // Por ejemplo, 25°C
}

// Programa principal
const temperaturaCelsius = obtenerTemperaturaCelsius();
const temperaturaFahrenheit = celsiusAFahrenheit(temperaturaCelsius);
mostrarResultado(temperaturaCelsius, temperaturaFahrenheit);

//------------------------------ 27 Ejercicio--------------------//

// Constantes para los porcentajes
const PORCENTAJE_PARCIALES = 0.55;
const PORCENTAJE_EXAMEN_FINAL = 0.30;
const PORCENTAJE_TRABAJO_FINAL = 0.15;

// Función para calcular el promedio de los parciales
function calcularPromedioParciales(parcial1, parcial2, parcial3) {
    return (parcial1 + parcial2 + parcial3) / 3;
}

// Función para calcular la calificación final
function calcularCalificacionFinal(promedioParciales, examenFinal, trabajoFinal) {
    return (promedioParciales * PORCENTAJE_PARCIALES) +
           (examenFinal * PORCENTAJE_EXAMEN_FINAL) +
           (trabajoFinal * PORCENTAJE_TRABAJO_FINAL);
}

// Función para mostrar el resultado
function mostrarResultado(promedioParciales, examenFinal, trabajoFinal, calificacionFinal) {
    console.log(`Promedio de parciales: ${promedioParciales.toFixed(2)}`);
    console.log(`Examen final: ${examenFinal.toFixed(2)}`);
    console.log(`Trabajo final: ${trabajoFinal.toFixed(2)}`);
    console.log(`Calificación final: ${calificacionFinal.toFixed(2)}`);
}

// Función para simular la entrada de calificaciones
function obtenerCalificaciones() {
    // En un entorno real, esto sería un input del usuario
    return {
        parcial1: 85,
        parcial2: 90,
        parcial3: 88,
        examenFinal: 92,
        trabajoFinal: 95
    };
}

// Programa principal
function calcularPromedioFinal() {
    const calificaciones = obtenerCalificaciones();
    const promedioParciales = calcularPromedioParciales(
        calificaciones.parcial1,
        calificaciones.parcial2,
        calificaciones.parcial3
    );
    const calificacionFinal = calcularCalificacionFinal(
        promedioParciales,
        calificaciones.examenFinal,
        calificaciones.trabajoFinal
    );
    
    mostrarResultado(promedioParciales, calificaciones.examenFinal, calificaciones.trabajoFinal, calificacionFinal);
}

// Ejecutar el programa
calcularPromedioFinal();

//------------------------------ 28 Ejercicio--------------------//

// Definición de la clase Empleado
class Empleado {
    constructor(nombre, horasTrabajadas, pagoPorHora) {
        this.nombre = nombre;                 // Tipo de dato: String
        this.horasTrabajadas = horasTrabajadas; // Tipo de dato: Número
        this.pagoPorHora = pagoPorHora;       // Tipo de dato: Número
    }

    // Método para calcular el sueldo total
    calcularSueldo() {
        // Suponiendo que las horas extras (mayores a 40 horas) se pagan al 1.5x
        let horasExtras = 0;
        if (this.horasTrabajadas > 40) {
            horasExtras = this.horasTrabajadas - 40;
        }

        const sueldoBase = 40 * this.pagoPorHora;
        const pagoHorasExtras = horasExtras * this.pagoPorHora * 1.5;

        // Si no hay horas extras, se calcula el sueldo normal
        if (this.horasTrabajadas <= 40) {
            return this.horasTrabajadas * this.pagoPorHora;
        } else {
            return sueldoBase + pagoHorasExtras;
        }
    }

    // Método para mostrar la información del empleado y su sueldo
    mostrarInformacion() {
        console.log(`Empleado: ${this.nombre}`);
        console.log(`Horas trabajadas: ${this.horasTrabajadas}`);
        console.log(`Pago por hora: $${this.pagoPorHora}`);
        console.log(`Sueldo total: $${this.calcularSueldo()}`);
    }
}

// Crear una instancia del empleado
const empleado1 = new Empleado("Juan", 45, 10);

// Mostrar la información y sueldo del empleado
empleado1.mostrarInformacion();


//------------------------------ 29 Ejercicio--------------------//

// Función para calcular el promedio de calificaciones
function calcularPromedio(calificaciones) {
    let suma = 0;

    // Recorrer el arreglo de calificaciones y sumar los valores
    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    // Calcular el promedio dividiendo la suma entre la cantidad de calificaciones
    const promedio = suma / calificaciones.length;

    return promedio;
}

// Calificaciones del estudiante en cuatro exámenes (rango de 1 a 5)
const calificacionesEstudiante = [4.5, 3.8, 4.0, 5.0];

// Obtener el promedio de las calificaciones
const promedio = calcularPromedio(calificacionesEstudiante);

// Mostrar el promedio en la consola
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);


//------------------------------ 30 Ejercicio--------------------//
// Función para comprobar la fortaleza de una contraseña
function comprobarFortalezaContrasena(contrasena) {
    // Verificar la longitud de la contraseña (entre 8 y 12 caracteres)
    if (contrasena.length < 8 || contrasena.length > 12) {
        return 'La contraseña debe tener entre 8 y 12 caracteres.';
    }

    // Expresiones regulares para comprobar los requisitos
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneDigito = /\d/;

    // Verificar si contiene al menos una mayúscula
    if (!tieneMayuscula.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra mayúscula.';
    }

    // Verificar si contiene al menos una minúscula
    if (!tieneMinuscula.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra minúscula.';
    }

    // Verificar si contiene al menos un dígito
    if (!tieneDigito.test(contrasena)) {
        return 'La contraseña debe contener al menos un dígito.';
    }

    // Si pasa todas las verificaciones
    return 'La contraseña es fuerte.';
}

// Ejemplos de contraseñas para probar
const contrasena1 = 'Abc12345';
const contrasena2 = 'abcdef';
const contrasena3 = 'ABC12345';
const contrasena4 = 'Abcdef12';

// Comprobar la fortaleza de las contraseñas
console.log(comprobarFortalezaContrasena(contrasena1)); // Contraseña fuerte
console.log(comprobarFortalezaContrasena(contrasena2)); // Falta mayúscula y dígito
console.log(comprobarFortalezaContrasena(contrasena3)); // Falta minúscula
console.log(comprobarFortalezaContrasena(contrasena4)); // Contraseña fuerte


//------------------------------ 31 Ejercicio--------------------//

// Función para calcular la distancia entre dos puntos (x1, y1) y (x2, y2)
function calcularDistancia(x1, y1, x2, y2) {
    // Utilizando la fórmula matemática sqrt y pow
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Coordenadas de los puntos
const x1 = 3;
const y1 = 4;
const x2 = 7;
const y2 = 1;

// Llamada a la función para calcular la distancia
const distancia = calcularDistancia(x1, y1, x2, y2);

// Mostrar el resultado
console.log(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`);


//------------------------------ 32 Ejercicio--------------------//

// Función para calcular el precio con descuento
function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * (descuento / 100));
}

// Precios de los 5 productos
const productos = [100, 200, 300, 400, 500]; // Precios iniciales de los productos

// Descuentos aplicados
const descuentoPrimerosDos = 5; // 5% de descuento para los dos primeros productos
const descuentoUltimosDos = 2;  // 2% de descuento para los dos últimos productos

// Variables para almacenar los valores a pagar por cada producto
let valorPagar = [];

// Cálculo del precio final de cada producto
valorPagar[0] = calcularPrecioConDescuento(productos[0], descuentoPrimerosDos); // Primer producto con 5% de descuento
valorPagar[1] = calcularPrecioConDescuento(productos[1], descuentoPrimerosDos); // Segundo producto con 5% de descuento
valorPagar[2] = productos[2]; // Tercer producto sin descuento
valorPagar[3] = calcularPrecioConDescuento(productos[3], descuentoUltimosDos); // Cuarto producto con 2% de descuento
valorPagar[4] = calcularPrecioConDescuento(productos[4], descuentoUltimosDos); // Quinto producto con 2% de descuento

// Calcular el total de la compra
const totalCompra = valorPagar.reduce((total, precio) => total + precio, 0);

// Mostrar el valor a pagar por cada producto y el total de la compra
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto ${i + 1}: Precio inicial $${productos[i]}, Precio con descuento $${valorPagar[i].toFixed(2)}`);
}
console.log(`\nTotal a pagar por los 5 productos: $${totalCompra.toFixed(2)}`);


//------------------------------ 33 Ejercicio--------------------//

// Función para calcular la edad de la madre al momento de dar a luz
function calcularEdadMadreEdadHijo(edadMadreActual, edadHijoActual) {
    return edadMadreActual - edadHijoActual;
}

// Datos de entrada: Edad actual de la madre y del hijo
const edadMadre = 45;  // Edad actual de la madre
const edadHijo = 20;   // Edad actual del hijo

// Calcular la edad de la madre al dar a luz
const edadMadreCuandoDioALuz = calcularEdadMadreEdadHijo(edadMadre, edadHijo);

// Mostrar el resultado
console.log(`La madre tenía ${edadMadreCuandoDioALuz} años cuando dio a luz a su hijo.`);


//------------------------------ 34 Ejercicio--------------------//

// Definir el valor de PI
const PI = 3.1416;

// Función para calcular el volumen del depósito cilíndrico
function calcularVolumenDeposito(radio, altura) {
    // Convertir el volumen a litros (1 metro cúbico = 1000 litros)
    const volumen = PI * Math.pow(radio, 2) * altura * 1000; // Volumen en litros
    return volumen;
}

// Función para calcular el tiempo de llenado del depósito
function calcularTiempoLlenado(volumen, caudal) {
    // Tiempo en segundos
    const tiempoEnSegundos = volumen / caudal;
    // Convertir el tiempo a minutos
    const tiempoEnMinutos = tiempoEnSegundos / 60;
    return tiempoEnMinutos;
}

// Datos de entrada: radio, altura y caudal del flujo de agua
const radioDeposito = 2;  // Radio del depósito en metros
const alturaDeposito = 5; // Altura del depósito en metros
const caudal = 10;        // Caudal en litros por segundo

// Calcular el volumen del depósito
const volumenDeposito = calcularVolumenDeposito(radioDeposito, alturaDeposito);

// Calcular el tiempo de llenado en minutos
const tiempoLlenado = calcularTiempoLlenado(volumenDeposito, caudal);

// Mostrar el volumen y el tiempo de llenado
console.log(`Volumen del depósito: ${volumenDeposito.toFixed(2)} litros`);
console.log(`Tiempo estimado para llenar el depósito: ${tiempoLlenado.toFixed(2)} minutos`);


//------------------------------ 35 Ejercicio--------------------//

// Precios de los productos
const precioLlaveHexagonal = 11500; // Precio de cada juego de llaves hexagonales
const precioBomba = 1168000;        // Precio de la bomba
const precioCajaPernos = 87000;     // Precio de cada caja de pernos

// Cantidades compradas
const cantidadLlavesHexagonales = 5;  // Cantidad de juegos de llaves hexagonales
const cantidadBombas = 1;             // Cantidad de bombas
const cantidadCajasPernos = 3;        // Cantidad de cajas de pernos

// Calcular el costo total de cada producto
const totalLlavesHexagonales = precioLlaveHexagonal * cantidadLlavesHexagonales;
const totalBombas = precioBomba * cantidadBombas;
const totalCajasPernos = precioCajaPernos * cantidadCajasPernos;

// Calcular el total general de la compra
const totalCompra = totalLlavesHexagonales + totalBombas + totalCajasPernos;

// Mostrar los costos individuales y el total de la compra
console.log(`Total por los juegos de llaves hexagonales: $${totalLlavesHexagonales}`);
console.log(`Total por la bomba: $${totalBombas}`);
console.log(`Total por las cajas de pernos: $${totalCajasPernos}`);
console.log(`\nTotal de la compra: $${totalCompra}`);

//------------------------------ 36 Ejercicio--------------------//

// Cantidad de cacao y harina en la receta original
const cacaoPorCada100GrHarina = 10; // 10 gramos de cacao por cada 100 gramos de harina
const harinaOriginal = 100;         // 100 gramos de harina

// Cacao deseado para la receta
const cacaoDeseado = 20; // 20 gramos de cacao

// Calcular la cantidad de harina necesaria usando una regla de tres
const harinaNecesaria = (cacaoDeseado * harinaOriginal) / cacaoPorCada100GrHarina;

// Mostrar el resultado
console.log(`La cantidad de harina necesaria para ${cacaoDeseado} gramos de cacao es: ${harinaNecesaria} gramos.`);




//------------------------------ 37 Ejercicio--------------------//

// Número de cajas y peso de cada caja
const numeroCajas = 25;
const pesoPorCaja = 748; // Peso en Kg

// Calcular el peso total transportado por el camión
const pesoTotal = numeroCajas * pesoPorCaja;

// Mostrar el resultado
console.log(`El camión transporta un total de ${pesoTotal} Kg.`);


//------------------------------ 38 Ejercicio--------------------//

// Parte de cada estudiante
const parteMartin = 2 / 3; // Martín toma 2/3 del total
const parteJairo = 1 / 4;   // Jairo toma 1/4 del total

// Calcular la parte total que toman Martín y Jairo
const denominadorComun = 12; // Mínimo común múltiplo de 3 y 4
const parteMartin12 = (parteMartin * denominadorComun) / 1; // Convertir a 12
const parteJairo12 = (parteJairo * denominadorComun) / 1;   // Convertir a 12

// Sumar las partes de Martín y Jairo
const parteTotalEstudiantes = (parteMartin12 + parteJairo12) / denominadorComun;

// Calcular la parte de Lorena
const parteLorena = 1 - parteTotalEstudiantes; // Parte restante

// Mostrar el resultado
console.log(`A Lorena le corresponde ${parteLorena.toFixed(2)} del total de tapas.`);


//------------------------------ 39 Ejercicio--------------------//

// Costo por metro cuadrado
const costoPorMetroCuadrado = 20; // Por ejemplo, $20 por m2

// Función para calcular el presupuesto
function calcularPresupuesto(metrosCuadrados) {
    const presupuestoTotal = metrosCuadrados * costoPorMetroCuadrado;
    return presupuestoTotal;
}

// Simulación de entrada del usuario
const metrosCuadradosA pintar = 50; // Por ejemplo, 50 m2 a pintar

// Calcular el presupuesto
const presupuesto = calcularPresupuesto(metrosCuadradosAPintar);

// Mostrar el resultado al cliente
console.log(`El presupuesto total para pintar ${metrosCuadradosAPintar} m2 es: $${presupuesto}`);


//------------------------------ 40 Ejercicio--------------------//

// Obtener el año actual
const añoActual = new Date().getFullYear();

// Función para calcular la edad
function calcularEdad(añoNacimiento) {
    const edad = añoActual - añoNacimiento;
    return edad;
}

// Simulación de entrada del usuario
const añoNacimiento = 1990; // Ejemplo: el usuario ingresó 1990

// Calcular la edad
const edad = calcularEdad(añoNacimiento);

// Mostrar el resultado
console.log(`La edad de la persona que nació en ${añoNacimiento} es: ${edad} años.`);


//------------------------------ 41 Ejercicio--------------------//

// Función para invertir una cadena
function invertirFrase(frase) {
    return frase.split('').reverse().join('');
}

// Simulación de entrada del usuario
const frase = "Soy un programador de software"; // Ejemplo de frase ingresada

// Invertir la frase
const fraseInvertida = invertirFrase(frase);

// Mostrar el resultado
console.log(`La frase invertida es: "${fraseInvertida}"`);


//------------------------------ 42 Ejercicio--------------------//

// Precios de los artículos
const precioLibro = 10000;    // Precio de un libro
const precioCuaderno = 7550;   // Precio de un cuaderno
const precioLapicero = 5550;    // Precio de un lapicero

// Función para calcular el monto total de la venta
function calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    const totalLibros = cantidadLibros * precioLibro;
    const totalCuadernos = cantidadCuadernos * precioCuaderno;
    const totalLapiceros = cantidadLapiceros * precioLapicero;
    
    const montoTotal = totalLibros + totalCuadernos + totalLapiceros;
    return montoTotal;
}

// Simulación de entrada del usuario
const cantidadLibros = 3;      // Ejemplo: 3 libros vendidos
const cantidadCuadernos = 5;   // Ejemplo: 5 cuadernos vendidos
const cantidadLapiceros = 10;   // Ejemplo: 10 lapiceros vendidos

// Calcular el monto total de la venta
const montoTotalVenta = calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros);

// Mostrar el resultado
console.log(`El monto total de la venta es: $${montoTotalVenta}`);

//------------------------------ 43 Ejercicio--------------------//

//BAse:
const regex = /"((?:[^"\\]|\\.)*?)"/g;


const texto = `"Este es un ejemplo de "cadena con "comillas" escapadas\" y otros caracteres \\n."`;
const regex = /"((?:[^"\\]|\\.)*?)"/g;

let coincidencias;
while ((coincidencias = regex.exec(texto)) !== null) {
    console.log(`Cadena encontrada: ${coincidencias[0]}`);
}

//------------------------------ 44 Ejercicio--------------------//

// Definición de las constantes para el valor de las monedas
const valorDolar = 4000; // Valor de 1 dólar en pesos
const valorEuro = 4500;  // Valor de 1 euro en pesos

// Función para convertir pesos a dólares y euros
function convertirMoneda(pesos) {
    const dolares = pesos / valorDolar; // Conversión a dólares
    const euros = pesos / valorEuro;     // Conversión a euros
    return { dolares, euros };
}

// Simulación de entrada del usuario
const pesos = 20000; // Ejemplo: el usuario ingresó 20000 pesos

// Realizar la conversión
const { dolares, euros } = convertirMoneda(pesos);

// Mostrar el resultado
console.log(`La cantidad de ${pesos} pesos es equivalente a:`);
console.log(`Dólares: $${dolares.toFixed(2)}`);
console.log(`Euros: €${euros.toFixed(2)}`);



//------------------------------ 45 Ejercicio--------------------//
// Función para verificar si un número es positivo y menor que 100
function verificarNumero(numero) {
    if (numero > 0 && numero < 100) {
        return true;  // El número es positivo y menor que 100
    } else {
        return false; // El número no cumple con las condiciones
    }
}

// Simulación de entrada del usuario
const numero = 45; // Ejemplo: el usuario ingresó 45

// Verificar el número
const resultado = verificarNumero(numero);

// Mostrar el resultado
if (resultado) {
    console.log(`El número ${numero} es positivo y menor que 100.`);
} else {
    console.log(`El número ${numero} NO es positivo o es mayor o igual que 100.`);
}


//------------------------------ 46 Ejercicio--------------------//

// Función para encontrar el mayor de tres números
function mayorDeTres(num1, num2, num3) {
    let mayor;

    if (num1 >= num2 && num1 >= num3) {
        mayor = num1; // num1 es mayor o igual a num2 y num3
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2; // num2 es mayor o igual a num1 y num3
    } else {
        mayor = num3; // num3 es el mayor
    }

    return mayor;
}

// Simulación de entrada del usuario
const num1 = 12; // Ejemplo: el usuario ingresó 12
const num2 = 45; // Ejemplo: el usuario ingresó 45
const num3 = 23; // Ejemplo: el usuario ingresó 23

// Calcular el mayor de los tres números
const mayor = mayorDeTres(num1, num2, num3);

// Mostrar el resultado
console.log(`El mayor de los tres números (${num1}, ${num2}, ${num3}) es: ${mayor}`);


//------------------------------ 47 Ejercicio--------------------//

function compararValores(a, b, c) {
    if (a === b && b === c) {
        console.log("Los tres valores son iguales.");
    } else if (a === b) {
        console.log("A y B son iguales, C es diferente.");
    } else if (b === c) {
        console.log("B y C son iguales, A es diferente.");
    } else {
        if (a > b) {
            if (a > c) {
                console.log(`A es el mayor, C es el menor.`);
            } else {
                console.log(`C es el mayor, A es el menor.`);
            }
        } else {
            if (b > c) {
                console.log(`B es el mayor, C es el menor.`);
            } else {
                console.log(`C es el mayor, B es el menor.`);
            }
        }
    }
}

// Simulación de entrada del usuario
const a = 10; // Ejemplo: el usuario ingresó 10
const b = 20; // Ejemplo: el usuario ingresó 20
const c = 10; // Ejemplo: el usuario ingresó 10

// Comparar los valores
compararValores(a, b, c);


//------------------------------ 48 Ejercicio--------------------//

// Función para calcular el área del triángulo
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área del círculo
function areaCirculo(radio) {
    const PI = Math.PI; // Valor de PI
    return PI * radio * radio;
}

// Función principal
function calcularArea() {
    // Preguntar al usuario qué figura desea calcular
    const figura = prompt("¿Qué figura geométrica desea calcular? (Escriba T para Triángulo o C para Círculo):").toUpperCase();

    if (figura === "T") {
        // Calcular área del triángulo
        const base = parseFloat(prompt("Ingrese la base del triángulo:"));
        const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        const area = areaTriangulo(base, altura);
        console.log(`El área del triángulo es: ${area.toFixed(2)} unidades cuadradas.`);
    } else if (figura === "C") {
        // Calcular área del círculo
        const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        const area = areaCirculo(radio);
        console.log(`El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`);
    } else {
        console.log("Figura no válida. Por favor, escriba T o C.");
    }
}

// Llamar a la función principal
calcularArea();


//------------------------------ 49 Ejercicio--------------------//

// Función para calcular el área del rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}

// Función principal
function calcularAreaRectangulo() {
    // Solicitar la base y la altura al usuario
    const base = parseFloat(prompt("Ingrese la base del rectángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));

    // Verificar si ambos lados son positivos
    if (base > 0 && altura > 0) {
        const area = areaRectangulo(base, altura);
        console.log(`El área del rectángulo es: ${area.toFixed(2)} unidades cuadradas.`);
    } else {
        console.log("Error: La base y la altura deben ser números positivos.");
    }
}

// Llamar a la función principal
calcularAreaRectangulo();

//------------------------------ 50 Ejercicio--------------------//

// Variables de temperatura y presión
let temperatura = 105; // Ejemplo de temperatura
let presion = 250; // Ejemplo de presión

// Sentencia if-else
if (presion > 200 || temperatura > 100) {
    console.log("Alarma");
} else {
    console.log("Todo en orden");
}
