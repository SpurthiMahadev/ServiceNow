function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any value in the loop, it's not prime
    if (number % i === 0) {
      return false;
    }
  }

  // If the loop completes without finding a divisor, the number is prime
  return true;
}

// Example usage
const testNumber = 17;

if (isPrime(testNumber)) {
  console.log(`${testNumber} is a prime number.`);
} else {
  console.log(`${testNumber} is not a prime number.`);
}
