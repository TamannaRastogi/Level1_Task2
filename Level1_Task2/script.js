// Get the div element by its ID
const blinkDiv = document.getElementById('blinkDiv');

// An array of colors to be used for blinking
const colors = ['#ff0000', 'black', '#0000ff'];

// Variable to keep track of the current color index
let currentColorIndex = 0;

// Function to toggle the background color of the div
function blinkBackground() {
    blinkDiv.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Start the blinking by setting an interval 
// that calls the blinkBackground function every 1000ms (1 second)
const blinkingInterval = setInterval(blinkBackground, 1000);

// To stop blinking after 5 seconds, use setTimeout to clear the interval
setTimeout(() => {
    clearInterval(blinkingInterval);
}, 5000);

// Function to change the background color of the body
function changeColor(color) {
    document.body.style.background = color;
}

// Function to be called on button click
function myFunc() {
    changeColor('pink'); // Corrected 'spink' to 'pink'
    const result = document.getElementById("GFG");
    result.innerHTML = "Background color changed";
}

// Function to get a greeting message based on the current time
function getGreeting() {
    const now = new Date();
    const hours = now.getHours();

    if (hours < 12) {
        return 'Good morning!';
    } else if (hours < 18) {
        return 'Good afternoon!';
    } else {
        return 'Good evening!';
    }
}

// Display a greeting message in an alert box
alert(getGreeting());

// Function to calculate the sum of two numbers
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = num1 + num2;
    document.getElementById('result').innerText = `Result: ${sum}`;
}