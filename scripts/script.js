function add(a, b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function modulo(a,b){
    return a%b;
}

function operate(operator, a, b){
    if (operator == "+"){
        return add(a, b);
    }

    if (operator == "-"){
        return subtract(a, b);
    }

    if (operator == "*"){
        return multiply(a, b);
    }
    
    if (operator == "/"){
        return divide(a, b);
    }

    if (operator == "%"){
        return modulo(a, b);
    }
}

function display(){
    var x = document.getElementById("display");
    x.setAttribute("value", "1");
}