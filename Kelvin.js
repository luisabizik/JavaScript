// assigning constant value to kelvin
const kelvin = 293;

// assigning constant value to celsius
const celsius = kelvin - 273;

// assigning the value to fahrenheit. no constant because we need it to be modified
let fahrenheit = celsius * (9/5) + 32;

//assigning .floor() method from the built-in Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
