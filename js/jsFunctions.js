let numero1
let numero2

// Validación para número1
do{
    let input = prompt("Ingrese un numero entero positivo")
    if (input === null) break
    numero1 = Number(input)
}
while(isNaN(numero1) || numero1 < 0 || !Number.isInteger(numero1))

// Validación para número2
do{
    let input = prompt("Ingrese un segundo numero entero positivo")
    if (input === null) break
    numero2 = Number(input)
}
while(isNaN(numero2) || numero2 < 0 || !Number.isInteger(numero2))


const add = function(num1, num2){
    return num1 + num2
}

const subtract = function(num1, num2){
    return num1 - num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const split = (num1, num2) => num2 === 0 ? "No se puede dividir por 0" : num1/num2

// RESULTADOS
console.log(`La suma entre ${numero1} y ${numero2} es: ${add(numero1, numero2)}`)
console.log(`La resta entre ${numero1} y ${numero2} es: ${subtract(numero1, numero2)}`)
console.log(`La multiplicación entre ${numero1} y ${numero2} es: ${multiply(numero1, numero2)}`)
console.log(`La división entre ${numero1} y ${numero2} es: ${split(numero1, numero2)}`)