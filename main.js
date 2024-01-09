const display = document.querySelector('.input_output');
const input = document.querySelectorAll("button");

const operands = ["+", "*", "-", "/", "="];
let outputVal = "";

const calc = (btnVal) => {
    if(btnVal === "=" && outputVal !== ""){
        outputVal =  eval(outputVal.replace("%", "/100"));
    }
    else if(btnVal === "AC"){
        outputVal = "";
    } 
    else if(btnVal === "backspace"){
        outputVal = outputVal.toString().slice(0, -1);
    }
    else{
        if (outputVal === "" && operands.includes(btnVal))
            return;
        outputVal += btnVal;
    }
    display.value = outputVal;
}

input.forEach((btn) => {
    btn.addEventListener("click", (b) => 
    calc(b.target.dataset.value))
});