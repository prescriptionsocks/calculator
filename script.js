const screenDisplay = document.querySelector('.screen-text')
const buttons = document.querySelectorAll('.button')

// Declare accumulator, operator, and operand
let accumulator = []
let operand = []
let operator = '/+-*'
let operatorValue = []
let isOperator = false
let isEqualPressed = false

// Create functions for basic math
const add = function (accumulator, operand) {
  console.log(parseFloat(accumulator))
  console.log(operand)
  return parseFloat(accumulator.join('')) + parseFloat(operand.join(''))
}

const subtract = function (accumulator, operand) {
  return parseFloat(accumulator.join('')) - parseFloat(operand.join(''))
}

const multiply = function (accumulator, operand) {
  return parseFloat(accumulator.join('')) * parseFloat(operand.join(''))
}

const divide = function (accumulator, operand) {
  return parseFloat(accumulator.join('')) / parseFloat(operand.join(''))
}

const operate = function (accumulator, operand, operator) {
  if (operatorValue.includes('+')) {
    return add(accumulator, operand)
  } else if (operatorValue.includes('-')) {
    return subtract(accumulator, operand)
  } else if (operatorValue.includes('*')) {
    return multiply(accumulator, operand)
  } else if (operatorValue.includes('/')) {
    return divide(accumulator, operand)
  }
}

const clearCalculator = function () {
  accumulator = []
  operand = []
  operator = '/+-*'
  operatorValue = []
  isOperator = false
  screenDisplay.innerHTML = ('')
  isEqualPressed = false
  console.log("cleared!")
}

// Operator = false, operator = true when operator pressed
const updateDisplay = function () {
  buttons.forEach((button) => {
    const buttonContent = button.innerHTML
    button.addEventListener('click', () => {
      // If button is operator and accumulator is empty do nothing
      if (operator.includes(buttonContent) && accumulator.length === 0) {
        alert("Insert a number before an operator")
      } else if (!isNaN(parseFloat(buttonContent)) && accumulator.length > 0 && isEqualPressed === true) {
        clearCalculator ()
        accumulator.push(buttonContent)
        let screenUpdate = accumulator.join('')
        screenDisplay.innerHTML = `${screenUpdate}`
      }
      
      else if (button.getAttribute("data-value") === "C") {
        clearCalculator()
      }
      // If button is an operator and accumulator [] is not empty but operand [] is, add the operator to operatorValue []
      else if (operator.includes(buttonContent) && accumulator.length > 0 && operand.length === 0) {
        console.log("option 1")
        operatorValue.push(buttonContent)
        isOperator = true
        isEqualPressed = false
      } 
      // If button is a number and no operator has been pressed, add number to accumulator & update screen
      else if (!isNaN(parseFloat(buttonContent)) && !isOperator) {
        console.log("option 2")
        accumulator.push(buttonContent)
        let screenUpdate = accumulator.join('')
        screenDisplay.innerHTML = `${screenUpdate}`
        isEqualPressed = false
      }
      // If button is a number and an operator has been previously pressed, add number to operand & update screen
      else if (!isNaN(parseFloat(buttonContent)) && isOperator) {
        console.log("option 3")
        operand.push(buttonContent)
        let screenUpdateOperand = operand.join('')
        screenDisplay.innerHTML = `${screenUpdateOperand}`
        isEqualPressed = false
      }
      // If an operator is pressed for the second time and accumulator & operand are keyed, do calculation
      else if (operator.includes(buttonContent) && accumulator.length > 0 && operand.length > 0 || button.getAttribute("data-value") === "=") {
        console.log("option 4")
        if (button.getAttribute("data-value") === "=") {
          isEqualPressed = true
          console.log("Equal pressed")
        }
        if (operand.join('') === '0' && operatorValue.includes('/')){
            alert("Come On! Can't devide by zero, start again")
            clearCalculator ()
        }
        let answer = operate(accumulator, operand, operator)
        let answerRounded = operate(accumulator, operand, operator).toFixed(3)
        accumulator = [`${answerRounded}`]
        operand = []
        operatorValue = [`${buttonContent}`]
        // Display decimal or whole number
        let printAnswer = function () {
          if (answer % 1 != 0) {
            screenDisplay.innerHTML = `${answerRounded}`
          } else if (answer % 1 === 0) {
            screenDisplay.innerHTML = `${answer}`
          }
        }
        printAnswer()
        console.log(accumulator)
      }
    })
  })
}

updateDisplay()

// If number is pressed after equal sign then clear the screen and start afresh
// If operand is pressed after equal sign then continue the math

// If operator is false, add numbers to accumulator until operand is pressed again
// If true add new numbers to operand until operator is pressed again then accumulator = calculate(accumulator, operator, operand)

// If button is operator & accumulator and operand is not empty then calculate, display result, update accumulator, then new operand
// If button is not op and op is false, add string to accum
// If button is not op and op is true, add to operator 
