/* EJERCICIO 1 */

const canttA = document.getElementById("canttA");
const porA = document.getElementById("porA");

const canttB = document.getElementById("canttB");
const porB = document.getElementById("porB");

const cantto = document.getElementById("cantto");
const porto = document.getElementById("porto");

const btnEnviar1 = document.getElementById("btnEjercicio1");

btnEnviar1.onclick = function(){
    let a = 18;
    let b = 14;

    let suma = a + b;
    let elcien = 100;

    let pa = (a * elcien)/suma;
    let pb = (b * elcien)/suma;

    canttA.innerText = a;
    porA.innerText = pa.toFixed(2) + "%";

    canttB.innerText = b;
    porB.innerText = pb.toFixed(2) + "%";

    cantto.innerText = suma;
    porto.innerText = elcien.toFixed(2) + "%";
}

/* EJERCICIO 2 */

const p1 = document.getElementById("p1");
const inv1 = document.getElementById("inv1");

const p2 = document.getElementById("p2");
const inv2 = document.getElementById("inv2");

const p3 = document.getElementById("p3");
const inv3 = document.getElementById("inv3");

const p4 = document.getElementById("p4");
const inv4 = document.getElementById("inv4");

const p5 = document.getElementById("p5");
const inv5 = document.getElementById("inv5");

const portotoi = document.getElementById("portoi");
const invtoto = document.getElementById("invto");

const btnEnviar2 = document.getElementById("btnEjercicio2");

btnEnviar2.onclick = function(){
    let portoi = 100;
    let invto = 6535400;
    
    let av1 = 35;
    let por1 = (invto * (av1 / 100));

    let av2 = 25;
    let por2 = (invto * (av2 / 100));

    let av3 = 10;
    let por3 = (invto * (av3 / 100));

    let av4 = 15;
    let por4 = (invto * (av4 / 100));

    let av5 = portoi - (av1 + av2 + av3 + av4);
    let por5 = (invto * (av5 / 100));

    p1.innerText = av1 + "%";
    inv1.innerText = "S/." + por1.toFixed(2);

    p2.innerText = av2 + "%";
    inv2.innerText = "S/." + por2.toFixed(2);

    p3.innerText = av3 + "%";
    inv3.innerText = "S/." + por3.toFixed(2);

    p4.innerText = av4 + "%";
    inv4.innerText = "S/." + por4.toFixed(2);

    p5.innerText = av5 + "%";
    inv5.innerText = "S/." + por5.toFixed(2);

    portotoi.innerText = portoi.toFixed(2) + "%";
    invtoto.innerText =  "S/." + invto.toFixed(2);
}

/* EJERCICIO 3 */

const preA = document.getElementById("preA");
const cantA = document.getElementById("cantA");
const subtA = document.getElementById("subtA");

const preB = document.getElementById("preB");
const cantB = document.getElementById("cantB");
const subtB = document.getElementById("subtB");

const preC = document.getElementById("preC");
const cantC = document.getElementById("cantC");
const subtC = document.getElementById("subtC");

const sumatt = document.getElementById("total");

const btnEnviar3 = document.getElementById("btnEjercicio3");

btnEnviar3.onclick = function(){
    let a = 150;
    let cta = 1025;
    let proda = a * cta;

    let b = 50;
    let ctb = 1563;
    let prodb = b * ctb;

    let c = 80;
    let ctc = 1287;
    let prodc = c * ctc;

    let vsuma = proda + prodb + prodc;

    preA.innerText = "S/. " + a.toFixed(2);
    cantA.innerText = cta;
    subtA.innerText = "S/. " + proda.toFixed(2);

    preB.innerText = "S/. " + b.toFixed(2);
    cantB.innerText = ctb;
    subtB.innerText = "S/. " + prodb.toFixed(2);

    preC.innerText = "S/. " + c.toFixed(2);
    cantC.innerText = ctc;
    subtC.innerText = "S/. " + prodc.toFixed(2);

    sumatt.innerText = "S/. " + vsuma.toFixed(2);
}