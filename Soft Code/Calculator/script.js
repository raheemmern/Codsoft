document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    let currentInput = '';
  
    function updateDisplay(value) {
      display.textContent = value;
    }
  
    function clear() {
      currentInput = '';
      updateDisplay('0');
    }
  
    document.querySelectorAll('.digit').forEach(digit => {
      digit.addEventListener('click', function () {
        currentInput += this.value;
        updateDisplay(currentInput);
      });
    });
  
    document.querySelectorAll('.operator').forEach(operatorBtn => {
      operatorBtn.addEventListener('click', function () {
        const value = this.textContent;
        if (value === 'C') {
          clear();
        } else if (value === '=') {
          try {
            const result = eval(currentInput);
            updateDisplay(result);
            currentInput = result.toString();
          } catch (error) {
            updateDisplay('Error');
            currentInput = '';
          }
        } else if (value === '←') {
          currentInput = currentInput.slice(0, -1);
          updateDisplay(currentInput);
        } else {
          if (value === '×') { // Check for multiplication operator
            currentInput += '*';
          } else {
            currentInput += value;
          }
          updateDisplay(currentInput);
        }
      });
    });
  });
  