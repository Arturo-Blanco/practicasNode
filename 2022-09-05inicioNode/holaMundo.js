
//console.log('Hola desde Node');

/*let readlineSync = require('readline-sync');
let alturaPersona = readlineSync.question("Indique la altura de la persona: ");
console.log('Su altura es');
console.log(alturaPersona); se prueba readline-sync*/ 

/*let mensaje="Casa";
console.log(mensaje); Se asigna variable y se imprime por consola*/


/*let readlineSync = require('readline-sync');
for(let i=0; i<3; i++) {
let mensajeSecuencial = readlineSync.question('Ingrese mensaje numero '+ (i+1) +':');
console.log('El mensaje numero '+ (i+1) +' es:');
console.log(mensajeSecuencial); } Se usa for para ingresar multiples valores */


let readlineSync = require('readline-sync');  //Se usa funcion para ingresar valores por parametros
    let base=readlineSync.question('Ingrese la base:');
    let altura=readlineSync.question('Ingrese la altura:');
    let area= calcularArea(base, altura);
    console.log('El area es: '+ area);

function calcularArea(a, b) {
    return a * b;
}
    