// Imprime la siguiente figura en consola
// 54321
// 4321
// 321
// 21
// 1

function fig(n) {
  for (var i = n; i >= 1; i--) {
    var aux = '';
    for (var j = i; j >= 1; j--) {
      aux += j;
    }
    console.log(aux);
  }
}
var r = fig(5);
console.log(r);
