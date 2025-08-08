// Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let ingreseNum = prompt("ingrese un numero");
let suma = 0;

while (ingreseNum !== null) {
      let num = Number(ingreseNum);
  
  if (isNaN(ingreseNum) || ingreseNum.trim() === "") {
    alert("no es numero");
  } else {
     suma += num;
  }
   ingreseNum = prompt("Ingrese un número");
}
alert(`la suma total es ${suma}`)
