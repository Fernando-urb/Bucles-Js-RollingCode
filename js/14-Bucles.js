// Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.


let IngreseTexto =  "hola"    //prompt("ingrese un texto");

let textoSeparado = IngreseTexto.split("");
let guion ="-";
let textoConGuion = "";

for(let i = 0; i < textoSeparado.length ; i++)
{
    textoConGuion += textoSeparado[i];
    if( i !== textoSeparado.length -1){
        textoConGuion += guion

    }
        
}
console.log(textoConGuion);

