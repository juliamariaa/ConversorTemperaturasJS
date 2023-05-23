// Função para converter Celsius para Kelvin
const celsiusToKelvin = celsius => parseFloat((celsius + 273.15).toFixed(2));

// Função para converter Kelvin para Celsius
const kelvinToCelsius = kelvin => parseFloat((kelvin - 273.15).toFixed(2));

// Função para converter Celsius para Fahrenheit
const celsiusToFahrenheit = celsius => parseFloat((celsius * 9/5 + 32).toFixed(2));

// Função para converter Fahrenheit para Celsius
const fahrenheitToCelsius = fahrenheit => parseFloat(((fahrenheit - 32) * 5/9).toFixed(2));

// Função para converter Fahrenheit para Kelvin
const fahrenheitToKelvin = fahrenheit => parseFloat(((fahrenheit + 459.67) * 5/9).toFixed(2));

// Função para converter Kelvin para Fahrenheit
const kelvinToFahrenheit = kelvin => parseFloat((kelvin * 9/5 - 459.67).toFixed(2));
