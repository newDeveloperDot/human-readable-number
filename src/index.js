module.exports = function toReadable (number) {
  if (number === 0) return "zero";

  const hundred = Math.floor(number / 100);
  const numberDecimal = number % 100;

  const decimal = Math.floor(numberDecimal / 10);
  const unit = numberDecimal % 10;

  const units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const unitsTeen = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const decimals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  let result = "";
  if (hundred > 0) result += units[hundred] + " hundred ";

  if (numberDecimal > 10 && numberDecimal < 20) result += unitsTeen[unit];
  else {
    if (decimal > 0) result += decimals[decimal] + " ";
    if (unit > 0) result += units[unit];
  }

  return result.trim();
}