/* EJERCICIO 3 WORD - S15

Ejercicio 3: Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

*/

/*
let num = prompt("Ingrese un numero");
num = parseInt(num);

if (let i = 1; i >= parseInt(i); i++){
    x == x * i;
}
*/

function factorial(n)
{
    if (n==0) return 1;
    if (n>1){
        return n*factorial(n-1);
    }else{
        return n;
    }
}