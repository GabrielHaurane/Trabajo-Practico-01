/*
9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo

*/
const frase = prompt(`agrege una frase hasta 5 caracteres`)
let fraseVocales ="";

if (frase.length <= 5 ) {
    if (frase[0] == `a` || frase[1] == `a` || frase[2] == `a` || frase[3] == `a` || frase[4] == `a` || frase[5] == `a`) {
        fraseVocales += `a`
    }
    if (frase[0] == `e` || frase[1] == `e` || frase[2] == `e` || frase[3] == `e` || frase[4] == `e` || frase[5] == `e`) {
        fraseVocales += `e`
    }
    if (frase[0] == `i` || frase[1] == `i` || frase[2] == `i` || frase[3] == `i` || frase[4] == `i` || frase[5] == `i`) {
        fraseVocales += `i`
    }
    if (frase[0] == `o` || frase[1] == `o` || frase[2] == `o` || frase[3] == `o` || frase[4] == `o` || frase[5] == `o`) {
        fraseVocales += `o`
    }
    if (frase[0] == `u` || frase[1] == `u` || frase[2] == `u` || frase[3] == `u` || frase[4] == `u` || frase[5] == `u`) {
        fraseVocales += `u`
    }
    document.write(fraseVocales)
    
} else {
    document.write(`la cantidad de caracteres es incorrecta`)
}

