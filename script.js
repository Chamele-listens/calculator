
function add(a,b){
    return a + b
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

const numberButtons = document.querySelectorAll('.number')

numberButtons.forEach((button)=>{
    button.addEventListener("click",()=> {
        const display = document.querySelector(".display")
        let mathValues = display.textContent += button.value
    })
})