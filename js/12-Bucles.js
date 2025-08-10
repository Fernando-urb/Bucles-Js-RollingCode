// Realiza un script que genere un número aleatorio entre 1 y 99

let numeroRandom  ;

do {
  numeroRandom = Math.floor(Math.random() * 99) + 1; 
 document.write(`El número es: ${numeroRandom}`);


} while (numeroRandom <= 1);
