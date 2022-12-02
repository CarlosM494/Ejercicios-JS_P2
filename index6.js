// Desarrolla una función que ejecute una función secundaria después de n segundos ingresados por el usuario.

function Hello() {
  console.log('Bienvenido');
}

function Tiempo(n) {
  setTimeout(Hello, n);
}

var time = prompt('Ingrese los segundo que desea de espera: ');
var T = time * 2000;
Tiempo(T);
