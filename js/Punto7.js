/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/
const num1 = parseInt(prompt(`ingrese el primer numero`));
const num2 = parseInt(prompt(`ingrese el segundo numero`));
const num3 = parseInt(prompt(`ingrese el tercer numero`));

if (num1 > num2 && num1 > num3) {
    document.write(`<p>El numero mayor es ${num1} </p>`)
} else if (num2 > num1 && num2 > num3){
    document.write(`<p>El numero mayor es ${num2} </p>`)
} else if (num3 > num1 && num3 > num2 ) {
    document.write(`<p>El numero mayor es ${num3} </p>`)
}