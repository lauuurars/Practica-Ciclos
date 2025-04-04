//Desarrollo Actividad 1

let numeroSecreto = Math.floor(Math.random() * 10) + 1; //Generar un número aleatorio entre 1 y 10

let intento = parseInt(prompt("Adivina el número entre 1 y 10:")); //solicitamos un número al usuario


while (intento !== numeroSecreto) {
    if (intento > numeroSecreto) {
        intento = parseInt(prompt("El número es menor. Inténtalo de nuevo:"));
    } else {
        intento = parseInt(prompt("El número es mayor. Inténtalo de nuevo:"));
    }
}

console.log("¡Felicidades! Adivinaste el número " + numeroSecreto); //imprimimos resultado de operación
