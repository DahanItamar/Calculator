// Selecting the elements
const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons');
const buttonList = buttons.querySelectorAll('.button');

// Creating a variable to store the current calculation
let calculation = '';

// Adding event listeners to the buttons
buttonList.forEach(button => {
  button.addEventListener('click', () => {

    const value = button.getAttribute('value');
    
    // Handling the different button actions using a switch case
    switch (value) {
      case 'AC':
        calculation = '';
        updateDisplay('');
        break;
      case '+-':
        calculation = -calculation;
        updateDisplay(formatNumber(calculation));
        break;
      case '%':
        calculation = calculation / 100;
        updateDisplay(formatNumber(calculation));
        break;
      case '=':
        try {
          calculation = eval(calculation);
          if (!Number.isFinite(calculation)) {
            throw 'Invalid Calculation';
          }
          updateDisplay(formatNumber(calculation));
        } catch (error) {
          console.error(error);
          calculation = '';
          updateDisplay('Error');
        }
        break;
      default:
        if (calculation.length >= 15) {
          calculation = Number(calculation).toExponential(8);
        }
        if (value === '.' && calculation.includes('.')) {
          console.error('Invalid Input');
          break;
        }
        calculation += value;
        updateDisplay(formatNumber(calculation));
    }
  });
});

// Function to update the display
function updateDisplay(value) {
  display.textContent = value;
}

// Function to format the number
function formatNumber(number) {
  let strNumber = number.toString();
  let parts = strNumber.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
}
