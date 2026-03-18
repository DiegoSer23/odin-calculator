let firstOperand;
let secondOperand;
let sign;

const display = document.getElementById("display");
const numberButton = document.getElementsByClassName("numBtn");
const clearButton = document.getElementById("clear");
const sumButton = document.getElementById("plus");

for (let i=0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", (event) => {
        handleNumberType(event, numberButton[i].value);
    })
}

clearButton.addEventListener("click", clearDisplay);

function handleNumberType(event, numValue) {
    display.value += numValue;
}

function clearDisplay(event) {
    display.value = "";
}

function sum(firstNum, secondNum) {
    return (firstNum + secondNum);
}

function minus(firstNum, secondNum) {
    return (firstNum - secondNum);
}

function division(firstNum, secondNum) {
    return (firstNum / secondNum);
}

function multiplication(firstNum, secondNum) {
    return (firstNum * secondNum);
}

function validateNumbers(first, second) {
    const validNum1 = (typeof first === "number" && Number.isFinite(first));
    const validNum2 = (typeof second === "number" && Number.isFinite(second));
    return (validNum1 && validNum2);  
}

function operate(firstNum, secondNum, sign) {
    if (!validateNumbers(firstNum, secondNum)) {
        throw new Error("Both parameters must be valid numbers");
    }
    switch(sign) {
        case "+":
            sum(firstNum, secondNum);
            break;
        case "-":
            minus(firstNum, secondNum);
            break;
        case "/":
            division(firstNum, secondNum);
            break;
        case "*":
            multiplication(firstNum, secondNum);
            break;
        default:
            throw new Error("Invalid operator");
    }
}