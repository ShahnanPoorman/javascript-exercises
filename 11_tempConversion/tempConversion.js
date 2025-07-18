const convertToCelsius = function(x) {
  return parseFloat(((x - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function(x) {
  return parseFloat((x * (9 / 5) + 32).toFixed(1));
};

console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
