// Desarrolla una función que reciba como parámetro grados Fahrenheit, realiza la conversión a grados Celsius, y según sea el caso, aparezca lo siguiente en consola:
//1) Si oF está entre 14 y 32, imprime “Temperatura baja”
//2) Si oF está entre 32 y 68, imprime “Temperatura adecuada”
//3) Si oF está entre 68 y 96, imprime “Temperatura alta”
//4) Si no está entre ningún caso anterior, imprime “Temperatura desconocida”
// Inputs
//n° F

function grados(F) {
  var F = prompt('Ingrese los grados Fahrenheit');
  F = parseInt(F);

  if (F >= 14 || F < 32) {
    C = (F - 32) * (5 / 9);
    console.log(
      'La temperatura de ' + C + ' grados Celcius es una temperatura baja'
    );
  } else if (F >= 32 || F < 68) {
    C = (F - 32) * (5 / 9);
    console.log(
      'La temperatura de ' + C + ' grados Celcius es una temperatura adecuada'
    );
  } else if (F >= 68 || F < 96) {
    C = (F - 32) * (5 / 9);
    console.log(
      'La temperatura de ' + C + ' grados Celcius es una temperatura alta'
    );
  } else {
    C = (F - 32) * (5 / 9);
    console.log(
      'La temperatura de ' +
        C +
        ' grados Celcius es una temperatura desconocida'
    );
  }
  return r;
}

var r = grados();
console.log(r);
