// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let IngreseFila = 3// prompt("ingrese un numero para la fila");
let ingreseColumna = 3 //prompt ("ingrese un numero para la columna");


IngreseFila = Number(IngreseFila) ;
ingreseColumna = Number (ingreseColumna) ;

if(  isNaN(IngreseFila ) || isNaN( ingreseColumna) || ingreseColumna <= 0 || IngreseFila <=0){
  console.log ("ingrese numero valido") 
}
else{

    let total = IngreseFila * ingreseColumna ;


       for (let i = 0; i < IngreseFila; i++) {
        let filas = "";
        for (let y = 0; y < ingreseColumna; y++) {
            filas += total + "\t"  ; 
            total--;
        }
       console.log(filas);
    }
}


