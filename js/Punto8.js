/* 
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/
const num1 = parseInt(prompt(`ingrese un numero`));
const division = parseInt((num1%2));

if (division == 0) {
    document.write(`<p>el ${num1} es divisible en 2 </p>`)
} else {
    document.write(`<p>el ${num1} no es divisible en 2 </p>`)
}
