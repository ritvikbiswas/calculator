let value = 0;
let result = 0;

let arithmeticThis = [];
const arithmetic = () => {
    if(arithmeticThis.length === 2){
        arithmeticThis.push(result);
        const val1 = arithmeticThis[0];
        const op = arithmeticThis[1];
        const val2 = arithmeticThis[2];
        if(op === '+')
            result = val1 + val2;
        if(op === '-')
            result = val1 - val2;
        if(op === '×')
            result = val1 * val2;
        if(op === '÷')
            result = val1 / val2;

        //resultContainer.innerText = result;
    }
};

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const calcContainer = document.querySelector(".calculator-container");
const resultContainer = document.querySelector(".result-container");

resultContainer.innerText = result;

calcContainer.addEventListener('click', (event) => {
    value = event.target.innerText;

    //grey buttons
    if(numbers.find(num => num === value)){
        //console.log(result);
        if(resultContainer.innerText === '0'){
            resultContainer.innerText = value;
            result = parseInt(value);
        }else{
            resultContainer.innerText += value;
            result = parseInt(resultContainer.innerText);
        }
    }

    if(value === 'C'){
        result = 0;
        resultContainer.innerText = result;
    }

    if(value == '←'){
        let temp = resultContainer.innerText;
        temp = temp.substring(0, temp.length - 1);
        //console.log(temp);
        if(temp == '')
            temp = '0';
        result = parseInt(temp);
        resultContainer.innerText = temp;
    }

    //orange button - math logic
    if(value === '÷'){
        arithmetic();
        arithmeticThis = [];
        arithmeticThis.push(result);
        arithmeticThis.push(value);
        resultContainer.innerText = '0';
    }
    if(value === '×'){
        arithmetic();
        arithmeticThis = [];
        arithmeticThis.push(result);
        arithmeticThis.push(value);
        resultContainer.innerText = '0';
    }
    if(value === '−'){
        arithmetic();
        arithmeticThis = [];
        arithmeticThis.push(result);
        arithmeticThis.push(value);
        resultContainer.innerText = '0';
    }
    if(value === '+'){
        arithmetic();
        arithmeticThis = [];
        arithmeticThis.push(result);
        arithmeticThis.push(value);
        console.log(arithmeticThis);
        resultContainer.innerText = '0';
    }
    if(value === '='){
        arithmetic();
        resultContainer.innerText = result;
        arithmeticThis = [];
    }
});

