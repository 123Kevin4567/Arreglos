






















/


//----------------------------- 10 Ejercicio ------------------//
// La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están

// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.




const ingredientesVegetarianos = ["Pimiento", "Tofu"];

const ingredientesNoVegetarianos = ["Pepperoni", "Jamón", "Salmón"];

const esVegetariana = prompt("¿Quieres una pizza vegetariana? (si/no):").toLowerCase() === "si";

const ingredientes = esVegetariana ? ingredientesVegetarianos : ingredientesNoVegetarianos;

console.log("Ingredientes disponibles:");

ingredientes.forEach((ingrediente, index) => console.log(`${index + 1}. ${ingrediente}`));

const eleccion = parseInt(prompt("Elige un ingrediente (introduce el número correspondiente):"));

if (eleccion >= 1 && eleccion <= ingredientes.length) {

    const ingredienteElegido = ingredientes[eleccion - 1];
    const tipoPizza = esVegetariana ? "vegetariana" : "no vegetariana";

    console.log(`Has elegido una pizza ${tipoPizza} con los siguientes ingredientes: Mozzarella, Tomate, ${ingredienteElegido}.`);
}

else {
    console.log("Elección no válida. No se ha añadido ningún ingrediente.");
}


//------------------------------ 11 Ejercicio--------------------//
// Escribir un programa que sume, resta, multiplique y divida dos números


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
// Escribir un programa que calcule el área de un rectángulo:

  const rectangulo = {
    base: 5,
    altura: 3
  };
  
  const { base, altura } = rectangulo;
  
  const area = base * altura;
  
  console.log(`El area del rectangulo es: ${area}`);

    //------------------------------ 13 Ejercicio--------------------//
    // Escribir un programa que lea 4 números y calcule la media

    const numeros = {
        num1: 10,
        num2: 15,
        num3: 20,
        num4: 25
      };
      
      const { num1, num2, num3, num4 } = numeros;
      
      const suma = num1 + num2 + num3 + num4;
      const media = suma / 4;
      
      console.log(`Los numeros son: ${num1}, ${num2}, ${num3}, ${num4}`);
      console.log(`La media es: ${media}`);

//------------------------------ 14 Ejercicio--------------------//
// Escribir un programa que calcule el área de un triángulo

const triangulo = {
    base: 6,
    altura: 4
  };
  
  const { base, altura } = triangulo;
  
  const area = (base * altura) / 2;
  
  console.log(`La base del triangulo es: ${base}`);
  console.log(`La altura del triangulo es: ${altura}`);
  console.log(`El área del triangulo es: ${area}`);

  //------------------------------ 15 Ejercicio--------------------//
// Escribir un programa que calcule la longitud y el área de una circunferencia

  const circulo = {
    radio: 5
  };
  
  const { radio } = circulo;
  
  const PI = Math.PI;
  
  const longitud = 2 * PI * radio;
  const area = PI * radio ** 2;
  
  console.log(`El radio de la circunferencia es: ${radio}`);
  console.log(`La longitud de la circunferencia es: ${longitud.toFixed(2)}`);
  console.log(`El area del círculo es: ${area.toFixed(2)}`);


 //------------------------------ 16 Ejercicio--------------------//
// Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5
// minutos, exprese el resultado en metros/segundo.


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
// Escribir un programa que calcule el volumen de una esfera

 const esfera = {
    radio: 5 
  };
  
  const { radio } = esfera;
  
  const PI = Math.PI;
  

  const volumen = (4 / 3) * PI * Math.pow(radio, 3);
  
  console.log(`El radio de la esfera es: ${radio} unidades`);
  console.log(`El volumen de la esfera es: ${volumen.toFixed(2)} unidades cúbicas`);


 //------------------------------ 18 Ejercicio--------------------//
// Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

function evaluarExpresion(a, b, c) {
    return (a + 7 * c) / (b + 2 - a) + 2 * b;
}


function main() {
  
    const a = parseFloat(prompt("Introduce el valor de a:"));
    const b = parseFloat(prompt("Introduce el valor de b:"));
    const c = parseFloat(prompt("Introduce el valor de c:"));


    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        console.log("Ingresa numeros validos.");
        return;
    }

 
    let resultado;


    if (b + 2 - a === 0) {
        console.log("Error: No puedes dividir por cero.");
        return;
    } else {
        resultado = evaluarExpresion(a, b, c);
    }


    console.log(`El resultado de la expresion es: ${resultado}`);
}


main();

//------------------------------ 19 Ejercicio--------------------//
// Escribir un programa que calcule el área y el volumen de un cilindro


function calcularCilindro(radio, altura) {
    const pi = Math.PI; 
    const area = 2 * pi * radio * (radio + altura); 
    const volumen = pi * Math.pow(radio, 2) * altura; 

    return { area, volumen };
}


function main() {

    const radio = parseFloat(prompt("Escribe el radio del cilindro:"));

    const altura = parseFloat(prompt("Escribe la altura del cilindro:"));


    if (isNaN(radio) || isNaN(altura) || radio <= 0 || altura <= 0) {


        console.log("Escribe ingresa valores validos para el radio y la altura (números positivos).");
        return;
    }


    const resultados = calcularCilindro(radio, altura);


    console.log(`Area del cilindro: ${resultados.area.toFixed(2)} unidades cuadradas`);
    console.log(`Volumen del cilindro: ${resultados.volumen.toFixed(2)} unidades cúbicas`);
}

main();

//------------------------------ 20 Ejercicio--------------------//
// Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo
// grado: a * x2 + b + x + c, siendo X un valor constante

function calcularRaices(a, b, c) {
    const discriminante = b ** 2 - 4 * a * c;
    
    if (discriminante > 0) {

        const raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        return { tipo: "dos", raices: [raiz1, raiz2] };
    } 
    else if (discriminante === 0) {
        const raiz = -b / (2 * a);
        return { tipo: "una", raices: [raiz] };
    } else {
        return { tipo: "ninguna", raices: [] };
    }
}

const a = parseFloat(prompt("Escribe el coeficiente a:"));
const b = parseFloat(prompt("Escribe el coeficiente b:"));
const c = parseFloat(prompt("Escribe el coeficiente c:"));

if (a === 0) {
    console.log("El coeficiente 'a' no puede ser cero en una ecuación cuadrática.");
} else {
    const resultado = calcularRaices(a, b, c);
    
    switch(resultado.tipo) {
        case "dos":
            console.log(`Las raíces reales son: ${resultado.raices[0].toFixed(2)} y ${resultado.raices[1].toFixed(2)}`);
            break;
        case "una":
            console.log(`La raíz real doble es: ${resultado.raices[0].toFixed(2)}`);
            break;
        default:
            console.log("No hay raíces reales.");
    }
}

//------------------------------ 21 Ejercicio--------------------//
// Escribir un programa que calcule el volumen de un elipsoide


function calcularVolumenElipsoide(a, b, c) {
    const pi = Math.PI; 
    const volumen = (4/3) * pi * a * b * c; 
    return volumen;
}

function main() {
    
    const a = parseFloat(prompt("Escribe el semieje a del elipsoide:"));
    const b = parseFloat(prompt("Escribe el semieje b del elipsoide:"));
    const c = parseFloat(prompt("Escribe el semieje c del elipsoide:"));

    
    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Escribe valores válidos y positivos para los semiejes.");
        return;
    }


    const volumen = calcularVolumenElipsoide(a, b, c);


    console.log(`El volumen del elipsoide es: ${volumen.toFixed(2)} unidades cúbicas`);
}


main();

//------------------------------ 22 Ejercicio--------------------//
// Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada
// minuto cuesta $355 pesos y un IVA 20%.

const COSTO_POR_MINUTO = 355;
const IVA = 0.20;


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


function mostrarResultado(resultado) {
    console.log(`Duración de la llamada: ${resultado.duracion} minutos`);
    console.log(`Costo base: $${resultado.costoBase} pesos`);
    console.log(`IVA (20%): $${resultado.impuesto} pesos`);
    console.log(`Costo total: $${resultado.total} pesos`);
}


const duracionLlamada = 10;
const resultado = calcularCostoLlamada(duracionLlamada);
mostrarResultado(resultado);









//------------------------------ 27 Ejercicio--------------------//
// Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha
// calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final



const PESO_PARCIALES = 0.55;
const PESO_EXAMEN = 0.30;
const PESO_TRABAJO = 0.15;

let parcial1 = parseFloat(prompt("Nota del primer parcial:"));
let parcial2 = parseFloat(prompt("Nota del segundo parcial:"));
let parcial3 = parseFloat(prompt("Nota del tercer parcial:"));
let examenFinal = parseFloat(prompt("Nota del examen final:"));
let trabajoFinal = parseFloat(prompt("Nota del trabajo final:"));


let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;


let notaFinal = (promedioParciales * PESO_PARCIALES) + 
                (examenFinal * PESO_EXAMEN) + 
                (trabajoFinal * PESO_TRABAJO);

console.log("Resultados:");
console.log("Promedio de parciales:", promedioParciales.toFixed(2));
console.log("Examen final:", examenFinal.toFixed(2));
console.log("Trabajo final:", trabajoFinal.toFixed(2));
console.log("Nota final:", notaFinal.toFixed(2));  


if (notaFinal >= 6) {
    console.log("¡Felicidades! Has aprobado.");
} else {
    console.log("Lo siento, no has aprobado. Sigue esforzándote.");
}








//------------------------------ 30 Ejercicio--------------------//
// Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12
// caracteres, y al menos una mayúscula, una minúscula, y un dígito

function comprobarFortalezaContrasena(contrasena) {
    
    if (contrasena.length < 8 || contrasena.length > 12) {
        return 'La contraseña debe tener entre 8 y 12 caracteres.';
    }

    
    const tieneMayuscula = /[A-Z]/;
    const tieneMinuscula = /[a-z]/;
    const tieneDigito = /\d/;

    
    if (!tieneMayuscula.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra mayúscula.';
    }

   a
    if (!tieneMinuscula.test(contrasena)) {
        return 'La contraseña debe contener al menos una letra minúscula.';
    }

    
    if (!tieneDigito.test(contrasena)) {
        return 'La contraseña debe contener al menos un dígito.';
    }

   
    return 'La contraseña es fuerte.';
}


const contrasena1 = 'Abc12345';
const contrasena2 = 'abcdef';
const contrasena3 = 'ABC12345';
const contrasena4 = 'Abcdef12';

console.log(comprobarFortalezaContrasena(contrasena1));
console.log(comprobarFortalezaContrasena(contrasena2)); 
console.log(comprobarFortalezaContrasena(contrasena3)); 
console.log(comprobarFortalezaContrasena(contrasena4)); 










//------------------------------ 34 Ejercicio--------------------//
// Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo
// en segundos.


const PI = 3.1416;


function calcularVolumenDeposito(radio, altura) {
    
    const volumen = PI * Math.pow(radio, 2) * altura * 1000; 
    return volumen;
}


function calcularTiempoLlenado(volumen, caudal) {
 
    const tiempoEnSegundos = volumen / caudal;
  
    const tiempoEnMinutos = tiempoEnSegundos / 60;
    return tiempoEnMinutos;
}


const radioDeposito = 2;  
const alturaDeposito = 5;
const caudal = 10;       


const volumenDeposito = calcularVolumenDeposito(radioDeposito, alturaDeposito);


const tiempoLlenado = calcularTiempoLlenado(volumenDeposito, caudal);


console.log(`Volumen del depósito: ${volumenDeposito.toFixed(2)} litros`);
console.log(`Tiempo estimado para llenar el depósito: ${tiempoLlenado.toFixed(2)} minutos`);


//------------------------------ 35 Ejercicio--------------------//
// Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000.
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía?


const precioLlaveHexagonal = 11500;
const precioBomba = 1168000;        
const precioCajaPernos = 87000;     


const cantidadLlavesHexagonales = 5; 
const cantidadBombas = 1;             
const cantidadCajasPernos = 3;       


const totalLlavesHexagonales = precioLlaveHexagonal * cantidadLlavesHexagonales;
const totalBombas = precioBomba * cantidadBombas;
const totalCajasPernos = precioCajaPernos * cantidadCajasPernos;


const totalCompra = totalLlavesHexagonales + totalBombas + totalCajasPernos;


console.log(`Total por los juegos de llaves hexagonales: $${totalLlavesHexagonales}`);
console.log(`Total por la bomba: $${totalBombas}`);
console.log(`Total por las cajas de pernos: $${totalCajasPernos}`);
console.log(`\nTotal de la compra: $${totalCompra}`);

//------------------------------ 36 Ejercicio--------------------//
// En el programa de cocina de “Doña Anita” han dado la receta para la preparación de
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de chocolate. ¿La
// cantidad de gramos de harina para hacer el bizcocho es?


const cacaoPorCada100GrHarina = 10; 
const harinaOriginal = 100;  


const cacaoDeseado = 20; 


const harinaNecesaria = (cacaoDeseado * harinaOriginal) / cacaoPorCada100GrHarina;


console.log(`La cantidad de harina necesaria para ${cacaoDeseado} gramos de cacao es: ${harinaNecesaria} gramos.`);




//------------------------------ 37 Ejercicio--------------------//
// Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos
// Kg transporta?


const numeroCajas = 25;
const pesoPorCaja = 748; 


const pesoTotal = numeroCajas * pesoPorCaja;


console.log(`El camión transporta un total de ${pesoTotal} Kg.`);


//------------------------------ 38 Ejercicio--------------------//
// Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año.
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué
// parte le corresponde a Lorena?



const parteMartin = 2 / 3; 
const parteJairo = 1 / 4;   


const denominadorComun = 12; 
const parteMartin12 = (parteMartin * denominadorComun) / 1; 
const parteJairo12 = (parteJairo * denominadorComun) / 1;


const parteTotalEstudiantes = (parteMartin12 + parteJairo12) / denominadorComun;

const parteLorena = 1 - parteTotalEstudiantes; 


console.log(`A Lorena le corresponde ${parteLorena.toFixed(2)} del total de tapas.`);


//------------------------------ 39 Ejercicio--------------------//
// Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le
// permita ir generando presupuestos para cada cliente.



const costoPorMetroCuadrado = 20;


function calcularPresupuesto(metrosCuadrados) {
    const presupuestoTotal = metrosCuadrados * costoPorMetroCuadrado;
    return presupuestoTotal;
}


const metrosCuadradosA pintar = 50;


const presupuesto = calcularPresupuesto(metrosCuadradosAPintar);

console.log(`El presupuesto total para pintar ${metrosCuadradosAPintar} m2 es: $${presupuesto}`);


//------------------------------ 40 Ejercicio--------------------//
// Una empresa que contrata personal requiere determinar la edad de las personas que
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que
// nacieron. Realice el código que representen el algoritmo para solucionar este problema


const añoActual = new Date().getFullYear();


function calcularEdad(añoNacimiento) {
    const edad = añoActual - añoNacimiento;
    return edad;
}


const añoNacimiento = 1990; 


const edad = calcularEdad(añoNacimiento);


console.log(`La edad de la persona que nació en ${añoNacimiento} es: ${edad} años.`);


//------------------------------ 41 Ejercicio--------------------//
// Ingrese una frase que lo identifique como programador de Software y luego mostrar esta
// frase invertida.



function invertirFrase(frase) {
    return frase.split('').reverse().join('');
}


const frase = "Soy un programador de software"; 


const fraseInvertida = invertirFrase(frase);


console.log(`La frase invertida es: "${fraseInvertida}"`);


//------------------------------ 42 Ejercicio--------------------//
// Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el
// monto total de la venta, según la cantidad de artículos solicitados durante el día.



const precioLibro = 10000;    
const precioCuaderno = 7550;  
const precioLapicero = 5550;   


function calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    const totalLibros = cantidadLibros * precioLibro;
    const totalCuadernos = cantidadCuadernos * precioCuaderno;
    const totalLapiceros = cantidadLapiceros * precioLapicero;
    
    const montoTotal = totalLibros + totalCuadernos + totalLapiceros;
    return montoTotal;
}


const cantidadLibros = 3;    
const cantidadCuadernos = 5;  
const cantidadLapiceros = 10;  


const montoTotalVenta = calcularTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros);


console.log(`El monto total de la venta es: $${montoTotalVenta}`);

//------------------------------ 43 Ejercicio--------------------//
// Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir
// la presencia de comillas y caracteres escapados.

//BAse:
const regex = /"((?:[^"\\]|\\.)*?)"/g;


const texto = `"Este es un ejemplo de "cadena con "comillas" escapadas\" y otros caracteres \\n."`;
const regex = /"((?:[^"\\]|\\.)*?)"/g;

let coincidencias;
while ((coincidencias = regex.exec(texto)) !== null) {
    console.log(`Cadena encontrada: ${coincidencias[0]}`);
}

//------------------------------ 44 Ejercicio--------------------//
// Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como
// constante el valor de una moneda

const valorDolar = 4000; 
const valorEuro = 4500;  


function convertirMoneda(pesos) {
    const dolares = pesos / valorDolar; 
    const euros = pesos / valorEuro; 
    return { dolares, euros };
}


const pesos = 20000; 


const { dolares, euros } = convertirMoneda(pesos);


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


let temperatura = 105; 
let presion = 250;


if (presion > 200 || temperatura > 100) {
    console.log("Alarma");
} else {
    console.log("Todo en orden");
}


//------------------------------ 51 Ejercicio--------------------//

class Restaurante {
    constructor(nombre) {
        this.nombre = nombre;
        this.pagos = [];
    }

    agregarPago(monto) {
        let descuento = 0;
        if (monto > 130000) {
            descuento = monto * 0.15;
        }
        const pagoFinal = monto - descuento;
        this.pagos.push(pagoFinal);
        return pagoFinal;
    }

    calcularTotalPagos() {
        return this.pagos.reduce((total, pago) => total + pago, 0);
    }
}

function main() {
    const miRestaurante = new Restaurante("La Delicia");
    const montos = [100000, 150000, 80000, 200000, 120000];

    console.log(`Bienvenido a ${miRestaurante.nombre}`);
    console.log("Procesando pagos...");

    for (let i = 0; i < montos.length; i++) {
        const monto = montos[i];
        const pagoFinal = miRestaurante.agregarPago(monto);
        console.log(`Pago ${i + 1}: $${monto} - Pago final: $${pagoFinal}`);
    }

    const totalPagos = miRestaurante.calcularTotalPagos();
    console.log(`Total de pagos recibidos: $${totalPagos}`);
}

main();


//------------------------------ 52 Ejercicio--------------------//

class Empleado {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    calcularPago(horasTrabajadas) {
        const tarifaPorHora = this.tipo === 'planta' ? 20000 : 10000;
        return horasTrabajadas * tarifaPorHora;
    }
}

class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.empleados = [];
    }

    contratarEmpleado(empleado) {
        this.empleados.push(empleado);
    }

    calcularNomina(horasTrabajadas) {
        let nominaTotal = 0;
        for (let empleado of this.empleados) {
            const pago = empleado.calcularPago(horasTrabajadas);
            nominaTotal += pago;
            console.log(`${empleado.nombre} (${empleado.tipo}): $${pago}`);
        }
        return nominaTotal;
    }
}

function main() {
    const miEmpresa = new Empresa("TechnoSoft");

    miEmpresa.contratarEmpleado(new Empleado("Juan", "planta"));
    miEmpresa.contratarEmpleado(new Empleado("María", "administrativo"));
    miEmpresa.contratarEmpleado(new Empleado("Carlos", "planta"));

    console.log(`Cálculo de nómina para ${miEmpresa.nombre}`);
    
    const horasTrabajadas = 40; // Asumimos una semana laboral de 40 horas
    console.log(`Horas trabajadas por empleado: ${horasTrabajadas}`);
    
    const nominaTotal = miEmpresa.calcularNomina(horasTrabajadas);
    console.log(`Nómina total: $${nominaTotal}`);
}

main();

//------------------------------ 53 Ejercicio--------------------//

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Carrito {
    constructor() {
        this.productos = [];
        this.iva = 0.19; // 19% de IVA
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularSubtotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    calcularIVA() {
        return this.calcularSubtotal() * this.iva;
    }

    calcularTotal() {
        return this.calcularSubtotal() + this.calcularIVA();
    }

    mostrarResumen() {
        console.log("Resumen de la compra:");
        this.productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.nombre}: $${producto.precio}`);
        });
        console.log(`Subtotal: $${this.calcularSubtotal().toFixed(2)}`);
        console.log(`IVA (${this.iva * 100}%): $${this.calcularIVA().toFixed(2)}`);
        console.log(`Total: $${this.calcularTotal().toFixed(2)}`);
    }
}

function main() {
    const carrito = new Carrito();

    // Agregamos 5 productos al carrito
    carrito.agregarProducto(new Producto("Camiseta", 25000));
    carrito.agregarProducto(new Producto("Pantalón", 50000));
    carrito.agregarProducto(new Producto("Zapatos", 80000));
    carrito.agregarProducto(new Producto("Gorra", 15000));
    carrito.agregarProducto(new Producto("Calcetines", 10000));

    // Mostramos el resumen de la compra
    carrito.mostrarResumen();
}

main();

//------------------------------ 54 Ejercicio--------------------//

class Calculadora {
    restaCondicional(num1, num2) {
        if (num1 > num2) {
            return num1 - num2;
        } else {
            return "La operación no es posible realizarla";
        }
    }
}

class InterfazUsuario {
    constructor() {
        this.calculadora = new Calculadora();
    }

    solicitarNumeros() {
        // En un entorno de navegador, usaríamos prompt().
        // Para este ejemplo, simularemos la entrada del usuario.
        console.log("Por favor, ingrese dos números:");
        return [10, 5]; // Simulando entrada del usuario
    }

    mostrarResultado(resultado) {
        console.log("Resultado:", resultado);
    }

    ejecutar() {
        const [num1, num2] = this.solicitarNumeros();
        console.log(`Números ingresados: ${num1} y ${num2}`);
        
        const resultado = this.calculadora.restaCondicional(num1, num2);
        this.mostrarResultado(resultado);
    }
}

// Función principal
function main() {
    const interfaz = new InterfazUsuario();
    interfaz.ejecutar();
}

// Ejecutar el programa
main();

//------------------------------ 55 Ejercicio--------------------//

class Cliente {
    constructor(nombre, tipoMembresia) {
        this.nombre = nombre;
        this.tipoMembresia = tipoMembresia.toUpperCase();
    }
}

class TiendaHelados {
    constructor() {
        this.descuentos = {
            'A': 0.10,
            'B': 0.15,
            'C': 0.20
        };
    }

    calcularDescuento(cliente, precioCompra) {
        if (this.descuentos.hasOwnProperty(cliente.tipoMembresia)) {
            const porcentajeDescuento = this.descuentos[cliente.tipoMembresia];
            const descuento = precioCompra * porcentajeDescuento;
            const precioFinal = precioCompra - descuento;
            
            return {
                descuento: descuento,
                precioFinal: precioFinal
            };
        } else {
            return {
                descuento: 0,
                precioFinal: precioCompra
            };
        }
    }

    procesarCompra(cliente, precioCompra) {
        console.log(`Procesando compra para ${cliente.nombre} (Membresía tipo ${cliente.tipoMembresia})`);
        console.log(`Precio original: $${precioCompra.toFixed(2)}`);

        const resultado = this.calcularDescuento(cliente, precioCompra);

        console.log(`Descuento aplicado: $${resultado.descuento.toFixed(2)}`);
        console.log(`Precio final: $${resultado.precioFinal.toFixed(2)}`);
        console.log('-------------------');
    }
}

function main() {
    const tienda = new TiendaHelados();

    const clientes = [
        new Cliente("Ana", "A"),
        new Cliente("Bruno", "B"),
        new Cliente("Carlos", "C"),
        new Cliente("Diana", "D")  // Tipo de membresía no existente
    ];

    const precioHelado = 10000;  // Precio base del helado

    for (let cliente of clientes) {
        tienda.procesarCompra(cliente, precioHelado);
    }
}

main();

//------------------------------ 56 Ejercicio--------------------//

// Clase CuentaBancaria
class CuentaBancaria {
    constructor(nombreCliente, saldoInicial) {
        this.nombreCliente = nombreCliente;
        this.saldo = saldoInicial;
    }

    // Método para calcular el interés basado en el saldo
    calcularInteres() {
        let tasaInteres = this.saldo < 100000 ? 0.03 : 0.04;
        let interes = this.saldo * tasaInteres;
        return interes;
    }

    // Método para aplicar el interés y mostrar el saldo final
    aplicarInteres() {
        let interes = this.calcularInteres();
        this.saldo += interes;
        console.log(`Cliente: ${this.nombreCliente}`);
        console.log(`Saldo inicial: $${this.saldo - interes}`);
        console.log(`Interés pagado: $${interes}`);
        console.log(`Saldo final: $${this.saldo}`);
    }
}

// Función principal
function ejecutarSimulacion() {
    // Crear una instancia de la cuenta bancaria con un saldo inicial
    const cuenta1 = new CuentaBancaria('Kevin David', 150000);
    cuenta1.aplicarInteres(); // Aplica el interés y muestra el saldo final
}

// Ejecutar la simulación
ejecutarSimulacion();


//------------------------------ 57 Ejercicio--------------------//

function asignarCalificacion(puntaje) {
    if (puntaje >= 9.1 && puntaje <= 10) {
        return 'A (Excelente)';
    } else if (puntaje >= 8.1 && puntaje <= 9) {
        return 'A (Muy bien)';
    } else if (puntaje >= 7.5 && puntaje <= 8) {
        return 'A (Bien)';
    } else {
        return 'NA (No Aprobado)';
    }
}

// Función principal para probar el programa
function ejecutarCalificacion() {
    const calificaciones = [9.5, 8.4, 7.8, 6.9, 10]; // Ejemplos de puntajes
    calificaciones.forEach(puntaje => {
        console.log(`Puntaje: ${puntaje} - Calificación: ${asignarCalificacion(puntaje)}`);
    });
}

// Ejecutar la simulación
ejecutarCalificacion();




//------------------------------ 58 Ejercicio--------------------//

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

// Probar el programa con ejemplo
console.log(obtenerSignoZodiacal('marzo', 15)); // Piscis
console.log(obtenerSignoZodiacal('julio', 25)); // Leo
console.log(obtenerSignoZodiacal('noviembre', 10)); // Escorpio


//------------------------------ 59 Ejercicio--------------------//

// Función para verificar si el postulante cumple los requisitos
function esAptoParaBasquetbol(edad, estatura, peso) {
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        return true;
    } else {
        return false;
    }
}

// Función para probar varios postulantes
function seleccionarJugadores() {
    const postulantes = [
        { nombre: 'Kevin', edad: 18, estatura: 180, peso: 78 },
        { nombre: 'David', edad: 20, estatura: 178, peso: 79 },
        { nombre: 'Luis', edad: 19, estatura: 176, peso: 77 },
        { nombre: 'Pedro', edad: 17, estatura: 181, peso: 80 }
    ];

    postulantes.forEach(postulante => {
        if (esAptoParaBasquetbol(postulante.edad, postulante.estatura, postulante.peso)) {
            console.log(`${postulante.nombre} es apto para el equipo de baloncesto.`);
        } else {
            console.log(`${postulante.nombre} no cumple con los requisitos.`);
        }
    });
}

// Ejecutar la selección de jugadores
seleccionarJugadores();


//------------------------------ 60 Ejercicio--------------------//

function calcularPago(cursos) {
    const costoPorCurso = cursos <= 6 ? 2000000 : 1200000;
    return cursos * costoPorCurso;
}

// Función para probar el cálculo
function ejecutarPago() {
    const cursos = parseInt(prompt('Ingrese la cantidad de cursos que lleva el alumno:'));

    if (cursos > 0) {
        console.log(`El total a pagar por ${cursos} curso(s) es: $${calcularPago(cursos)}`);
    } else {
        console.log('Ingrese un número válido de cursos.');
    }
}

// Ejecutar la simulación de pago
ejecutarPago();

//------------------------------ 61 Ejercicio--------------------//

function procesarNotas(notas) {
    let notaAlta = Math.max(...notas);
    let notaBaja = Math.min(...notas);
    let countMaxima = 0, countA = 0, countB = 0, countC = 0, countD = 0;

    // Clasificar las notas
    notas.forEach(nota => {
        if (nota === 100) {
            countMaxima++;
        } else if (nota >= 90) {
            countA++;
        } else if (nota >= 80) {
            countB++;
        } else if (nota >= 70) {
            countC++;
        } else if (nota >= 60) {
            countD++;
        }
    });

    // Mostrar resultados
    console.log(`Nota más alta: ${notaAlta}`);
    console.log(`Nota más baja: ${notaBaja}`);
    console.log(`Alumnos con la nota máxima (100): ${countMaxima}`);
    console.log(`Alumnos con calificación 'a' (90-99): ${countA}`);
    console.log(`Alumnos con calificación 'b' (80-89): ${countB}`);
    console.log(`Alumnos con calificación 'c' (70-79): ${countC}`);
    console.log(`Alumnos con calificación 'd' (60-69): ${countD}`);
}


function ejecutarPrograma() {
    let notas = [];
    let cantidad = parseInt(prompt("¿Cuántas notas vas a ingresar?"));
    
    for (let i = 0; i < cantidad; i++) {
        let nota = parseInt(prompt(`Ingresa la nota del alumno ${i + 1} (1-100):`));
        

        if (nota >= 1 && nota <= 100) {
            notas.push(nota);
        } else {
            console.log('Nota inválida, ingrese un número entre 1 y 100.');
            i--; 
        }
    }


    procesarNotas(notas);
}


ejecutarPrograma();


//------------------------------ 62 Ejercicio--------------------//

function mostrarPalabra() {
    const palabra = prompt('Ingrese una palabra:');

    for (let i = 0; i < 10; i++) {
        console.log(`${i + 1}: ${palabra}`);
    }
}


mostrarPalabra();


//------------------------------ 63 Ejercicio--------------------//

function mostrarAniosCumplidos() {
    const edad = parseInt(prompt('Ingrese su edad:'));


    if (edad > 0) {
        for (let i = 1; i <= edad; i++) {
            console.log(`Año ${i}`);
        }
    } else {
        console.log('Por favor, ingrese una edad válida.');
    }
}


mostrarAniosCumplidos();


//------------------------------ 64 Ejercicio--------------------//

function mostrarImpares() {
    const numero = parseInt(prompt('Ingrese un número entero positivo:'));


    if (numero > 0) {
        let impares = [];

        for (let i = 1; i <= numero; i += 2) {
            impares.push(i);
        }

        console.log(`Números impares desde el 1 hasta ${numero}: ${impares.join(', ')}`);
    } else {
        console.log('Por favor, escriba un número válido.');
    }
}


mostrarImpares();


//------------------------------ 65 Ejercicio--------------------//

function cuentaAtras() {
    const numero = parseInt(prompt('Ingrese un número entero positivo:'));


    if (numero > 0) {
        let cuenta = [];

        for (let i = numero; i >= 0; i--) {
            cuenta.push(i);
        }

        console.log(`Cuenta atrás desde ${numero} hasta 0: ${cuenta.join(', ')}`);
    } else {
        console.log('Por favor, ingrese un número válido.');
    }
}


cuentaAtras();


//------------------------------ 66 Ejercicio--------------------//

function calcularInversion() {
    const cantidadInvertir = parseFloat(prompt('Ingrese la cantidad a invertir:'));
    const interesAnual = parseFloat(prompt('Ingrese el interés anual (en %):'));
    const años = parseInt(prompt('Ingrese el número de años:'));


    if (cantidadInvertir > 0 && interesAnual > 0 && años > 0) {
        let capital = cantidadInvertir;

        console.log(`Capital obtenido cada año:`);
        
        for (let i = 1; i <= años; i++) {
            capital += capital * (interesAnual / 100);
            console.log(`Año ${i}: $${capital.toFixed(2)}`);
        }
    } else {
        console.log('Por favor, ingrese valores válidos.');
    }
}


calcularInversion();


//------------------------------ 67 Ejercicio--------------------//

function dibujarTriangulo() {
    const altura = parseInt(prompt('Ingrese un número entero para la altura del triángulo:'));


    if (altura > 0) {
        for (let i = 1; i <= altura; i++) {
            console.log('* '.repeat(i).trim());
        }
    } else {
        console.log('Por favor, ingrese un número entero positivo.');
    }
}


dibujarTriangulo();


//------------------------------ 68 Ejercicio--------------------//

function mostrarTablasMultiplicar() {
    for (let i = 1; i <= 10; i++) {
        console.log(`Tabla de multiplicar del ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log(''); 
    }
}


mostrarTablasMultiplicar();


//------------------------------ 69 Ejercicio--------------------//

function dibujarTrianguloRectangulo() {
    const altura = parseInt(prompt('Ingrese un número entero para la altura del triángulo:'));


    if (altura > 0) {
        for (let i = 1; i <= altura; i++) {
            let linea = '';
            for (let j = 1; j <= i; j++) {
                linea += '* '; 
            }
            console.log(linea.trim());
        }
    } else {
        console.log('Por favor, ingrese un número entero positivo.');
    }
}


dibujarTrianguloRectangulo();


//------------------------------ 70 Ejercicio--------------------//


function verificarContrasena() {
    const contrasenaCorrecta = 'contraseña';
    let contrasenaIngresada = '';


    while (contrasenaIngresada !== contrasenaCorrecta) {
        contrasenaIngresada = prompt('Por favor, introduzca la contraseña:');
        if (contrasenaIngresada === contrasenaCorrecta) {
            console.log('Contraseña correcta. Acceso concedido.');
        } else {
            console.log('Contraseña incorrecta. Inténtelo de nuevo.');
        }
    }
}


verificarContrasena();


//------------------------------ 71 Ejercicio--------------------//

function esNumeroPrimo() {
    const numero = parseInt(prompt('Ingrese un número entero:'));


    if (numero < 2) {
        console.log(`${numero} no es un número primo.`);
        return;
    }

    let esPrimo = true;


    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false; 
            break;
        }
    }

    if (esPrimo) {
        console.log(`${numero} es un número primo.`);
    } else {
        console.log(`${numero} no es un número primo.`);
    }
}


esNumeroPrimo();


//------------------------------ 72 Ejercicio--------------------//

function mostrarLetrasAlReves() {
    const palabra = prompt('Ingrese una palabra:');


    if (palabra) {

        for (let i = palabra.length - 1; i >= 0; i--) {
            console.log(palabra[i]);
        }
    } else {
        console.log('Por favor, ingrese una palabra válida.');
    }
}


mostrarLetrasAlReves();


//------------------------------ 73 Ejercicio--------------------//

function contarLetras() {
    const frase = prompt('Ingrese una frase:');
    const letra = prompt('Ingrese una letra:');


    if (letra.length !== 1) {
        console.log('Por favor, ingrese solo una letra.');
        return;
    }

    let contador = 0;


    const fraseMinuscula = frase.toLowerCase();
    const letraMinuscula = letra.toLowerCase();


    for (let i = 0; i < fraseMinuscula.length; i++) {
        if (fraseMinuscula[i] === letraMinuscula) {
            contador++;
        }
    }

    console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);
}


contarLetras();


//------------------------------ 74 Ejercicio--------------------//


function ecoDeUsuario() {
    let entrada;

    console.log('Escribe "salir" para terminar el programa.');


    do {
        entrada = prompt('Introduce algo:');
        
   
        if (entrada !== null && entrada.toLowerCase() !== 'salir') {
            console.log(entrada);
        }
    } while (entrada !== null && entrada.toLowerCase() !== 'salir');

    console.log('Programa terminado.');
}


ecoDeUsuario();




