/* EJERCICIO 1 WORD - S15

Ejercicio 1: Elaborar un programa que permita ingresar el nombre del trabajador, su sueldo básico y el número de hijos, se deberá mostrar su bonificación y el sueldo final.  Tenga en cuenta que la empresa está dando una bonificación del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos.

*/

let nombre = prompt("Ingresar nombre del trabajador");
let sueldobasico = prompt("Ingresar su sueldo basico");
sueldobasico = parseInt(sueldobasico);
let numhijos = prompt("Ingresar numero de hijos");
numhijos = parseInt(numhijos);

let bono = 7;
let bonoextra = 0;
let sueldofinal = 0;

if (numhijos >= 1){
    bonoextra = sueldobasico * (bono/100);
    sueldofinal = sueldobasico + bonoextra;

    alert("Bonificacion otorgada: "+ bono + "%")
    alert("Sueldo Final: S/."+ sueldofinal.toFixed(2))
}
