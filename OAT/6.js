//Conversor Universal de Temperaturas
function celsiusParaFahrenheit(celsius) {
    if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
        throw new TypeError('O valor fornecido não é um número válido.');
    }
    const fahrenheit = (celsius * 1.8) + 32;
    return parseFloat(fahrenheit.toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || Number.isNaN(fahrenheit)) {
        throw new TypeError('O valor fornecido não é um número válido.');
    }
    const celsius = (fahrenheit - 32) / 1.8;
    return parseFloat(celsius.toFixed(2));
}
console.log(celsiusParaFahrenheit(30)); 
console.log(fahrenheitParaCelsius(86)); 


