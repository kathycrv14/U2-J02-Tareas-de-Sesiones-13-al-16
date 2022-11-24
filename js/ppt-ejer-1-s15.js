/* EJERCICIO 1 PPT - S15

Ejercicio 1: Digite el importe de una compra, en caso de que el importe sea 150 o más, se le descontará el 12%. Mostrar el descuento otorgado y el importe de compra final

*/


let imp = prompt("Ingresar el importe");
imp = parseInt(imp);
let descuentoi = 12;
let descuentof = 0.88;
let impfinal = 0;

if (imp >= 150){
    impfinal = imp * descuentof;
    alert("Descuento otorgado: "+ descuentoi + "%")
    alert("Importe Final: "+ impfinal.toFixed(2))
}