
const arrayBloqueo = [];
for (let i = 0; i < 3; i++) {
    arrayBloqueo[i] = undefined;
}
Object.preventExtensions(arrayBloqueo);
arrayBloqueo[4] = 1234567;
arrayBloqueo[1] = "José Alfredo";
console.log(arrayBloqueo);

// "use strict";

// const arrayBloqueo = [];
// for (let i = 0; i < 3; i++) {
//     arrayBloqueo[i] = undefined;
// }
// Object.freeze(arrayBloqueo);
// arrayBloqueo[4] = undefined;
// console.log(arrayBloqueo);



let lista = [];
for (let i = 0; i <= 6; i++) {
    lista[i] = undefined;
}
for (let i = 0; i < 6; lista[i++] = undefined);

lista[0] = "José Alfredo"
lista[1] = "Jiménez García";
lista[2] = 45;
lista[3] = true;
lista[4] = "Carrera";
lista[5] = "joseajimenez07@gmail.com";
lista[6] = "Estudiante Diplomado JavasScript Nivel 1";


console.log(lista);

let array = [];
for (let i = 0; i < 5; i++) {
    array[i] = innerHeight;
}
console.log(array);

// let arrayObjeto = new Array(5);
// console.log(arrayObjeto);