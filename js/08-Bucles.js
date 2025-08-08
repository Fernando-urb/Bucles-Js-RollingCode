// Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

// 1
// 12
// 123
// 1234
// 12345
// 123456



let piramide = +prompt("ingrese un numero no superior a 50") ;

if(isNaN(piramide) || piramide > 50 || piramide < 1){
    alert("ingre un caracter valido")

}
else{
    for(let i = 1 ; i <= piramide ; i++ ){
  
    document.write(`${ String(i).repeat(i)} <br>`)

}

}
