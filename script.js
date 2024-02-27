
function add(a,b){
    return Number(a) + Number(b)
}

function subtract(a,b){
    return a - b
}

function multiply(a,b){
    return a * b
}

function divide(a,b){
    return a/b
}

let firstNum;
let operator;
let secondNum;

function operate(firstNum,secondNum,operator){
    if (operator === "+"){
        return add(firstNum,secondNum)
    }else if (operator === "-"){
        return subtract(firstNum,secondNum)
    }else if (operator === "*"){
        return multiply(firstNum,secondNum)
    }else if(operator === "/"){
        return divide(firstNum,secondNum)
    }
}

const NumberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operator')
const equal = document.querySelector(".equal")
const clear = document.querySelector(".clear")
const display = document.querySelector(".display")


NumberButtons.forEach((button)=>{
    button.addEventListener("click",()=> {
        display.textContent += `${button.value}`
    })
})

operatorButtons.forEach((button)=>{
    button.addEventListener("click",() =>{
        display.textContent += ` ${button.value} `
    })
})

equal.addEventListener("click",()=>{
    let mathValues = display.textContent
    let sortedMath = mathValues.split(" ")
    while (sortedMath.includes("*") || sortedMath.includes("/")){
        //MD is reference from pemdas
        let operatorMD = sortedMath.indexOf("*")
        let answer = operate(sortedMath[operatorMD - 1], sortedMath[operatorMD + 1], sortedMath[operatorMD])
        sortedMath.splice(operatorMD - 1, 3,answer)   
    }

    while (sortedMath.includes("+") || sortedMath.includes("-")){
        let operatorAS = sortedMath.indexOf("+")
        let answer = operate(sortedMath[operatorAS - 1], sortedMath[operatorAS + 1], sortedMath[operatorAS])
        sortedMath.splice(operatorAS - 1,3, answer)
    }
    alert(sortedMath)
    
    //let answer = operate(Number(sortedMath[0]),Number(sortedMath[2]),sortedMath[1])
    //display.textContent = answer
})

clear.addEventListener("click",()=>{
    mathValues = ""
    display.textContent = ""
})

