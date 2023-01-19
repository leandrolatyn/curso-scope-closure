// El modo estricto permite tener un mayor control de la asignacion de variables 
// Ya que no hace uso del hoisting, forzando al programador a declarar las variables

// Se puede user para todo el archivo
'use strict';
pi = 3.1416;
console.log(pi);

// O para una funcion especifica
function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());