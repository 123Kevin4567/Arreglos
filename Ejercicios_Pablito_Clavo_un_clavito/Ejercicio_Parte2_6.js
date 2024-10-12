

let nums =[10,25,99,1,75,3]

function ELmayor(arreglo){
    let mayor =arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if ( mayor < arreglo[i] ) {
            mayor = arreglo[i];
        }
    }
}

console.log(`EL numero mayor es ${mayor}`);

ELmayor(nums)