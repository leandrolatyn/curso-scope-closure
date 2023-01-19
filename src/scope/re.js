// Var
var firstName; // Undefined
firstName = 'Leandro';
console.log(firstName);

var lastName = 'Miguel'; // Declaracion y asignacion
lastname = 'Latyn' // Reasignacion
console.log(lastName);

var secondName = 'Carlos'; // Declaracion y asignacion
var secondName = 'Miguel'; // Reasignacion
console.log(secondName);

// Let
let fruit = 'Apple'; // Declaracion y asignacion
fruit = 'Kiwi'; // Reasignacion
console.log(fruit);
let fruit = 'Banana'; // No permite redeclarar dentro del scope de bloque
console.log(fruit);

// Const
const animal = 'Dog'; // Declaracion y asignacion
animal = 'Cat'; // No permite reasignar
const animal = 'Snake'; // No permite redeclarar dentro del scope de bloque
console.log(animal);

// No permite redeclarar ni reasignar el tipo, pero los arrays y objetos pueden ir mutando (cambiando su contenido)
const vehicles = [];
vehicles.push('Car');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);