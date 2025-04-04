
//Desarrollo Actividad 5

let numeroSecreto = Math.floor(Math.random() * 50) + 1; //Generar un número aleatorio entre 1 y 50

let intento = parseInt(prompt("Adivina el número entre 1 y 50:")); //solicitamos un número al usuario


do  {
    if (intento > numeroSecreto) {
        intento = parseInt(prompt("El número es menor. Inténtalo de nuevo:"));
    } else {
        intento = parseInt(prompt("El número es mayor. Inténtalo de nuevo:"));
    }
} while (intento !== numeroSecreto)

alert("¡Felicidades! Adivinaste el número " + numeroSecreto); //imprimimos resultado de operación