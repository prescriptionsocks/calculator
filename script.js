//create functions for basic math
const add = function (...numbers){
    return numbers.reduce((n,number)=>{
        return n+number
    }, 0)
}

const addResult = add(2,3,4)
console.log(addResult)

//subtract
const subtract = function (...numbers){
    return numbers.reduce((n,number)=>{
        return n - number
    })
}

const subResult = subtract(3,1,0)
console.log(subResult)

//multiply
const multiply = function(...numbers){
    return numbers.reduce((n,number)=>{
        return n * number
    })
}

const mulResult = multiply(2,3,2)
console.log(mulResult)

//devide
const devide = function(...numbers){
    return numbers.reduce((n,number)=>{
        return n/number
    })
}

const divResult = devide(12,3,2)
console.log(divResult)
//create variable for numbers & operators
//