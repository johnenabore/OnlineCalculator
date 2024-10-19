let input = []; //array for (+)
let livePreview = "";// for history
let result = ""; // for result of calculation
let convertedResult;

function showSideBar(){
    side.style.display = 'flex';
}
function hideSideBar(){
    side.style.display = 'none';
}

//BUTTONS
let buttons = {
    one: document.getElementById("one").onclick = function (){
        result += "1";
        livePreview += "1";

        showInput();
    },
    two: document.getElementById("two").onclick = function (){
        result += "2";
        livePreview += "2";

        showInput();
    },
    three: document.getElementById("three").onclick = function (){
        result += "3";
        livePreview += "3";

        showInput();
    },
    four: document.getElementById("four").onclick = function (){
        result += "4";
        livePreview += "4";

        showInput();
    },
    five: document.getElementById("five").onclick = function (){
        result += "5";
        livePreview += "5";

        showInput();
    },
    six: document.getElementById("six").onclick = function (){
        result += "6";
        livePreview += "6";

        showInput();
    },
    seven: document.getElementById("seven").onclick = function (){
        result += "7";
        livePreview += "7";

        showInput();
    },
    eight: document.getElementById("eight").onclick = function (){
        result += "8";
        livePreview += "8";

        showInput();
    },
    nine: document.getElementById("nine").onclick = function (){
        result += "9";
        livePreview += "9";

        showInput();
    },
    zero: document.getElementById("zero").onclick = function (){
        result += "0";
        livePreview += "0";

        showInput();
    },
    delete: document.getElementById("delete").onclick = function (){
        document.getElementById("math").textContent = '';
        document.getElementById("result").textContent = '';
        input.length = 0;
    }

}

//OPERATORS
let operators = {
    equal: document.getElementById("equalsign").onclick = function(){
        convertedResult = Number(result);
        input.push(convertedResult);

        calculate();
    },
    add: document.getElementById("button_white4").onclick = function(){

        if(result != ""){
            convertedResult = Number(result);

            input.push(convertedResult);
            result = "";

        }

        livePreview += "+";
        input.push("+");

        showInput()
    },

    sub: document.getElementById("button_white3").onclick = function(){

        if(result != ""){
            convertedResult = Number(result);

            input.push(convertedResult);
            result = "";

        }

        livePreview += "-";
        input.push("-");

        showInput()
    },

    times: document.getElementById("button_white2").onclick = function(){

        if(result != ""){
            convertedResult = Number(result);

            input.push(convertedResult);
            result = "";

        }

        livePreview += "x";
        input.push("x");

        showInput()
    },
    divide: document.getElementById("button_white").onclick = function(){

        if(result != ""){
            convertedResult = Number(result);

            input.push(convertedResult);
            result = "";

        }

        livePreview += "÷";
        input.push("÷");

        showInput()
}
}

//SHOW HISTORY INPUT
function showInput(){
    document.getElementById("math").innerHTML = livePreview;
}

//SHOW RESULT OPERATIONS
function calculate() {
    let answer;
    for(let i = 0; i<=input.length; i++){
        if(input[i] == 'x'){
            let operand1 = input[i - 1];
            let operand2 = input[i + 1];

            answer = operand1 * operand2;

            input.splice(i - 1, 3, answer)

        }
        if(input[i] == '÷'){
            let operand1 = input[i - 1];
            let operand2 = input[i + 1];

            answer = operand1 / operand2;

            input.splice(i -1, 3, answer)

        }
        if(input[i] == '+'){
            let operand1 = input[i - 1];
            let operand2 = input[i + 1];

            answer = operand1 + operand2;

            input.splice(i -1, 3, answer)

        }
            if(input[i] == '÷'){
            let operand1 = input[i - 1];
            let operand2 = input[i + 1];

            answer = operand1 / operand2;

            input.splice(i -1, 3, answer)

        }
            if(input[i] == '-'){
            let operand1 = input[i - 1];
            let operand2 = input[i + 1];

            answer = operand1 - operand2;

            input.splice(i -1, 3, answer)
    }
    document.getElementById("result").innerHTML = answer;

    console.log(input)


}
}