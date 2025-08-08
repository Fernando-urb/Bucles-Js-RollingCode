// Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.


const ingreseEdad = prompt("ingrese su edad").trim();

if( isNaN(ingreseEdad) || ingreseEdad === "" ){
    document.write("por favor ingrese un numero valido")
}
else{
    const edad = Number(ingreseEdad)
    if( edad >=18 && edad < 65){
     document.write("filicitaciones , ya puede conducir")
}
else{
      document.write("Lamentablemente , aun no cumple con la edad requerida para conducir")
}
}
 