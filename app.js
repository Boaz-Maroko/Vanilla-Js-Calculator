// define the callback function to handle the button click event

function handleClick(event) {
    const clickedBtn = event.target.textContent;
    screen.textContent += clickedBtn;
}

// define a function to handle the equations

function handleOperation() {
    const screen = document.querySelector('#screen');
    const operation = screen.textContent;

    // Extract numbers and operators
    const terms = operation.match(/\d+/g).map(Number); // Convert terms to numbers
    const operator = operation.match(/[\+\-\*\/]/)?.[0]; // Extract the first operator

    let result;

    switch (operator) {
        case '+':
            result = terms[0] + terms[1];
            break;
        case '-':
            result = terms[0] - terms[1];
            break;
        case '*':
            result = terms[0] * terms[1];
            break;
        case '/':
            result = terms[0] / terms[1];
            break;
        default:
            result = "Invalid Operation";
    }

    // Display the result
    screen.textContent = result;
}




// Frontend controls and buttons
const screen = document.querySelector('#screen');
const buttons = document.querySelectorAll('.button');
const equalBtn = document.querySelector('#btn-eq').addEventListener('click', function() {
    handleOperation();
} 
)

const clearBtn = document.querySelector('#clear').addEventListener('click', () => {
    screen.textContent = '';
});

buttons.forEach(button => {
    button.addEventListener('click', function (event){
        if (event.target.textContent !== '=') {
            handleClick(event);
        }
    });
})