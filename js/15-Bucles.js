// Realiza un script que cuente el número de vocales que tiene un texto.


let ingreseTexto = "fernando";
let contador =0;
for( let i = 0;i < ingreseTexto.length; i++ ){
    let vocal = ingreseTexto[i]
   if("aeiou".includes(vocal)){
    contador++

   }


}
console.log(contador)