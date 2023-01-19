// Las variables declaradas dentro de la funcion tienen Function Scope
// Por lo tanto solo pueden ser accedidas dentro de la funcion
function greeting() {
    let userName = 'Leandro';
    console.log(userName);

    if (userName === 'Leandro') {
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName);