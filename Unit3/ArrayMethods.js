let valuesArray = [];

function update() {
    const outputParagraph = document.getElementById('output');
    outputParagraph.innerHTML = ''; // Clear previous output
    const outputString = valuesArray.reduce((accumulator, currentValue, index) => {
        return accumulator + `${index + 1}. ${currentValue}<br>`;
    }, '');
    outputParagraph.innerHTML = outputString;
}

function pushItem() {
    const inputValue = document.getElementById('inputText').value;
    valuesArray.push(inputValue);
    update();
}

function popItem() {
    valuesArray.pop();
    update();
}

function unshiftItem() {
    const inputValue = document.getElementById('inputText').value;
    valuesArray.unshift(inputValue);
    update();
}

function shiftItem() {
    valuesArray.shift();
    update();
}

function arrMap() {
    const inputValue = document.getElementById('inputText').value;
    valuesArray = valuesArray.map(item => inputValue + item);
    update();
}