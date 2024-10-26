const numeros = [1,2,3,4,5]

let uno = numeros[0],
    dos =numeros[1],
    tres =numeros[2],
    cuatro =numeros[3],
    cinco =numeros[4],
    seis =numeros[5];

    console.log(uno,dos,tres,cuatro,cinco,seis);

    const [a,b,c,d,e] = numeros;
    


    const persona = {
        nombre: "Ana",
        edad: 25,
        ciudad: "Madrid"
      };
      
      const { nombre, edad, ciudad } = persona;
      
      console.log(nombre);  
      console.log(edad);    
      console.log(ciudad);  
      

      const persona = {
        nombre: "Ana",
        edad: 25,
        ciudad: "Madrid"
    };
    

    const { nombre, edad } = persona;
    

    console.log(nombre);  
    console.log(edad);    
    console.log(persona.ciudad);

    console.log(ciudad);

    let color = "verde"
    let marca = "Mazda"

    const carro ={
        color,
        marca
    }

    console.log(carro);
    
    
    