//------------------------------ 51 Ejercicio--------------------//
// Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let total = 0;

console.log("Hola! Vamos a calcular los pagos del día en el restaurante.");

function preguntarMonto() {
  readline.question("¿Cuál fue el monto de la cuenta? (Escribe 'fin' para terminar): ", respuesta => {
      if (respuesta.toLowerCase() === 'fin') {
          console.log(`El total recaudado hoy fue de $${total}. ¡Hasta luego!`);
          readline.close();
          return;
      }

      let monto = parseFloat(respuesta);
      if (isNaN(monto) || monto <= 0) {
          console.log("Mmm... eso no parece un monto válido. Vamos a intentarlo de nuevo.");
          preguntarMonto();
          return;
      }

      if (monto > 130000) {
          let descuento = monto * 0.15;
          let final = monto - descuento;
          console.log(`¡Buen trabajo! Como la cuenta supera los $130,000, aplicamos un 15% de descuento.`);
          console.log(`La cuenta final con descuento es de $${final}.`);
          total += final;
      } else {
          console.log(`Perfecto, $${monto}. Añadido al total.`);
          total += monto;
      }

      preguntarMonto();
  });
}

preguntarMonto();
