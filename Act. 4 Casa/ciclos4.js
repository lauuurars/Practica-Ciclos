//Desarrollo Actividad 4

//este ciclo se repetirá hasta que el usuario elija la opción 3 "Salir"

let opcion;

//se asigna un prompt a la variable opcion

do {
    opcion = parseInt(prompt(
        "Elige una opción:\n" +
        "1. Cantar\n" +
        "2. Bailar\n" +
        "3. Salir"
    ))

    if (opcion === 1) {
        console.log("Cantar es divertido!");
    } else if (opcion === 2) {
        console.log("Bailar es genial!");
    } else if (opcion !== 3){
        console.log("Opción no válida, elige una opción válida.");
    }

} while (opcion !== 3);

console.log("¡Nos vemos luego!");