let firstOperand;
let secondOperand;
let sign;
let overwrite = true;

const display = document.getElementById("display");
const numberButton = document.getElementsByClassName("numBtn");
const clearButton = document.getElementById("clear");
const signButton = document.getElementsByClassName("sign");

for (let i = 0; i < numberButton.length; i++) {
    numberButton[i].addEventListener("click", (event) => {
        handleNumberType(event, numberButton[i].value);
    })
}

for (let i = 0; i < signButton.length; i++) {
    signButton[i].addEventListener("click", (event) => {
        handleSignInput(event, signButton[i].value);
    })
}

clearButton.addEventListener("click", clearDisplay);

function handleNumberType(event, numValue) {
    if (overwrite) {
        display.value = "";
        overwrite = false;
    }
    display.value += numValue;
}

function handleSignInput(event, signValue) {
    overwrite = true;
    if (!firstOperand) {
        firstOperand = Number(display.value);
        sign = signValue;
    }
    else {
        if (!sign) { sign = signValue; }
        secondOperand = Number(display.value);
        operate(firstOperand, secondOperand, sign);
        firstOperand = Number(display.value);
        secondOperand = null;
        sign = (signValue !== "=") ? signValue : null;
    }
}

function clearDisplay(event) {
    display.value = "";
    firstOperand = null;
    secondOperand = null;
    sign = null;
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
    let result;
    switch(sign) {
        case "+":
            result = sum(firstNum, secondNum);
            break;
        case "-":
            result = minus(firstNum, secondNum);
            break;
        case "/":
            result = division(firstNum, secondNum);
            break;
        case "*":
            result = multiplication(firstNum, secondNum);
            break;
        default:
            throw new Error("Invalid operator");
    }
    clearDisplay
    display.value = result;
}