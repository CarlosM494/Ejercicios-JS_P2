// Explica la diferencia de nulo, undefined y vacío ('')

// "UNDEFINED" es una variable global y a la vez un tipo de dato. La variable undefined es de tipo undefined. Una variable declarada sin valor asume implícitamente el valor undefined. Por ejemplo:

var x;
console.log('La variable x es', x);
console.log('El tipo de la variable x es', typeof x);

// "NULL" no es una variable como undefined, este es solamente un tipo de dato. Una variable debe ser declarada explícitamente como null para señalar que sí tiene valor, pero éste es un valor vacío. Sin embargo el tipo de esa variable no sera "null" sino "object".

var y = null;
console.log('La variable y es', y);
console.log('La variable y es de tipo ', typeof y);

// VACIO ('') no es un tipo de dato, este solamente es un valor que se le da a una variable, pero esta varible no va a contener nada

var z = '';
console.log('La variable z es', z);
