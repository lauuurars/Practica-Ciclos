//Desarrollo Actividad 7

let frutas = ["fresa", "sandia", "pera", "mango", "piña"] //creamos array 

console.log("Lista de frutas: " + frutas); //imprimimos en consola el mensaje "Lista de frutas"   
console.log("largo: ", frutas.length); //imprimimos en consola el largo del array frutas

for (let i = 0; i < frutas.length; i++) { 
    console.log((i + 1) + ". " + frutas[i]); 
}

//let i = 0; permite iniciar desde la primera fruta

//i < frutas.length; permite que el ciclo se ejecute mientras i sea menor que la longitud del array frutas

//i++ permite incrementar el valor de i en 1 cada vez que se ejecute el ciclo

//console.log((i + 1) + ". " + frutas[i]); permite mostrar el número de la fruta y su nombre en la consola.