// Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let texto = prompt("ingrese un msj");
const textoCompleto =[];

while(texto !== null ){
    textoCompleto.push(texto.trim())
    texto = prompt("ingrese un msj")


}
document.write(textoCompleto.join("-"))