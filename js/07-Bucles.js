// Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1


let piramide = +prompt("ingrese un numero no superior a 50") ;

if(isNaN(piramide) || piramide > 50 || piramide < 1){
    alert("ingre un caracter valido")

}
else{
    for(let i = piramide ; i >= 1 ; i-- ){
  
    document.write(`${ String(i).repeat(i)} <br>`)

}

}

