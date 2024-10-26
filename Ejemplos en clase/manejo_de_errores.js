try {
    console.log("Codigo a evaluar");
    codigo;
    console.log("Que pasara en este lugar");
}
catch (error){
    console.log("Mensajes o manejadores de error");
    console.log(error);
}
finally{
    console.log("Simepre se ejecuta");
}

try{
    // let numeros= "letras";
    let numeros=10;
    if(isNaN(numeros))
        throw new Error("Mensaje de que le podemos o mostraremos al ausuario");
    console.log(numeros*numeros);
}
catch (error){
    console.error(`se produjo el siguente error :${error}`);
    
}
