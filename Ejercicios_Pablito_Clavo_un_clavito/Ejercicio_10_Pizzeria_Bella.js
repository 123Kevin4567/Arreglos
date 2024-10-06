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








let ingredientesVegetarianos = ["Pimiento", "Tofu"];
let ingredientesNoVegetarianos = ["Pepperoni", "Jamón", "Salmón"];


let respuesta = prompt("¿Quieres una pizza vegetariana? (si/no):").toLowerCase();
let esVegetariana = respuesta === "si";


let ingredientes;
if (esVegetariana) {
    ingredientes = ingredientesVegetarianos;
    console.log("Has elegido una pizza vegetariana.");
} else {
    ingredientes = ingredientesNoVegetarianos;
    console.log("Has elegido una pizza no vegetariana.");
}


console.log("\nIngredientes disponibles:");
for (let i = 0; i < ingredientes.length; i++) {
    console.log(`${i + 1}. ${ingredientes[i]}`);
}


let eleccion = parseInt(prompt("Elige un ingrediente (introduce el número correspondiente):"));


if (eleccion >= 1 && eleccion <= ingredientes.length) {
    let ingredienteElegido = ingredientes[eleccion - 1];
    

    console.log("\nResumen de tu pizza:");
    console.log("Ingredientes base: Mozzarella, Tomate");
    console.log(`Ingrediente adicional: ${ingredienteElegido}`);
    console.log(`Tipo de pizza: ${esVegetariana ? "Vegetariana" : "No vegetariana"}`);
} else {
    console.log("Elección no válida. No se ha añadido ningún ingrediente adicional.");
}




