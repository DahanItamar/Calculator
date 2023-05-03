# Calculator
The code is an implementation of a basic calculator using HTML, CSS, and JavaScript. The HTML and CSS code creates a container with a display and buttons. The JavaScript code handles the click events on the buttons and performs the calculations.

The code first selects the elements it needs to manipulate using the querySelector method. It then creates a variable calculation to store the current calculation. It also defines a formatNumber function to format the numbers before displaying them on the calculator's display.

The code then adds event listeners to each button using a forEach loop. When a button is clicked, the value of the button is retrieved using getAttribute('value'). The code then uses a switch case to handle the different button actions. If the button is 'AC', the calculation variable is set to an empty string, and the display is updated to an empty string. If the button is '+-', the calculation variable is negated and updated on the display. If the button is '%', the calculation variable is divided by 100 and updated on the display. If the button is '=', the eval function is used to evaluate the calculation variable, and the result is updated on the display. If there is an error in the calculation, an error message is displayed on the display. If the button is any other number or operator, it is added to the calculation variable, and the display is updated.

Finally, the code defines CSS styles for the calculator container, display, and buttons.

Overall, the code is a basic implementation of a calculator and could be extended to include additional functionality, such as parentheses, exponentiation, and trigonometric functions.