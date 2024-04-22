document.addEventListener("DOMContentLoaded", function() {
    const celciusInput = document.querySelector(".section-celcius textarea");
    const fahrenheitInput = document.querySelector(".section-fahrenheit textarea");
    const convertButton = document.querySelector(".section-celcius button");
    const resetButton = document.querySelector(".section-celcius button:nth-of-type(2)");
    const reverseButton = document.querySelector(".section-celcius button:nth-of-type(3)");
    const calculationTextArea = document.querySelector(".section-result textarea");

    // Function to convert Celcius to Fahrenheit
    function celciusToFahrenheit(celcius) {
        return (celcius * 9/5) + 32;
    }

    // Function to convert Fahrenheit to Celcius
    function fahrenheitToCelcius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    // Function to update Fahrenheit input
    function updateFahrenheitInput() {
        const celciusValue = parseFloat(celciusInput.value);
        if (!isNaN(celciusValue)) {
            const fahrenheitValue = celciusToFahrenheit(celciusValue);
            fahrenheitInput.value = fahrenheitValue.toFixed(2); // Round to 2 decimal places
            calculationTextArea.value = `${celciusValue} °C * 9/5 + 32 = ${fahrenheitValue.toFixed(2)} °F`;
        } else {
            fahrenheitInput.value = "";
            calculationTextArea.value = "";
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
        calculationTextArea.value = "";
    });

    // Event listener for Reverse button
    reverseButton.addEventListener("click", function() {
        const temp = celciusInput.value;
        celciusInput.value = fahrenheitInput.value;
        fahrenheitInput.value = temp;
        updateFahrenheitInput();
    });
});
