/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.

*/

const num1 = parseInt(prompt(`ingrese un numero`));
const div2 = parseInt(num1%2);
const div3 = parseInt(num1%3);
const div5 = parseInt(num1%5);
const div7 = parseInt(num1%7);

if (div2 == 0 && div3 == 0 && div5 == 0 && div7 == 7) {
    document.write(`el numero ${num1} es divisible por 2,3,5 y 7`)
} else if (div2 == 0 && div3 == 0 && div5 == 0) {
    document.write(`el numero ${num1} es divisible por 2,3 y 5`)
} else if (div2 == 0 && div3 == 0) {
    document.write(`el numero ${num1} es divisible por 2 y 3`)
}
else if (div2 == 0) {
    document.write(`el numero ${num1} es divisible por 2`)
} else if (div3 == 0) {
    document.write(`el numero ${num1} es divisible por 3`)
} else if (div5 == 0) {
    document.write(`el numero ${num1} es divisible por 5`)
} else if (div7 == 0) {
    document.write(`el numero ${num1} es divisible por 7`)
} else {
    document.write(`el numero ${num1} no es divisible en ninguno`)
}