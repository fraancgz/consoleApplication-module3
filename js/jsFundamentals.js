
let number1
let number2

const add = (num1=0, num2=0) => num1 + num2
const substract = (num1=0, num2=0) => num1 - num2
const multiply = (num1=0, num2=0) => num1 * num2
const split = (num1=0, num2=0) => num2 === 0 ? "No se puede dividir por 0" : num1 / num2


// RESULTADOS
number1 = 0
number2 = 0

console.log(`La suma entre ${number1} y ${number2} es: ${add(number1, number2)} \ny si lo multiplicamos por ${number1} da: ${multiply(add(number1, number2), number1)}`)

console.log(`La resta entre ${number1} y ${number2} es: ${substract(number1, number2)} \ny si lo dividimos por ${number1} da: ${split(substract(number1, number2), number1)}`)


