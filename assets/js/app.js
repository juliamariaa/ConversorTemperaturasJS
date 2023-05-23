let convertTemperature = document.querySelector('#button');

convertTemperature.addEventListener('click', () => {
    let currentTemp = parseFloat(document.querySelector('#numberTemperature').value);
    let currentTempUnit = document.querySelector('#currentTemperature').value;
    let selectedTempUnit = document.querySelector('#selectedTemperature').value;
    let error = document.querySelector('#errorMessage');
    let currentResult = document.querySelector('#result');

    // Limpa mensagem de error 
    error.textContent = ""
   
    if (currentTempUnit === 'Celsius' && selectedTempUnit === 'Kelvin') {
        let result = celsiusToKelvin(currentTemp);
        currentResult.textContent = `${result}K`;
    } else if (currentTempUnit === 'Celsius' && selectedTempUnit === 'Fahrenheit') {
        let result = celsiusToFahrenheit(currentTemp);
        currentResult.textContent = `${result}°F`;
    } else if (currentTempUnit === 'Fahrenheit' && selectedTempUnit === 'Celsius') {
        let result = fahrenheitToCelsius(currentTemp);
        currentResult.textContent = `${result}°C`;
    } else if (currentTempUnit === 'Fahrenheit' && selectedTempUnit === 'Kelvin') {
        let result = fahrenheitToKelvin(currentTemp);
        currentResult.textContent = `${result}K`;
    } else if (currentTempUnit === 'Kelvin' && selectedTempUnit === 'Fahrenheit') {
        let result = kelvinToFahrenheit(currentTemp);
        currentResult.textContent = `${result}°F`;
    } else if (currentTempUnit === 'Kelvin' && selectedTempUnit === 'Celsius') {
        let result = kelvinToCelsius(currentTemp);
        currentResult.textContent = `${result}°C`;
    } else {
        error.textContent = 'Você selecionou a mesma unidade de temperatura';
    }
});
