//declare accumulator, operator and operand
let accumulator = []
let operand = []
let operator = '/+-*'
let operatorValue = []
let isOperator = false

//create functions for basic math
const add = function (accumulator, operand){
    console.log(parseFloat(accumulator))
    console.log(operand)
    return parseFloat(accumulator.join('')) + parseFloat(operand.join(''))
}

const subtract = function(accumulator, operand){
    return parseFloat(accumulator.join('')) - parseFloat(operand.join(''))
}

const multiply = function(accumulator, operand){
    return parseFloat(accumulator.join('')) * parseFloat(operand.join(''))
}

const devide = function(accumulator,operand){
    return parseFloat(accumulator.join(''))/parseFloat(operand.join(''))
}


const operate = function(accumulator, operand, operator){
    if (operatorValue.includes('+') ){
        return add(accumulator,operand)
    } else if (operatorValue.includes('-')) {
        return subtract(accumulator,operand)
    } else if (operatorValue.includes('*')) {
        return multiply(accumulator,operand)
    } else if (operatorValue.includes('/')) {
        return devide(accumulator,operand)
    }

}

//operator = false, operator = true when operator pressed
const updateDisplay = function (){
    const screenDisplay = document.querySelector('.screen-text')
    const buttons = document.querySelectorAll('.button')
    const buttonContent = 

    buttons.forEach((button)=>{
        const buttonContent = button.innerHTML
        button.addEventListener('click',()=>{
            //if button is operator and accumulator is empty do nothing
            if (operator.includes(buttonContent) && accumulator.length === 0){
                alert ("Insert a number before an operator")    
            } // clear the screen
                else if (button.getAttribute("data-value") === "C") {
                accumulator = []
                operand = []
                operator = '/+-*'
                operatorValue = []
                isOperator = false
                screenDisplay.innerHTML = ('')
                console.log("cleared!")

            } //if button is an operator and accumulator [] is not empty but operand [] is, add the operator to operatorValue []
                else if (operator.includes(buttonContent) && accumulator.length > 0 && operand.length === 0) {
                console.log("option 1")
                operatorValue.push(buttonContent)
                return isOperator = true
            } //if button is a number and no operator has been pressed, add number to accumulator & update screen
                else if (!isNaN(parseFloat(buttonContent)) && !isOperator) {
                console.log("option 2")
                accumulator.push(buttonContent)
                let screenUpdate = accumulator.join('')
                screenDisplay.innerHTML=`${screenUpdate}`
            } //if button is a number and an operator has been previously pressed, add number to operand & update screen
                else if (!isNaN(parseFloat(buttonContent)) && isOperator) {
                console.log("option 3")
                operand.push(buttonContent)
                let screenUpdateOperand = operand.join('')
                screenDisplay.innerHTML = `${screenUpdateOperand}`
            } //if an operator is pressed for the second time and accumulator & operand are keyed, do calculation
                else if (operator.includes(buttonContent) && accumulator.length > 0 && operand.length > 0) {
                console.log("option 4")
                let answer = operate(accumulator,operand,operator)
                let answerRounded = operate(accumulator,operand,operator).toFixed(3)
                accumulator = [`${answerRounded}`]
                operand = []
                operatorValue = [`${buttonContent}`]
                //display decimal or whole number
                let printAnswer = function () {
                    if (answer % 1 != 0) {
                        screenDisplay.innerHTML = `${answerRounded}`
                    } else if (answer % 1 ===0) {
                        screenDisplay.innerHTML = `${answer}`
                    }
                }
                printAnswer ()
                console.log(accumulator)
            }
        } )
    })
}


updateDisplay()

//if operator is fasle, add numbers to accumulator until operand is pressed again
//if true add new numbers to operand until operator is pressed again then accumulator = calculate(accumulator, operator, operand)



//if button is operator & accumulator and opereand is not empty then calculate, display result, update accumulator, then new operand
//if button is not op and op is flase, add string to accum
//if button is not op and op is true, add to operator 
