//------------------------------ 59 Ejercicio--------------------//
// En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.


function esAptoParaBasquetbol(edad, estatura, peso) {
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        return true;
    } else {
        return false;
    }
}


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


seleccionarJugadores();