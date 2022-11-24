/* EJERCICIO PPT - S14*/

const pejer = document.getElementById("resultado");

const btnEnviar = document.getElementById("btnEjercicio");

btnEnviar.onclick = function(){
    let a = 5;
    let b = 9;
    let c = 17;
    let d = 23;

    let suma = a + b;
    let resta = d - c;
    let resultadofinal = suma * resta;

    pejer.innerText = resultadofinal;
}


