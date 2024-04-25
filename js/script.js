document.addEventListener("DOMContentLoaded", function() {
    const celciusInput = document.querySelector(".suhu-celcius input[type='text']");
    const fahrenheitInput = document.querySelector(".suhu-fahrenheit input[type='text']");
    const convertButton = document.querySelector(".a1");
    const resetButton = document.querySelector(".a2");
    const reverseButton = document.querySelector(".a3");
    const calculationTextArea = document.querySelector(".kalkulasi");

    // Function to convert Celcius to Fahrenheit
    function celciusToFahrenheit(celcius) {
        return (celcius * 9/5) + 32;
    }

    // Function to update Fahrenheit input
    function updateFahrenheitInput() {
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = celciusToFahrenheit(celciusValue);
            fahrenheitInput.value = fahrenheitValue.toFixed(2); // Round to 2 decimal places
            calculationTextArea.textContent = `${celciusValue} °C * 9/5 + 32 = ${fahrenheitValue.toFixed(2)} °F`;
        } else {
            fahrenheitInput.value = "";
            calculationTextArea.textContent = "";
        }
    }

    // Event listener for Convert button
    convertButton.addEventListener("click", function() {
        updateFahrenheitInput();
    });

    // Event listener for Reset button
    resetButton.addEventListener("click", function() {
        celciusInput.value = "";
        fahrenheitInput.value = "";
        calculationTextArea.textContent = "";
    });

    // Event listener for Reverse button
    reverseButton.addEventListener("click", function() {
        const temp = celciusInput.value;
        celciusInput.value = fahrenheitInput.value;
        fahrenheitInput.value = temp;
        updateFahrenheitInput();
    });
});
