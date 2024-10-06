//------------------------------ 28 Ejercicio--------------------//
// Calcular el sueldo de un empleado dados como datos de entrada:
// a. Nombre.
// b. horas de trabajo.
// c. pago en hora.


class Empleado {
    constructor(nombre, horasTrabajadas, pagoPorHora) {
        this.nombre = nombre;                
        this.horasTrabajadas = horasTrabajadas; 
        this.pagoPorHora = pagoPorHora;     
    }


    calcularSueldo() {
      
        let horasExtras = 0;
        if (this.horasTrabajadas > 40) {
            horasExtras = this.horasTrabajadas - 40;
        }

        const sueldoBase = 40 * this.pagoPorHora;
        const pagoHorasExtras = horasExtras * this.pagoPorHora * 1.5;

       
        if (this.horasTrabajadas <= 40) {
            return this.horasTrabajadas * this.pagoPorHora;
        } else {
            return sueldoBase + pagoHorasExtras;
        }
    }

    
    mostrarInformacion() {
        console.log(`Empleado: ${this.nombre}`);
        console.log(`Horas trabajadas: ${this.horasTrabajadas}`);
        console.log(`Pago por hora: $${this.pagoPorHora}`);
        console.log(`Sueldo total: $${this.calcularSueldo()}`);
    }
}


const empleado1 = new Empleado("Juan", 45, 10);

empleado1.mostrarInformacion();