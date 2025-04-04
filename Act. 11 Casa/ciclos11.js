//Desarrollo Actividad 11

const numeros = [7, 13, 15, 77, 80, 2] //creamos nuestro array de numeros

let suma = 0; //variable suma para almacenar la suma de los números

console.log("Los números son: " + numeros); //imprimimos los números iniciales

for (const numero of numeros) {
    suma += numero;
}

//En cada vuelta, numero toma el valor de un elemento del array.

console.log("La suma de todos los números es: " + suma); 