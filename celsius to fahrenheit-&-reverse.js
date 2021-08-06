
//  
// celsiusToFahrenheit
function celsiusToFahrenheit(celsius){
    let convertToC = celsius * 9/5 +32;
    return convertToC;
}
var celcius1 = celsiusToFahrenheit(34);
console.log('Today: Temperature', celcius1, 'Fahrenheit'); 

// fahrenheit To Celsius
function fahrenheitToCelsius(fahrenheit){
    var convert = (fahrenheit - 32) * 5/9;
    return convert;
}

var fahrenheit = fahrenheitToCelsius(104)
console.log('Today: Temperature', fahrenheit, 'Celsius')

// (celsius - 32 ) * 5/9