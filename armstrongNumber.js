function isArmstrongNumber(number) {
  const digits = number.toString().split('');
  const numDigits = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);
  return sum === number;
}

const testNumber = 1634;
console.log(`${testNumber} is an Armstrong number?`, isArmstrongNumber(testNumber));
