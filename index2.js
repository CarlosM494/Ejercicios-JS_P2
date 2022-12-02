// Desarrolla una función dónde el usuario ingrese el nombre del mes y se le devuelvan los días correspondientes a ese mes.

// Inputs
//Febrero

// Outputs
//28 días

function Mes(mes) {
  var mes = prompt(
    'Ingrese el mes del año que desee(Primera letra con mayuscula)'
  );
  mes = parseInt(mes);
  switch (mes) {
    case 'Enero':
      console.log(31);
      break;

    case 'Febrero':
      console.log(28);
      break;

    case 'Marzo':
      console.log(31);
      break;

    case 'Abri':
      console.log(30);
      break;

    case 'Mayo':
      console.log(31);
      break;

    case 'Junio':
      console.log(30);
      break;

    case 'Julio':
      console.log(31);
      break;

    case 'Agosto':
      console.log(31);
      break;

    case 'Septiembre':
      console.log(30);
      break;

    case 'Octubre':
      console.log(31);
      break;

    case 'Noviembre':
      console.log(30);
      break;

    case 'Diciembre':
      console.log(31);
      break;
  }
  return r;
}

var r = Mes(12);
console.log(r);
