//------------------------------ 13 Ejercicio--------------------//
// Escribir un programa que lea 4 números y calcule la media

// const numeros = {
//     num1: 10,
//     num2: 15,
//     num3: 20,
//     num4: 25
//     };
      
//     const { num1, num2, num3, num4 } = numeros;
      
//     const suma = num1 + num2 + num3 + num4;
//     const media = suma / 4;
      
//     console.log(`Los numeros son: ${num1}, ${num2}, ${num3}, ${num4}`);
//     console.log(`La media es: ${media}`);


    // function Mediaa(mensaje) {
    //     let valor;
    //     do {
    //       valor = prompt(mensaje);
          
    //     } while (isNaN(valor) || valor.trim() === ""); 
    //     return parseFloat(valor); 
    //   }
      
    //   const num1 = Mediaa("Escribe el primer número (solo números ✍️):");
    //   const num2 = Mediaa("Escribe el segundo número (solo números ✍️):");
    //   const num3 = Mediaa("Escribe el tercer número (solo números ✍️):");
    //   const num4 = Mediaa("Escribe el cuarto número (solo números ✍️):");
      
    //   const suma = num1 + num2 + num3 + num4;
    //   const media = suma / 4;
      
    //   console.log(`Los números son: ${num1}, ${num2}, ${num3}, ${num4}`);
    //   console.log(`La media es: ${media}`);


      function pedirNumero(mensaje) {
        
        let valor;
        do {
          valor = prompt(mensaje);
          if (valor === "0") {
            return 0; 
          }
        } while (isNaN(valor) || valor.trim() === "");
        return parseFloat(valor); 
      }
      
      let numeros = [];
      let numero;
      let suma = 0;
      
      do {
        numero = pedirNumero("Escribe un numero ✍️ (0 para terminar):");
        if (numero !== 0) {
          numeros.push(numero); 
          suma += numero;
        }
      } while (numero !== 0);
      
      if (numeros.length > 0) {
        const media = suma / numeros.length;
      
        console.log(`Los números son: ${numeros.join(', ')}`);
        console.log(`La media es: ${media}`);
      } else {
        console.log("No ingresaste ningun numero.");
      }
      
      