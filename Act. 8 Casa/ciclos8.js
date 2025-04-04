//Desarrollo Actividad 8

let numero = parseInt(prompt("Ingresa un número positivo: "));

let factorial = 1; //iniciamos el factorial en 1 ya que al multiplicar por 0 el resultado es 0

for (let i = 1; i <= numero; i++) {
    factorial *= i;
}

//i es el contador que va desde 1 hasta el número ingresado
//en cada vuelta se multiplica el resultado actual por i

console.log("El factorial de " + numero + " es: " + factorial);