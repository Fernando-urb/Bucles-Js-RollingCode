// Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:



// Input: Hola mundo

// Output: la vocal ‘o’ está en la posición 1

let ingreseTexto = " hola como estas , soy fernando";
let posiciónVocal ="";

for(let i = 0; i < ingreseTexto.length;i++){
    let vocal =ingreseTexto[i].toLowerCase();

    if ("aeiou".includes(vocal)) {
        console.log(`la vocal ${vocal} se encuentra en la posicion ${i}`);
        break;
        
        
    }

}

