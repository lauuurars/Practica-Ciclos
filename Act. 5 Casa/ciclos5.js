//Desarrolo Actividad 5

const adivinaNumero = Math.floor(Math.random() * 50) + 1; //generamos un número aleatorio entre 1 y 50

let intento; //variable para guardar info sobre el intento del usuario

do {
    intento = parseInt(prompt("Adivina el número entre 1 y 50:"));

    if (intento > adivinaNumero) {
        console.log("Demasiado alto, intenta de nuevo.");
    } else if (intento < adivinaNumero) {
        console.log("Demasiado bajo, intenta de nuevo.");
    } else {
        console.log("¡Felicidades, adivinaste el número!");
    }

} while (intento !== adivinaNumero);