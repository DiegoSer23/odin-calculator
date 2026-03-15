let firstOperand;
let secondOperand;
let sign;

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