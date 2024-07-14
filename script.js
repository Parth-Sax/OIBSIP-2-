function convertTemperature() {
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitInput = document.getElementById('fahrenheit').value;
    const kelvinInput = document.getElementById('kelvin').value;

    if (celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        document.getElementById('fahrenheit').value = (celsius * 9/5 + 32).toFixed(2);
        document.getElementById('kelvin').value = (celsius + 273.15).toFixed(2);
    } else if (fahrenheitInput !== '') {
        const fahrenheit = parseFloat(fahrenheitInput);
        document.getElementById('celsius').value = ((fahrenheit - 32) * 5/9).toFixed(2);
        document.getElementById('kelvin').value = ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2);
    } else if (kelvinInput !== '') {
        const kelvin = parseFloat(kelvinInput);
        document.getElementById('celsius').value = (kelvin - 273.15).toFixed(2);
        document.getElementById('fahrenheit').value = ((kelvin - 273.15) * 9/5 + 32).toFixed(2);
    } else {
        alert('Please enter a value to convert.');
    }
}

function clearAll() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('kelvin').value = '';
}
