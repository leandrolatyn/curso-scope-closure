// Variables
var a; // Declaracion
var b = 'b'; // Declaracion y asignacion
b = 'bb'; // Reasignacion
var a = 'aa'; // Redeclaracion

// Global Scope
var fruit = 'Apple'; // Scope Global
console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// En el siguiente ejemplo al no declarar la variable country dentro de la funcion, esta recibe un Scope Global
// Si declararamos la variable con var, let o const, esta tendria un Scope Local dentro de la funcion
// Es un detalle que hay que tener en cuenta para evitar errores
function countries() {
    country = 'Argentina'; // Scope Global
    console.log(country);
}

countries();
console.log(country);