//Desarrollo Actividad 2

let numeroPositivo = parseInt(prompt("Ingresa un número positivo:")); //se solicita un número positivo al usuario

//verificamos que el número sea positivo y no NaN

while (numeroPositivo <= 0 || isNaN(numeroPositivo)) {
    numeroPositivo = parseInt(prompt("Error. Ingresa un número válido y positivo:"));
}

let suma = 0; //iniciamos la variable suma en 0 

while(numeroPositivo > 0){
    let digito = numeroPositivo % 10; //obtenemos el último dígito del número y permite que se puedan sumar individualmente
    suma += digito; //sumamos el digito a la variable suma
    numeroPositivo = Math.floor(numeroPositivo / 10); // Eliminamos el último dígito
}

console.log("El resultado de la suma es: " + suma);

