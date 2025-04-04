//Desarrollo Actividad 3

let frase = prompt("Ingresa una frase: ");

let contador = 0; //contador de las vocales

let i = 0; //recorre la frase letra por letra

while (i < frase.length) {
    let letra = frase[i]; //se obtiene la letra en la posición actual
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        contador++; //se suma 1 al contador si la letra es una vocal
    }
    i++; //se pasa a la siguiente letra
}

console.log("La frase tiene un total de: " + contador + " vocales.");