// Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

let ingreseEdad1 =Number(prompt("ingrese su edad"));
let ingreseNombre1 = prompt("ingrese nombre");
let ingreseEdad2 =Number(prompt("ingrese su edad"));
let ingreseNombre2 = prompt("ingrese nombre");
let ingreseEdad3 =Number(prompt("ingrese su edad"));
let ingreseNombre3 = prompt("ingrese nombre");

let datosComprar = [
    {edad:ingreseEdad1,
     nombre :ingreseNombre1   
    },
    {edad:ingreseEdad2,
     nombre :ingreseNombre2   
    },
    {edad:ingreseEdad3,
     nombre :ingreseNombre3   
    }
]
if(isNaN(ingreseEdad1) || isNaN(ingreseEdad2)|| isNaN(ingreseEdad3)){
    alert("ingrese un numero valido")
}
else{

    let edadDelMayor = 0 ;
    let NombreDelMayor ="";


for ( let datos of datosComprar){
    if( datos.edad > edadDelMayor){
        edadDelMayor = datos.edad;
        NombreDelMayor = datos.nombre;

    }
        
}
alert(`La persona mayor es ${NombreDelMayor} con ${edadDelMayor} años.`);
}




