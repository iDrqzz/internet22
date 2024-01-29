let myArray = [2, 5, 8, 11];

function displayArray() 
{
    let arrayOutput = document.getElementById('arrayOutput');
    arrayOutput.textContent = `Array: [${myArray.join(', ')}]`;
}

let addOne = (num) => 
{
    num += 1;
    console.log(num);
};

function processNumber(expression, num) 
{
    num % 2 === 0 ? expression(num) : console.log("The number is odd");
}

for (let index in myArray) 
{
    processNumber(addOne, parseInt(index));
}

displayArray();