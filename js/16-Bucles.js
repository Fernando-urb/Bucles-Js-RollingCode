// Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.


let ingreseTexto= "hola que tal";
let nuevoTexto ="";

for(let i = ingreseTexto.length -1; i >= 0 ; i--){
    nuevoTexto += ingreseTexto[i]

}

console.log(nuevoTexto)