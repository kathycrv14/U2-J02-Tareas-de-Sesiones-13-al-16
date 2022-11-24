/* EJERCICIO 2 PPT - S15

Ejercicio 2: Ingrese el nombre de un alumno y las notas de su examen parcial, examen final y el promedio de prácticas; muestre el nombre del alumno y su promedio final solo si el alumno está aprobado. Tenga en cuenta que para el cálculo del promedio la nota del examen final tiene peso doble.

*/
const alumno = document.getElementById("alumno");
const ep = document.getElementById("ep");
const ef = document.getElementById("ef");
const pp = document.getElementById("pp");
const pf = document.getElementById("pf");
const mp = document.getElementById("mensajepositivo");
const boton = document.getElementById("btnEjercicio2");

let nom = prompt("Ingrese el nombre del alumno");
let exp = prompt("Ingrese la nota del Examen Parcial");
exp = parseInt(exp)
let exf = prompt("Ingrese la nota del Examen Final");
exf = parseInt(exf)
let prp = prompt("Ingrese el Promedio de Practicas");
prp = parseInt(prp)

boton.onclick = function(){

    let promf = (exp + prp + (exf*2))/4

    if (promf >= 13){
        alumno.innerText = nom
        ep.innerText = exp
        ef.innerText = exf
        pp.innerText = prp

        pf.innerText = promf;
        mp.innerText = "Estas aprobado";
    }else{
        mp.innerText = "No se puede mostrar tu Promedio Final"
    }
}

