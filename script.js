//create functions for basic math
const add = function (firstNumber, secondNumber){
    return firstNumber + secondNumber
}



//subtract
const subtract = function(firstNumber, secondNumber){
    return firstNumber - secondNumber
}



//multiply
const multiply = function(firstNumber, secondNumber){
    return firstNumber * secondNumber
}



//devide
const devide = function(firstNumber,secondNumber){
    return firstNumber/secondNumber
}


//create variable for numbers & operators
const firstNumber = 3
const secondNumber = 4
const operator = '-'

const operate = function(firstNumber, secondNumber, operator){
    if (operator === '+'){
        return add(firstNumber,secondNumber)
    } else if (operator === '-') {
        return subtract(firstNumber,secondNumber)
    } else if (operator === '*') {
        return multiply(firstNumber,secondNumber)
    } else if (operator === '/') {
        return devide(firstNumber,secondNumber)
    }

}

const mazematics = operate(firstNumber, secondNumber, operator)
console.log(mazematics)


