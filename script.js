const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

convertBtn.addEventListener('click', convertTemperature);

function convertTemperature() {
  const celsiusValue = parseFloat(celsiusInput.value);
  const fahrenheitValue = (celsiusValue * 9/5) + 32;

  if (!isNaN(fahrenheitValue)) {
    fahrenheitInput.value = fahrenheitValue;
    outputDiv.textContent = `Converted to Fahrenheit: ${fahrenheitValue}`;
  } else {
    fahrenheitInput.value = '';
    outputDiv.textContent = '';
  }
}
