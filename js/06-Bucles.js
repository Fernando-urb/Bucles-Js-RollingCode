
// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….


let piramide = 30 ;


for(let i = 1 ; i <= piramide ; i++  ){
  
    document.write(`${ String(i).repeat(i)} <br>`)

}