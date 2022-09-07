let readlineSync = require('readline-sync');
let vueltas = Number (readlineSync.question('Ingrese cantidad de vueltas: '));
let tiempoVuelta=[];
let tiempoTotal = 0;
cargarTiempoVueltas(vueltas);
calcularTiempoTotal(vueltas);
calcularPromedioVuelta(vueltas);

function cargarTiempoVueltas(vueltas) {
    for(let i=0 ;i < vueltas ; i++) {
    tiempoVuelta[i]= readlineSync.questionInt('Ingrese tiempo de vuelta '+ (i+1) + ' :');
    console.log('El tiempo de la vuelta '+ (i+1) + ' es:' + tiempoVuelta[i]); 
    }
}
function calcularTiempoTotal(vueltas) {
    for(let i=0 ;i < vueltas ; i++) {
    tiempoTotal += tiempoVuelta[i];
    } 
console.log('El tiempo total es: '+ tiempoTotal);
}
function calcularPromedioVuelta(vueltas) {
    let promedio = tiempoTotal / vueltas;
    console.log('El promedio de vueltas es: '+promedio);
}