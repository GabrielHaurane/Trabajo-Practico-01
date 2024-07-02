/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2.

*/

const num1 = parseInt(prompt(`ingrese un numero`));
const div2 = parseInt(num1%2);
const div3 = parseInt(num1%3);
const div5 = parseInt(num1%5);
const div7 = parseInt(num1%7);

if (div2 == 0) {
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
