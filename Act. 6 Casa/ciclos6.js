//Desarrollo Actividad 6

let numero;

let contadorPositivo = 0; //variable para contar los números positivos ingresados

do {
    numero = parseInt(prompt("Ingrese un número (negativo para salir: "));

    //si el número ingresado es mayor que 0, se suma 1 unidad al contador de postivos

    if (numero >= 0) {
        contadorPositivo++;
    }

} while (numero >= 0); //el ciclo se repite mientras el número ingresado sea mayor o igual a 0

console.log("La cantidad de números positivos ingresados es: " + contadorPositivo);