/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo

*/
const frase = prompt(`agrege una frase hasta 10 caracteres`)

if (frase.length <= 10 ) {
    if (frase.substring(0,10) == `a` || frase.substring(0,10) == `e` || frase.substring(0,10) == `i`|| frase.substring(0,10) == `o` || frase.substring(0,10) == `u`) {
        console.log(`sus vocales son ${frase}`);
    }
    
} else {
    document.write(`la cantidad de caracteres es incorrecta`)
}

