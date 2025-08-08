// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


const edad = +prompt("ingrese su edad").trim();

if( isNaN(edad) || edad === "" ){
    document.write("por favor ingrese un numero valido")
}
else if( edad >=18 && edad < 65){
     document.write("filicitaciones , ya puede conducir")
}
else{
      document.write("Lamentablemente , aun no cumple con la edad requerida para conducir")
}