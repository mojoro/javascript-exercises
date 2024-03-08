const convertToCelsius = function(degreesF) {
  return Math.round(((degreesF - 32) * (5/9)) * 10) / 10;
};

const convertToFahrenheit = function(degreesC) {
  return Math.round((degreesC * (9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// x °C ≘ (x × 9/5 + 32) °F 	
// x °F ≘ (x − 32) × 5/9 °C 