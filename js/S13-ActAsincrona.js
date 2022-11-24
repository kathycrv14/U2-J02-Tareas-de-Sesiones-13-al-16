/* EJERCICIO 1 */

const resultado1 = document.getElementById("resultado1");
const btnEnviar1 = document.getElementById("btnEjercicio1");

btnEnviar1.onclick = function(){
    let a = 12;
    let b = 15;
    let c = 18;

    let prom = (a + b + c)/3;

    resultado1.innerText = "Promedio final: " + prom;
}

/* EJERCICIO 2 */

const sA = document.getElementById("sA");
const auA = document.getElementById("auA");
const rfA = document.getElementById("rfA");

const sB = document.getElementById("sB");
const auB = document.getElementById("auB");
const rfB = document.getElementById("rfB");

const sC = document.getElementById("sC");
const auC = document.getElementById("auC");
const rfC = document.getElementById("rfC");

const btnEnviar2 = document.getElementById("btnEjercicio2");

btnEnviar2.onclick = function(){
    let suA = 7800;
    let suB = 4200;
    let suC = 3000;

    let aumA = 10;
    let aumB = 12;
    let aumC = 15;

    let promA = suA * (aumA/100);
    let promB = suB * (aumB/100);
    let promC = suC * (aumC/100);

    let promfA = suA + promA;
    let promfB = suB + promB;
    let promfC = suC + promC;

    sA.innerText = "S/." + suA.toFixed(2);
    auA.innerText = aumA + "%";
    rfA.innerText = "S/." + promfA.toFixed(2);

    sB.innerText = "S/." + suB.toFixed(2);
    auB.innerText = aumB + "%";
    rfB.innerText = "S/." + promfB.toFixed(2);

    sC.innerText = "S/." + suC.toFixed(2);
    auC.innerText = aumC + "%";
    rfC.innerText = "S/." + promfC.toFixed(2);
}

/* EJERCICIO 3 */

const psA = document.getElementById("psA");
const notaA = document.getElementById("notaA");

const psB = document.getElementById("psB");
const notaB = document.getElementById("notaB");

const psC = document.getElementById("psC");
const notaC = document.getElementById("notaC");

const promf = document.getElementById("promf")

const btnEnviar3 = document.getElementById("btnEjercicio3");

btnEnviar3.onclick = function(){
    let ntA = 15;
    let ntB = 18;
    let ntC = 16;
    
    let pesoA = 30;
    let pesoB = 30;
    let pesoC = 40;

    let promA = ntA * (pesoA/100);
    let promB = ntB * (pesoB/100);
    let promC = ntC * (pesoC/100);

    let prom = promA + promB + promC;

    psA.innerText = pesoA + "%";
    notaA.innerText = ntA;

    psB.innerText = pesoB + "%";
    notaB.innerText = ntB;

    psC.innerText = pesoC + "%";
    notaC.innerText = ntC;

    promf.innerText = prom.toFixed(2);

}