/* EJERCICIO 2 WORD - S15

Ejercicio 2: Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.

*/

let numero = prompt("Ingresar un numero");
numero = parseInt(numero);
let pornum = 0;
let porcentaje = 18;

if (numero > 500){
    pornum = numero * (porcentaje/100);

    alert("El "+ porcentaje + "% de " + numero + " es: " + pornum.toFixed(2));
}
