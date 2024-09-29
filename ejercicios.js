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



