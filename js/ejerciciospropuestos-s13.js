/* EJERCICIO 1 */

const resultado1 = document.getElementById("resultado1");
const resultado1d1 = document.getElementById("resultado1d1");
const btnEnviar1 = document.getElementById("btnEjercicio1");

btnEnviar1.onclick = function(){
    let a = 20;
    let b = 15;
    let suma = (a + b);
    let prom = (a * b);
    resultado1.innerText = "Suma: " + suma.toFixed(2);
    resultado1d1.innerText = "Producto: " + prom.toFixed(2);
}

/* EJERCICIO 2 */

const resultado2 = document.getElementById("resultado2");
const btnEnviar2 = document.getElementById("btnEjercicio2");

btnEnviar2.onclick = function(){
    let a = 80;
    let porcent = a * 0.20;
    resultado2.innerText = "El 20% de 80 es: " + porcent;
}

/* EJERCICIO 3 */

const resultado3 = document.getElementById("resultado3");
const resultado3d1 = document.getElementById("resultado3d1");
const btnEnviar3 = document.getElementById("btnEjercicio3");

btnEnviar3.onclick = function(){
    let a = 7;
    let am = a * 100;
    let amm = a * 1000;
    resultado3.innerText = "7m equivale a: " + am + "cm";
    resultado3d1.innerText = "7m equivale a: " + amm + "mm";
}

/* EJERCICIO 4 */

const resultado4 = document.getElementById("resultado4");
const btnEnviar4 = document.getElementById("btnEjercicio4");

btnEnviar4.onclick = function(){
    let b = 9;
    let a = 17;
    let area = (b * a)/2;
    resultado4.innerText = "El area del triangulo es: " + area.toFixed(2) + "m2";
}

/* EJERCICIO 5 */

const resultado5 = document.getElementById("resultado5");
const btnEnviar5 = document.getElementById("btnEjercicio5");

btnEnviar5.onclick = function(){
    let a = 12;
    let b = 3.81;
    let equiv = a * b
    resultado5.innerText = "12$ al cambio es: S./" + equiv.toFixed(2);
}

/* EJERCICIO 6 */

const resultado6 = document.getElementById("resultado6");
const btnEnviar6 = document.getElementById("btnEjercicio6");

btnEnviar6.onclick = function(){
    let a = 19;
    let b = 25.4;
    let equiv = a * b;
    resultado6.innerText = "19in equivale: " + equiv.toFixed(2) + "mm";
}

/* EJERCICIO 7 */

const resultado7 = document.getElementById("resultado7");
const btnEnviar7 = document.getElementById("btnEjercicio7");

btnEnviar7.onclick = function(){
    let a = 8;
    let b = 7;
    let c = 2;
    let suma = a + b + c;
    let alcuadrado = Math.pow(suma, 2);
    resultado7.innerText = alcuadrado;
}

/* EJERCICIO 8 */

const porA = document.getElementById("porcentajeA");
const montA = document.getElementById("montoA");

const porB = document.getElementById("porcentajeB");
const montB = document.getElementById("montoB");

const porC = document.getElementById("porcentajeC");
const montC = document.getElementById("montoC");

const btnEnviar8 = document.getElementById("btnEjercicio8");

btnEnviar8.onclick = function(){
    let monti = 523
    
    let pja = 30;
    let pjb = 20;
    let pjc = 50;

    let mta = (30/100) * monti;
    let mtb = (20/100) * monti;
    let mtc = (50/100) * monti;

    porA.innerText = pja;
    montA.innerText = mta.toFixed(2);

    porB.innerText = pjb;
    montB.innerText = mtb.toFixed(2);

    porC.innerText = pjc;
    montC.innerText = mtc.toFixed(2);
}

/* EJERCICIO 9 */

const datoA = document.getElementById("datoA");
const datoB = document.getElementById("datoB");
const datoC = document.getElementById("datoC");
const btnEnviar9 = document.getElementById("btnEjercicio9");

btnEnviar9.onclick = function(){
    let pb = 135.90;
    let igv = 19;
    let ipb = (igv/100) * pb;
    let suma = pb + ipb;

    datoA.innerText = "S/. " + pb.toFixed(2);
    datoB.innerText = ipb.toFixed(2);
    datoC.innerText = "S/. " + suma.toFixed(2);
}

/* EJERCICIO 10 */

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

const btnEnviar10 = document.getElementById("btnEjercicio10");

btnEnviar10.onclick = function(){
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
