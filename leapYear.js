function isLeapYear(year) {
  // Leap years are divisible by 4
  // But not divisible by 100 unless also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const testYear = 2024;
console.log(`${testYear} is a leap year?`, isLeapYear(testYear));
