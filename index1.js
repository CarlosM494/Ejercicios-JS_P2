//Mediante entradas de texto (prompt), pide al usuario el ingreso de dos números, valida si el primer número es mayor al segundo y muestra un alert con el siguiente mensaje: 'num1 es mayor a num2', de lo contrario, muestra el mensaje: 'num2 es mayor a num1'.

function addN(x, y) {
  var y = prompt('Ingrese el primer número');
  y = parseInt(y);
  var x = prompt('Ingrese el primer número');
  x = parseInt(x);
  if (y > x) {
    window.alert(y + ' es mayor a ' + x);
  } else {
    window.alert(x + ' es mayor a ' + y);
  }
  return r;
}

var r = addN();
