/*
6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande
*/
const num1 = parseInt(prompt(`ingrese el primer numero`));
const num2 = parseInt(prompt(`ingrese el segundo numero numero`));

if (num1 > num2) {
    document.write(`<p>El numero mayor es: ${num1}</p>`)
} else if (num1 < num2) {
    document.write(`<p>El numero mayor es: ${num2}</p>`)
} else {
    document.write(`<p>los dos numeros son iguales</p>`)
}
