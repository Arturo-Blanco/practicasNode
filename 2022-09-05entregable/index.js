let readlineSync = require('readline-sync');
let tiempoVuelta=[];
let total = 0;
calcularTiempoVueltas();
tiempoTotal();
calcularPromedioVuelta();

function calcularTiempoVueltas() {
    for(let i=0 ;i < 4 ; i++) {
    tiempoVuelta[i]= readlineSync.questionInt('Ingrese tiempo de vuelta '+ (i+1) + ' :');
    console.log('El tiempo de la vuelta '+ (i+1) + ' es:' + tiempoVuelta[i]); 
    }
}
function tiempoTotal() {
    for(let i=0 ;i < 4 ; i++) {
    total += tiempoVuelta[i];
    } 
console.log('El tiempo total es: '+ total);
}
function calcularPromedioVuelta() {
    let promedio = total / 4;
    console.log('El promedio de vueltas es: '+promedio);
}