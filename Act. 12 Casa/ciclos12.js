//Desarrollo Actividad 12

const numerosCubo = [17, 8, 6, 12, 49, 55]; // Array de números 

console.log("Los números son: " + numerosCubo); //imprimimos nuestro array normal

for (const numero of numerosCubo) {
    const cubo = numero ** 3; //calculamos el cubo de cada número
    console.log("El cubo de " + numero + " es: " + cubo); //imprimimos el resultado
}
